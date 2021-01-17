import DataStorage from '../modules/DataStorage';
export default class SearchInput {
    constructor(body, newsCardList, container, newsApi, searchItems) {
        this.body = body;
        this.newsCardList = newsCardList;
        this.container = container;
        this.newsApi = newsApi;
        this.searchItems = searchItems;
        this.DataStorage = new DataStorage();
        this.body.querySelector('.search__form').addEventListener('submit', this.searchNewsSubmit);
        this.body.querySelector('.button-show-more').addEventListener('click', this.showMore);
    }

    searchNewsSubmit = (event) => {
        event.preventDefault();
        this.body.querySelector('.search__button').disabled = true;
        this.body.querySelector('.resul-seach').style.display = "none";
        this.body.querySelector('.not-found').style.display = "none";
        this.DataStorage.removeStorage('searchQuery');
        this.container.innerHTML = "";
        this.body.querySelector('.loading').style.display = "flex";
        this.DataStorage.setStorage('searchQuery', this.searchItems.value);
        this.newsApi.getCardsNews()
            .then(res => {
                this.DataStorage.setStorage('data', JSON.stringify(res.articles));
                this.DataStorage.setStorage('totalResults', res.totalResults);
                this.newsCardList.render();
            }).catch((err) => {
                console.log(err);
            })
    }
    showMore = () => {
        this.body.querySelector('.loading').style.display = "flex";
        this.newsCardList.renderLocalStorage();
        this.body.querySelector('.loading').style.display = "none";
    }

}