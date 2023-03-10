import getPictures from "./api/requests/getPictures";
import getPictureMarkup from "./getPictureMarkup";
import { refs } from "./refs";
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";

const { galleryList : galleryListElem, form, loadMoreBtn } = refs;

function renderPictures({ hits, totalHits }) {

    if (hits.length === 0) {
        form.reset();
        galleryListElem.replaceChildren();
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again')
        loadMoreBtn.classList.remove('load-more');
        return;
    };
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images`);
    galleryListElem.replaceChildren();
    const galleryTemplates = hits.map(picture => getPictureMarkup(picture)).join('');
    galleryListElem.insertAdjacentHTML('beforeend', galleryTemplates);
    new SimpleLightbox('.gallery a', { captionDelay: 250 });
};

export default renderPictures;