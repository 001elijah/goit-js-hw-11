import { BASE_URL } from "../const";
import { searchParams } from "../const";
import { refs } from "../../refs";
import renderPictures from "../../renderPictures";
import Notiflix from 'notiflix';

const { loadMoreBtn } = refs;

function getPictures(evt) {
    evt.preventDefault();
    
    searchParams.set('page', 1);
    const query = evt.currentTarget.searchQuery.value;
    sessionStorage.setItem('query', `${query}`);
    console.log(sessionStorage.getItem('query'));
    if (query === '') {
        Notiflix.Notify.info('Please type your search query to see results');
        return;
    };
    return fetch(`${BASE_URL}?${searchParams}&q=${query}`)
    .then(response => {
        if (!response.ok) {
            throw new Error ('ERROR');
        }

        console.log(searchParams.get('page'));
        loadMoreBtn.classList.add('load-more');
        return response.json();
    })
    .then(pictures => renderPictures(pictures))
    .catch(error => console.log(error));
};

export default getPictures;