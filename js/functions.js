import getRefs from './refs.js';

const { backdropRef, modalRef, btnGetRef, modalIconCloseRef } = getRefs();

export function onOpenModal() {
  modalRef.classList.remove('is-hidden');
  modalIconCloseRef.addEventListener('click', onCloseBackdropByIcon);
}

export function onOpenBackdrop() {
  backdropRef.classList.remove('is-hidden');
  backdropRef.addEventListener('click', onCloseBackdrop);
}

export function onCloseBackdrop() {
  backdropRef.classList.add('is-hidden');
  modalRef.classList.add('is-hidden');
}

export function onCloseBackdropByIcon() {
  onCloseBackdrop();
}
