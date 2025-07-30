import { Title, Subtitle, Description, Primary, Stories, Controls } from '@storybook/addon-docs/blocks';

interface DocsProps<T> {
  component: T;
  hideStories?: boolean;
  supernovaLink?: string;
  belowControlsContent?: React.ReactNode;
}

const Docs = <T,>(props: DocsProps<T>): React.JSX.Element => {
  const searchParams = new URLSearchParams(window.location.search);
  const newWindowUrl = `${window.location.pathname}?id=${searchParams.get('id')}&viewMode=docs`;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title />
        <div>
          <a target="_blank" href={newWindowUrl} rel="noreferrer">
            {'Åpne i ny fane'}
          </a>
        </div>
      </div>
      {props.supernovaLink && (
        <a target="_blank" href={props.supernovaLink} rel="noreferrer">
          {'Se komponentens dokumentasjon'}
        </a>
      )}
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      {props.belowControlsContent}
      {!props.hideStories && <Stories />}
    </>
  );
};

export default Docs;
