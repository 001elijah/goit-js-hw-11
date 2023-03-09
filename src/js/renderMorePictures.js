import { refs } from "./refs";
import getPictureMarkup from "./getPictureMarkup";
import { refs } from "./refs";
import Notiflix from 'notiflix';
import { searchParams } from "./api/const";

const { loadMoreBtn } = refs;
const { galleryList : galleryListElem, form } = refs;

function renderMorePictures({ hits }) {
    if (hits.length === 0) {
        form.reset();
        loadMoreBtn.classList.remove('load-more');
        searchParams.set('page', 1);
        Notiflix.Notify.failure('We\'re sorry, but you\'ve reached the end of search results.')
        return;
    };
    const galleryTemplates = hits.map(picture => getPictureMarkup(picture)).join('');
    galleryListElem.insertAdjacentHTML('beforeend', galleryTemplates);
};

export default renderMorePictures;