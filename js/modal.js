import getRefs from './refs.js';
import { onOpenBackdrop, onOpenModal } from './functions.js';

const { btnGetRef } = getRefs();

btnGetRef.addEventListener('click', () => {
  onOpenBackdrop();
  onOpenModal();
});
