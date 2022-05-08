import getRefs from './refs.js';
import { onOpenBackdrop, onOpenLearnMore, onCloseBackdrop, onCloseLearnMore} from './functions.js';

const { btnLearnMoreRef, learnMoreIconCloseRef } = getRefs();

btnLearnMoreRef.addEventListener('click', () => {
    onOpenBackdrop();
    onOpenLearnMore();
    learnMoreIconCloseRef.addEventListener('click', onCloseLearnMore);
     learnMoreIconCloseRef.addEventListener('click', onCloseBackdrop);

})