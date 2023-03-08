'use strict';
import { refs } from "./refs";
import getPictures from "./api/requests/getPictures";

const { form, galleryList, loadMoreBtn } = refs;
form.addEventListener('submit', getPictures);