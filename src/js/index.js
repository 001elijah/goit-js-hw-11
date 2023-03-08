'use strict';
import { refs } from "./refs";
import getPictures from "./api/requests/getPictures";

const { form, galleryList, loadMoreBtn } = refs;
// renderPictures();
form.addEventListener('submit', getPictures);