import { BASE_URL } from "../const";
import { searchParams } from "../const";
import { refs } from "../../refs";
import renderPictures from "../../renderPictures";
import Notiflix from 'notiflix';
import axios from 'axios';

const { loadMoreBtn } = refs;

async function getPictures(evt) {
    evt.preventDefault();
    
    searchParams.set('page', 1);
    const query = evt.currentTarget.searchQuery.value;
    sessionStorage.setItem('query', `${query}`);
    if (query === '') {
        Notiflix.Notify.info('Please type your search query to see results');
        return;
    };
    try {
        const response = await axios.get(`${BASE_URL}?${searchParams}&q=${query}`);
        const showBtn = await loadMoreBtn.classList.add('load-more');
        const render = await renderPictures(response.data);
    } catch (error) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again')
        loadMoreBtn.classList.remove('load-more');
    }
};
// function getPictures(evt) {
//     evt.preventDefault();
    
//     searchParams.set('page', 1);
//     const query = evt.currentTarget.searchQuery.value;
//     sessionStorage.setItem('query', `${query}`);
//     if (query === '') {
//         Notiflix.Notify.info('Please type your search query to see results');
//         return;
//     };
//     return fetch(`${BASE_URL}?${searchParams}&q=${query}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error ('ERROR');
//         }
//         loadMoreBtn.classList.add('load-more');
//         return response.json();
//     })
//     .then(pictures => renderPictures(pictures))
//     .catch(error => console.log(error));
// };

export default getPictures;