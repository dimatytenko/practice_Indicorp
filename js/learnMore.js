import getRefs from './refs.js';
import { onOpenBackdrop, onOpenLearnMore, onCloseBackdrop, onCloseLearnMore} from './functions.js';

const { btnLearnMoreRef } = getRefs();

btnLearnMoreRef.addEventListener('click', () => {
    onOpenBackdrop();
    onOpenLearnMore()
    
})