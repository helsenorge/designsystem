import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import * as deprecated from 'jquery';
import * as classNames from 'classnames';
import * as uuid from 'uuid';
import Phone from '../../../utils/phone-link';
import CustomTag from '../../../utils/custom-tag';
import {getHelsenorgeUrl} from '../../../utils/hn-service';
import {InlineButton} from '../buttons/inline-button';
import {OperationResponse, TextMessage} from './types';
import Description from './description';
import './message-box.scss';

export interface Props {
  /** ID til meldingen. */
  id?: string;

  /** Tittel. Blir bold hvis description (se under) har verdi. HTML blir rendret. */
  title?: string;

  /** HTML-tag for tittelen. Bør settes i henhold til header-hierarkiet hvor meldingen plasseres.
   */
  titleHtmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

  /** Beskrivelse. HTML blir rendret. */
  description?: string;

  /** info: Info-ikon og grønn bakgrunn.
   * alert: Advarsel-ikon og gul bakgrunn.
   * error: Feil-ikon og rød bakgrunn.
   * success: Sjekk-ikon og grønn bakgrunn.
   * thirdparty: Tredjepartsmelding.
   */
  type?: 'info' | 'alert' | 'error' | 'success' | 'thirdparty';

  /** Vises som egen paragraf i bold. */
  plea?: string;

  /** Maks lengde for beskrivelsen.
   * Viser knapp for å lese mer hvis over grensen.
   * Brukes bare hvis tredjepartsmelding.
   */
  maxlength?: number;

  /** Tekst for knappen for å vise mer. Brukes bare hvis thirdparty. */
  readMoreButtonText?: string;

  /** Vises i egen paragraf i mindre størrelse. */
  timestamp?: string;

  /** Gir spesifikk bredde til innholdet i meldingen ved ulike kolonnebredder. */
  fullBleed?: boolean;

  /** Egendefinerte klassenavn. */
  className?: string;

  /** Konverterer alle <a href="tel:<tlfnr>" elementer til Phone-komponenter (toolkit). */
  convertPhoneNumbers?: boolean;

  /** Error object returned from the new ClientService architecture. */
  clientServiceFault?: OperationResponse;

  /** Egendefinert innhold. */
  messageboxContent?: string | JSX.Element[];

  /** Setter ikke tabIndex for tittelen. */
  noTabIndex?: boolean;

  /** Bestemmer om lukkekryss skal vises. Funksjonen kjøres ved klikk på krysset. */
  onClose?: () => void;

  /** Assistive role. */
  role?: string;

  /** Bestemmer om det skal fokuseres på tittelen. */
  focus?: boolean;
}

export interface State {
  expanded: boolean;
  hiddenAssistive?: boolean;
  headerId?: string;
  nearestHeader?: string;
}

export interface DangerousHTML {
  __html: string;
}

interface Assistive {
  role?: string;
}

const assistiveDelay = 300;

/*
 * Messagebox brukes for å vise meldinger. Dersom type=error leses de automatisk opp av skjermleser
 */
