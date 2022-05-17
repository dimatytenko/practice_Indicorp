export default function getRefs() {
  return {
    backdropRef: document.querySelector(
      '[data-action="backdrop"]',
    ),
    modalRef: document.querySelector(
      '[data-action="modal"]',
    ),
    btnGetRef: document.querySelector(
      '[data-action="btn-get"]',
    ),
    btnLearnMoreRef: document.querySelector(
      '[data-action="btn-learn-more"]',
    ),
    modalIconCloseRef: document.querySelector(
      '[data-action="modal-icon-close"]',
    ),
    modalButtonSendRef: document.querySelector(
      '[data-action="modal-button-send"]',
    ),
    learnMoreRef: document.querySelector(
      '[data-action="learn-more"]',
    ),
    learnMoreIconCloseRef: document.querySelector(
      '[data-action="learn-more-icon-close"]',
    ),
    bodyRef: document.querySelector('body'),
    spollerBlockRef: document.querySelector('.info-block'),
    spollerTitleRef: document.querySelectorAll(
      '.info-block__title',
    ),
    spollerListRef: document.querySelectorAll(
      '.info-block__list',
    ),
  };
}
