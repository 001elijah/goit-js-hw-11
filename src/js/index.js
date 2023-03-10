'use strict';
import { refs } from "./refs";
import getPictures from "./api/requests/getPictures";
import getMorePictures from "./api/requests/getMorePictures";
import { searchParams } from "./api/const";
import SimpleLightbox from "simplelightbox";
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
lightbox.refresh();

searchParams.set('page', 1);
const { form, loadMoreBtn } = refs;
form.addEventListener('submit', getPictures);
loadMoreBtn.addEventListener('click', getMorePictures);