import {imageChecker} from '../utils/ImageChecker.js';
export default
    class NewsCard {
    constructor(url, urlToImage,title, publishedAt, description ,name) {
        this.url = url;
        this.urlToImage = imageChecker(urlToImage);
        this.publishedAt = publishedAt;
        this.title = title;
        this.description = description;
        this.name = name;
    }

    create() {
        const Card = document.createElement("a");
        Card.insertAdjacentHTML('beforeend', `
        <a class="card__url" target="_blank">
            <div class="card">
            <img class="card__img" >
                 <p class="card__date"></p>
                 <h3 class="card__title"></h3>
                 <p class="card__text"></p>
                 <p class="card__source"></p> 
              </div>
              </a>
            `);
        const cardElement = Card.firstElementChild;
        cardElement.setAttribute('href', this.url);
        cardElement.querySelector(".card__img").setAttribute('src', this.urlToImage);
        cardElement.querySelector(".card__img").alt = this.title;
        cardElement.querySelector(".card__date").textContent = this.publishedAt;
        cardElement.querySelector('.card__title').textContent = this.title;
        cardElement.querySelector('.card__text').textContent = this.description;
        cardElement.querySelector('.card__source').textContent = this.name;
        this.cardElement = cardElement;
        return cardElement;
    }
}