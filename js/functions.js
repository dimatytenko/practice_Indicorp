import getRefs from './refs.js';

const { backdropRef, modalRef, learnMoreRef } = getRefs();

export function onOpenBackdrop() {
  backdropRef.classList.remove('is-hidden');
  backdropRef.addEventListener('click', onCloseBackdrop);
}
export function onCloseBackdrop() {
  backdropRef.classList.add('is-hidden');
  modalRef.classList.add('is-hidden');
  learnMoreRef.classList.add('is-hidden');
}

export function onOpenModal() {
  modalRef.classList.remove('is-hidden');
}

export function onCloseModal() {
  modalRef.classList.add('is-hidden');
}

export function onOpenLearnMore() {
  learnMoreRef.classList.remove('is-hidden');
}

export function onCloseLearnMore() {
  learnMoreRef.classList.add('is-hidden');
}

// ===== spoller ==== //
$(document).ready(function () {
  $('.info-block__title').click(function (event) {
    if ($('.info-block').hasClass('one')) {
      $('.info-block__title')
        .not($(this))
        .removeClass('active');
      $('.info-block__list')
        .not($(this).next())
        .slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
// ================================================ //
