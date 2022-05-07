import getRefs from './refs.js';
import { onOpenBackdrop, onOpenModal, onCloseBackdrop, onCloseModal} from './functions.js';

const { btnGetRef, modalIconCloseRef, modalButtonSendRef} = getRefs();

btnGetRef.addEventListener('click', () => {
  onOpenBackdrop();
  onOpenModal();
  modalIconCloseRef.addEventListener('click', onCloseBackdrop);
  modalButtonSendRef.addEventListener('click', onCloseBackdrop);
  modalIconCloseRef.addEventListener('click', onCloseModal);
  modalButtonSendRef.addEventListener('click', onCloseModal);
});