export default class MessageBoxV2 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Content need to be rendered after wrapper to make assistive technologies read automatically
    const hiddenAssistive: boolean = this.props.type === 'error' || this.isClientServiceError();
    if (hiddenAssistive) {
      this.hideForAssistive();
    }
    this.state = {expanded: false, hiddenAssistive, headerId: uuid.v4()};
    this.onExpanderClick = this.onExpanderClick.bind(this);
  }

  componentDidMount(): void {
    if (this.props.convertPhoneNumbers) {
      this.convertPhoneNumbers();
    }
    if (this.state.headerId && !this.props.titleHtmlTag) {
      // find the nearest header to determine what tag the message title should have
      const nearestHeader: JQuery = deprecated(`#${this.state.headerId}`)
        .closest(':has(h1, h2, h3, h4, h5)')
        .find('h1, h2, h3, h4, h5');
      // if the nearest header has a higher top value we assume that it is below the message title in the DOM, and think that H1 is closer
      if (
        nearestHeader.length === 0 ||
        nearestHeader.offset().top > deprecated(`#${this.state.headerId}`).offset().top
      ) {
        this.setState({nearestHeader: 'H1'});
      } else {
        this.setState({nearestHeader: nearestHeader.prop('tagName')});
      }
    }
  }

  componentWillReceiveProps(nextProps: Props): void {
    if (nextProps.type === 'error' && this.props.type !== 'error') {
      this.setState({hiddenAssistive: true});
      this.hideForAssistive();
    }
  }

  onExpanderClick(e: React.MouseEvent<{}>): void {
    e.preventDefault();
    const expanded: boolean = this.state.expanded;
    this.setState({expanded: !expanded});
  }

  setupClientServiceFault(title: JSX.Element | undefined, description: JSX.Element | undefined) {
    if (title && description) {
      return null;
    }

    let fault: TextMessage = {Title: '', Body: ''};
    const clientFault = this.props.clientServiceFault;
    if (clientFault) {
      if (clientFault.ErrorMessage) {
        fault = clientFault.ErrorMessage;
      } else if (clientFault.WarningMessage) {
        fault = clientFault.WarningMessage;
      } else if (clientFault.InformationMessage) {
        fault = clientFault.InformationMessage;
      }
    }
    return fault;
  }

  hideForAssistive(): void {
    setTimeout(() => {
      this.setState({hiddenAssistive: false});
    }, assistiveDelay);
  }

  // Converts all <a href="tel..." elements to Phone components
  convertPhoneNumbers(): void {
    const node = ReactDOM.findDOMNode(this);
    if (node instanceof Element) {
      const links: Array<HTMLLinkElement> = [].slice.call(node.querySelectorAll('a'));

      for (let i = 0; i < links.length; i++) {
        if (links[i].href.substring(0, 3) === 'tel') {
          /* const phoneNumber = links[i].href.split(':')[1].trim();*/
          const phoneNumber: string = links[i].innerText;
          const phoneElement: HTMLSpanElement = document.createElement('span');

          phoneElement.innerHTML = ReactDOMServer.renderToString(<Phone number={phoneNumber} />);
          const parent = links[i].parentNode;
          if (parent) {
            parent.insertBefore(phoneElement, links[i]);
            parent.removeChild(links[i]);
          }
        }
      }
    }
  }

  isMessageBoxTypePropsSet() {
    return this.props.type === 'info' || this.props.type === 'alert' || this.props.type === 'error';
  }

  isClientServiceError(): boolean {
    if (this.isMessageBoxTypePropsSet()) {
      return false;
    }
    if (!this.props.clientServiceFault) {
      return false;
    }
    /*if using fetch */
    if (this.props.clientServiceFault.ErrorMessage) {
      return true;
    }
    /*If using jQuery */

    return !(!this.props.clientServiceFault || !this.props.clientServiceFault.ErrorMessage);
  }

  isClientServiceWarn(): boolean {
    if (this.isMessageBoxTypePropsSet()) {
      return false;
    }
    if (!this.props.clientServiceFault) {
      return false;
    }
    /*if using fetch*/
    if (this.props.clientServiceFault.WarningMessage) {
      return true;
    }
    /*If using jQuery  */

    return !(!this.props.clientServiceFault || !this.props.clientServiceFault.WarningMessage);
  }

  isClientServiceInfo(): boolean {
    if (this.isMessageBoxTypePropsSet()) {
      return false;
    }
    if (!this.props.clientServiceFault) {
      return false;
    }
    /*if using fetch*/
    if (this.props.clientServiceFault.InformationMessage) {
      return true;
    }
    /*If using jQuery  */

    return !(!this.props.clientServiceFault || !this.props.clientServiceFault.InformationMessage);
  }

  insertHelsenorgeUrl(tekst: string): string {
    if (tekst.indexOf('{HelsenorgeUrl}') !== -1) {
      const helsenorgeUrl = getHelsenorgeUrl();
      const newTekst = helsenorgeUrl ? tekst.replace(/{HelsenorgeUrl}/g, helsenorgeUrl) : tekst;
      return newTekst;
    }
    return tekst;
  }

  render(): React.ReactElement<{}> {
    const isInfo: boolean = this.props.type === 'info' || this.isClientServiceInfo();
    const isAlert: boolean = this.props.type === 'alert' || this.isClientServiceWarn();
    const isError: boolean = this.props.type === 'error' || this.isClientServiceError();
    const isSuccess: boolean = this.props.type === 'success';
    const isThirdParty: boolean = this.props.type === 'thirdparty';

    // create a custom heading tag based on which header is closest to this from the top of the DOM
    const tabIndex = this.props.noTabIndex ? undefined : -1;
    const tagName: string = this.props.titleHtmlTag
      ? this.props.titleHtmlTag
      : this.state.nearestHeader
      ? this.state.nearestHeader === 'H1'
        ? 'h2'
        : `h${parseInt(this.state.nearestHeader.slice(-1), 10) + 1}`
      : 'p';

    let title;
    if (!!this.props.title) {
      title = (
        <CustomTag
          tagName={tagName}
          className="atom_messagebox_v2__heading"
          id={this.state.headerId}
          tabIndex={tabIndex}
          focus={this.props.focus}>
          {this.insertHelsenorgeUrl(this.props.title)}
        </CustomTag>
      );
    }

    let description;

    if (!!this.props.description) {
      description = (
        <Description
          description={this.props.description}
          isThirdParty={isThirdParty}
          maxlength={this.props.maxlength}
          expanded={this.state.expanded}
          readMoreButtonText={this.props.readMoreButtonText}
          onExpanderClick={this.onExpanderClick}
        />
      );
    }

    let plea;
    if (!!this.props.plea) {
      plea = (
        <p>
          <strong>{this.props.plea}</strong>
        </p>
      );
    }

    let timestamp;
    if (!!this.props.timestamp) {
      timestamp = <p className="errortimestamp">{this.props.timestamp}</p>;
    }

    if (this.props.clientServiceFault) {
      const fault = this.setupClientServiceFault(title, description);
      if (fault && !title) {
        const tabIndex = this.props.noTabIndex ? undefined : -1;
        title = (
          <CustomTag
            tagName={tagName}
            className="atom_messagebox_v2__heading"
            id={this.state.headerId}
            tabIndex={tabIndex}
            focus={this.props.focus}>
            {fault.Title}
          </CustomTag>
        );
      }
      if (fault && !this.props.description) {
        description = <p dangerouslySetInnerHTML={{__html: fault.Body}} />;
      }
    }

    let closeButton;
    if (this.props.onClose) {
      closeButton = <InlineButton type="close" onClick={this.props.onClose} ariaLabel="Lukk" />;
    }

    const classes: string = classNames(
      {
        atom_messagebox_v2: true,
        lvl1: !!description,
        lvl2: !description,
        error: isError,
        alert: isAlert,
        info: isInfo,
        success: isSuccess,
        'full-bleed': this.props.fullBleed,
        thirdparty: isThirdParty,
        'with-expander': isThirdParty && this.props.maxlength !== undefined && this.props.maxlength > 0,
        'has-close-button': !!this.props.onClose,
      },
      this.props.className,
    );

    const assistive: Assistive = {};
    if (this.props.role) {
      assistive.role = this.props.role;
    } else if (isError) {
      assistive.role = 'alert';
      assistive['aria-atomic'] = 'true';
    }

    const messageboxContent = this.props.messageboxContent;
    const hiddenAssistive = this.state.hiddenAssistive ? null : <span />;
    const contentClasses: string = classNames({content: true, open: this.state.expanded});

    const content: JSX.Element = (
      <div>
        {title}
        {description}
        {plea}
        {timestamp}
        {messageboxContent}
        {closeButton}
        {hiddenAssistive}
      </div>
    );

    return (
      <div id={this.props.id} className={classes} {...assistive}>
        <div className="content-wrapper">
          <div className={contentClasses}>{content}</div>
        </div>
        {this.props.children ? <div className="children-wrapper">{this.props.children}</div> : false}
      </div>
    );
  }
}
