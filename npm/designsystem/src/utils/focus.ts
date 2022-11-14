/**
 * Kopi fra core-frontend (focus-utils.tsx)
 * Returnerer document.activeElement (element in focus), uavhengig av om den er i document-dom eller shadow-dom
 * @param element HtmlElement som den skal søke i
 */
export const getDocumentActiveElement = (element: HTMLElement | string): Element | null => {
  try {
    const domNode = typeof element === 'string' ? (document.querySelector(element) as HTMLElement) : element;
    const root = domNode.getRootNode() as Document;
    return root.activeElement;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Feil ved å ta tak i active element basert på angitt node: ', element, e);
    return null;
  }
};
