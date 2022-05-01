import getRefs from './refs.js';

const { backdropRef, modalRef } = getRefs();

backdropRef.addEventListener('click', () => {
  backdropRef.classList.toggle('is-hidden');
  modalRef.classList.toggle('is-hidden');
});
