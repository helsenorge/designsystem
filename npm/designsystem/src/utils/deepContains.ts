/**
 * Determines whether a given container node contains a specific element, traversing through shadow DOM boundaries if necessary.
 * This function extends the behavior of `Node.contains` to support scenarios involving shadow DOM.
 *
 * @param container - The container node to check, typically the document or a specific DOM element.
 * @param element - The target node to verify if it is contained within the container.
 * @returns `true` if the container node contains the target node, including through shadow DOM boundaries; otherwise, `false`.
 */
export function deepContains(container: Node, element: Node | null): boolean {
  let node = element;
  while (node) {
    if (node === container) {
      return true;
    }
    // Step out of shadow roots if necessary
    const rootNode = node.getRootNode();
    if (rootNode instanceof ShadowRoot) {
      node = rootNode.host;
    } else {
      node = node.parentNode;
    }
  }
  return false;
}
