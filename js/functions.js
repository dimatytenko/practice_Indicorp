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
  }
  if (!spollerBlockRef.classList.contains('one')) {
    toggleActiveClass();
  }

  const activeTitle = document.querySelector(
    '.info-block__title.active',
  );
  const activeList = document.querySelector(
    '.info-block__list.active',
  );

  if (activeTitle) {
    if (e.target === activeTitle) {
      toggleActiveClass();
    } else {
      removeActiveClass();
      addActiveClass();
    }
  } else {
    addActiveClass();
  }

  function toggleActiveClass() {
    targetTitle.classList.toggle('active');
    targetLink.classList.toggle('active');
  }

  function removeActiveClass() {
    activeTitle.classList.remove('active');
    activeList.classList.remove('active');
  }

  function addActiveClass() {
    targetTitle.classList.add('active');
    targetLink.classList.add('active');
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
