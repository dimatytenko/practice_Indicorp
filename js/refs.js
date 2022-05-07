export default function getRefs() {
  return {
    backdropRef: document.querySelector('[data-action="backdrop"]'),
    modalRef: document.querySelector('[data-action="modal"]'),
    btnGetRef: document.querySelector('[data-action="btn-get"]'),
    btnLearnMoreRef: document.querySelector('[data-action="btn-learn-more"]'),
    modalIconCloseRef: document.querySelector('[data-action="modal-icon-close"]'),
    modalButtonSendRef: document.querySelector('[data-action="modal-button-send"]'),
    learnMoreRef: document.querySelector('[data-action="learn-more"]'),


  };
}
