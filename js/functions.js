import getRefs from './refs.js';

const {
  backdropRef,
  modalRef,
  learnMoreRef,
  bodyRef,
  spollerBlockRef,
  spollerTitleRef,
  spollerListRef,
} = getRefs();

export function onOpenBackdrop() {
  backdropRef.classList.remove('is-hidden');
  bodyRef.classList.add('lock');
  backdropRef.addEventListener('click', onCloseBackdrop);
}
export function onCloseBackdrop() {
  backdropRef.classList.add('is-hidden');
  modalRef.classList.add('is-hidden');
  learnMoreRef.classList.add('is-hidden');
  bodyRef.classList.remove('lock');
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

spollerBlockRef.addEventListener('click', function (e) {
  const targetTitle = e.target;
  const targetLink = e.target.nextElementSibling;

  if (targetTitle.nodeName !== 'H3') {
    return;
  } else {
    if (spollerBlockRef.classList.contains('one')) {
      if (!targetTitle.classList.contains('active')) {
        removeAllActiveClass(spollerTitleRef);
        removeAllActiveClass(spollerListRef);
        toggleActiveClass();
      } else {
        removeActiveClass();
      }
    } else {
      toggleActiveClass();
    }
  }

  function removeActiveClass() {
    [...spollerTitleRef].map(link =>
      link.classList.remove('active'),
    );
    [...spollerListRef].map(link =>
      link.classList.remove('active'),
    );
  }

  function toggleActiveClass() {
    targetTitle.classList.toggle('active');
    targetLink.classList.toggle('active');
  }

  function removeAllActiveClass(array) {
    [...array].map(link => link.classList.remove('active'));
  }
});

// ================================================ //

// ===== spoller jquery ==== //
// $(document).ready(function () {
//   $('.info-block__title').click(function (event) {
//     if ($('.info-block').hasClass('one')) {
//       $('.info-block__title')
//         .not($(this))
//         .removeClass('active');
//       $('.info-block__list')
//         .not($(this).next())
//         .slideUp(300);
//     }
//     $(this).toggleClass('active').next().slideToggle(300);
//   });
// });
// ================================================ //
