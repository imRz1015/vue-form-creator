export function getElementAttr(element: HTMLElement, key: string): string {
  return element.getAttribute(key) || ''
}
