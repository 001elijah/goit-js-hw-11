import { BASE_URL } from "../const";
import { searchParams } from "../const";
import renderMorePictures from "../../renderMorePictures";
import { refs } from "../../refs";
import Notiflix from "notiflix";
import axios from 'axios';
const { loadMoreBtn } = refs;
async function getMorePictures(evt) {
    evt.preventDefault();
    searchParams.set('page', +searchParams.get('page') + 1)

    const query = sessionStorage.getItem('query');

    try {
        const response = await axios.get(`${BASE_URL}?${searchParams}&q=${query}`);
        await renderMorePictures(response.data);
    } catch (error) {
        loadMoreBtn.classList.remove('load-more');
        Notiflix.Notify.failure('We\'re sorry, but you\'ve reached the end of search results.')
    }
}

// function getMorePictures(evt) {
//     evt.preventDefault();
//     searchParams.set('page', +searchParams.get('page') + 1)

//     const query = sessionStorage.getItem('query');

//     return fetch(`${BASE_URL}?${searchParams}&q=${query}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error ('ERROR');
//         }

//         return response.json();
//     })
//     .then(pictures => renderMorePictures(pictures))
//     .catch(error => console.log(error));
// };

export default getMorePictures;