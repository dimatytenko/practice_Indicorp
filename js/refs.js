export default function getRefs() {
  return {
    backdropRef: document.querySelector('[data-action="backdrop"]'),
    modalRef: document.querySelector('[data-action="modal"]'),
    btnGetRef: document.querySelector('[data-action="btn-get"]'),
    modalIconCloseRef: document.querySelector('[data-action="modal-icon-close"]'),
  };
}
