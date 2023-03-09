import { BASE_URL } from "../const";
import { searchParams } from "../const";
import renderMorePictures from "../../renderMorePictures";

function getMorePictures(evt) {
    evt.preventDefault();
    searchParams.set('page', +searchParams.get('page') + 1)
    console.log(searchParams.get('page'));
    const query = sessionStorage.getItem('query');

    return fetch(`${BASE_URL}?${searchParams}&q=${query}`)
    .then(response => {
        if (!response.ok) {
            throw new Error ('ERROR');
        }

        return response.json();
    })
    .then(pictures => renderMorePictures(pictures))
    .catch(error => console.log(error));
};

export default getMorePictures;