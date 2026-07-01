import type React from 'react';
import { Children, isValidElement, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { animate, useReducedMotion } from 'motion/react';

import { type NavigateProps, DrawerNavigationContext } from './useDrawerNavigation';
import uuid from '../../../utils/uuid';
import Drawer from '../../Drawer';
import DrawerHeaderContent from '../../Drawer/DrawerHeaderContent';

import styles from './styles.module.scss';

export interface DrawerViewProps<ViewId extends string = string> {
  /** Id for the view. Important for navigation */
  id: ViewId;
  /** Title used for Drawer in current view */
  title: string;
  /** Mark this view as the home/default view */
  home?: boolean;
  /** Content inside the drawer for this view */
  children: React.ReactNode;
  /** Default onClose callback for drawer. Will override onCloseButton on parent */
  onCloseButton?: () => void;
  /** Content sent to footer section of Drawer. Will override footer on parent */
  footer?: React.ReactNode;
  /** Classname set on the content inside Drawer */
  drawerContentClassname?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DrawerView<ViewId extends string>(_props: DrawerViewProps<ViewId>): React.ReactNode {
  // DrawerView is never rendered directly — DrawerNavigation reads its props
  return null;
}

export interface DrawerNavigationProps {
  /** Views and other children components inside the Drawer navigation. Views are put in stack */
  children: React.ReactNode;
  /** Is drawer open or closed */
  isOpen: boolean;
  /** Navigate to this view when the drawer opens. Defaults to home view. */
  initialView?: string;
  /** Default onClose callback for drawer. View onCloseButton callback will override this. */
  onCloseButton?: () => void;
  /** Content sent to footer section of Drawer. View footer will override this */
  footer?: React.ReactNode;
}

function parseChildren(children: React.ReactNode): { views: DrawerViewProps[]; other: React.ReactNode[] } {
  const views: DrawerViewProps[] = [];
  const other: React.ReactNode[] = [];
  Children.forEach(children, child => {
    if (isValidElement<DrawerViewProps>(child) && child.type === DrawerView) {
      views.push({
        id: child.props.id,
        title: child.props.title,
        home: child.props.home,
        children: child.props.children,
        onCloseButton: child.props.onCloseButton,
        footer: child.props.footer,
        drawerContentClassname: child.props.drawerContentClassname,
      });
    } else {
      /** Added possibility of other children to support Modals that need navigation context */
      other.push(child);
    }
  });
  return { views, other };
}

function DrawerNavigation({ children, isOpen, initialView, onCloseButton, footer }: DrawerNavigationProps): React.ReactNode {
  const { views, other } = useMemo(() => parseChildren(children), [children]);

  const incomingContentRef = useRef<HTMLDivElement>(null);
  const outgoingContentRef = useRef<HTMLDivElement>(null);
  const incomingHeaderRef = useRef<HTMLDivElement>(null);
  const outgoingHeaderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleId = useMemo(() => uuid(), []);
  const homeView = views.find(v => v.home) ?? views[0];
  const [viewStack, setViewStack] = useState<string[]>([homeView?.id]);
  const prevStackLength = useRef<number>(viewStack.length);
  const prevView = useRef<DrawerViewProps | undefined>(undefined);
  const reducedMotion = useReducedMotion();

  const currentViewId = viewStack[viewStack.length - 1];
  const currentView = views.find(v => v.id === currentViewId);

  // The previous view, kept mounted as an overlay while it slides out during a navigation transition
  const [outgoing, setOutgoing] = useState<{ view: DrawerViewProps; dir: 'left' | 'right'; withBackButton: boolean } | null>(null);

  const goToView = useCallback(
    (id: string): void => {
      if (views.some(v => v.id === id)) {
        setViewStack(stack => [...stack, id]);
      }
    },
    [views]
  );

  const goBack = useCallback((): void => {
    setViewStack(stack => (stack.length > 1 ? stack.slice(0, -1) : stack));
  }, []);

  const goToViewAndClearStack = useCallback(
    (id: string): void => {
      if (views.some(v => v.id === id)) {
        setViewStack(id === homeView?.id ? [homeView.id] : [homeView?.id, id]);
      }
    },
    [views, homeView]
  );

  // Detect a navigation and capture the outgoing view + direction
  useEffect(() => {
    if (!isOpen) {
      prevView.current = undefined;
      return;
    }

    const previous = prevView.current;
    prevView.current = currentView;

    const previousStackLength = prevStackLength.current;
    const dir: 'left' | 'right' = viewStack.length >= previousStackLength ? 'left' : 'right';
    prevStackLength.current = viewStack.length;

    if (isOpen && !reducedMotion && previous && currentView && previous.id !== currentView.id) {
      setOutgoing({ view: previous, dir, withBackButton: previousStackLength > 1 });
    }
  }, [viewStack, currentView, isOpen]);

  // Animates the incoming and outgoing views
  useLayoutEffect(() => {
    if (!outgoing || !incomingContentRef.current || !outgoingContentRef.current) {
      return;
    }

    const incomingFrom = outgoing.dir === 'left' ? '100%' : '-100%';
    const outgoingTo = outgoing.dir === 'left' ? '-100%' : '100%';
    const options = { duration: 0.3, ease: 'easeInOut' } as const;

    animate(incomingContentRef.current, { x: [incomingFrom, '0%'] }, options);
    if (incomingHeaderRef.current) {
      animate(incomingHeaderRef.current, { x: [incomingFrom, '0%'] }, options);
    }
    if (outgoingHeaderRef.current) {
      animate(outgoingHeaderRef.current, { x: ['0%', outgoingTo] }, options);
    }
    const leaving = animate(outgoingContentRef.current, { x: ['0%', outgoingTo] }, { ...options, onComplete: () => setOutgoing(null) });

    return (): void => {
      leaving.stop();
    };
  }, [outgoing]);

  // Moves focus between incoming and outgoing view
  useEffect(() => {
    if (isOpen) {
      titleRef.current?.focus();
    }
  }, [currentViewId, isOpen]);

  const navigate = useMemo<NavigateProps>(() => ({ goBack, goToView, goToViewAndClearStack }), [goBack, goToView, goToViewAndClearStack]);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setViewStack([homeView?.id]);
    } else if (initialView && views.some(v => v.id === initialView)) {
      setViewStack(initialView === homeView?.id ? [homeView.id] : [homeView?.id, initialView]);
    }
  }

  const headerContent = (
    <div className={styles.header} style={{ overflow: outgoing ? 'hidden' : 'visible' }}>
      {outgoing && (
        <div ref={outgoingHeaderRef} aria-hidden inert className={styles['header__layer']} style={{ position: 'absolute', inset: 0 }}>
          <DrawerHeaderContent title={outgoing.view.title} withBackButton={outgoing.withBackButton} onRequestBack={() => undefined} />
        </div>
      )}
      <div ref={incomingHeaderRef} className={styles['header__layer']}>
        <DrawerHeaderContent
          title={currentView?.title}
          titleId={titleId}
          titleRef={titleRef}
          withBackButton={viewStack.length > 1}
          onRequestBack={goBack}
        />
      </div>
    </div>
  );

  return (
    <DrawerNavigationContext.Provider value={navigate}>
      <Drawer
        isOpen={isOpen}
        onRequestClose={currentView?.onCloseButton ?? onCloseButton}
        footerContent={currentView?.footer ?? footer}
        contentClassName={currentView?.drawerContentClassname}
        paddingSize={'extra'}
        headerContent={headerContent}
      >
        <div className={styles['content']} style={{ overflow: outgoing ? 'hidden' : 'visible' }}>
          {outgoing && (
            <div ref={outgoingContentRef} aria-hidden inert style={{ position: 'absolute', width: '100%' }}>
              {outgoing.view.children}
            </div>
          )}
          <div ref={incomingContentRef}>{currentView?.children}</div>
        </div>
      </Drawer>
      {other}
    </DrawerNavigationContext.Provider>
  );
}

DrawerNavigation.View = DrawerView;

export default DrawerNavigation;
