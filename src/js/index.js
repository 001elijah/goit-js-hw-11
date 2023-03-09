'use strict';
import { refs } from "./refs";
import getPictures from "./api/requests/getPictures";
import getMorePictures from "./api/requests/getMorePictures";
import { searchParams } from "./api/const";
searchParams.set('page', 1);
const { form, galleryList, loadMoreBtn } = refs;
form.addEventListener('submit', getPictures);
loadMoreBtn.addEventListener('click', getMorePictures);