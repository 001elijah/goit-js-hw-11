function getPictureMarkup({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
    return `
            <div class="gallery">
                <a class="gallery__link" href="${largeImageURL}" data-lightbox="lbox">
                    <div class="photo-card">
                        <img calss="gallery__image" src="${webformatURL}" alt="${tags}" title="${tags}" data-source="${largeImageURL}" loading="lazy" />
                        <div class="info">
                            <p class="info-item">
                                <b>Likes:</b>${likes}
                            </p>
                            <p class="info-item">
                                <b>Views</b>${views}
                            </p>
                            <p class="info-item">
                                <b>Comments</b>${comments}
                            </p>
                            <p class="info-item">
                                <b>Downloads</b>${downloads}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
    `;
};
export default getPictureMarkup;