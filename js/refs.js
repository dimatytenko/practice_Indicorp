export default function getRefs() {
  return {
    backdropRef: document.querySelector('[data-action-backdrop]'),
    modalRef: document.querySelector('[data-action-modal]'),
  };
}
