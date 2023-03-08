import { BASE_URL } from "../const";
import { API_KEY } from "../const";
import { searchParams } from "../const";
import renderPictures from "../../renderPictures";
import Notiflix from 'notiflix';

function getPictures(evt) {
    evt.preventDefault();
    const query = evt.currentTarget.searchQuery.value;
    if (query === '') {
        Notiflix.Notify.info('Please type your search query to see results');
        return;
    };
    return fetch(`${BASE_URL}?${searchParams}&q=${query}`)
    .then(response => {
        if (!response.ok) {
            throw new Error ('ERROR');
        }
        return response.json();
    })
    .then(pictures => renderPictures(pictures))
    .catch(error => console.log(error));
};

export default getPictures;