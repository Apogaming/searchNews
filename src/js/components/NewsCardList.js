import DataStorage from '../modules/DataStorage';
import {times} from '../utils/date';
export default
    class NewsCardList {
    constructor(body, container, createNewsCard, newsApi, buttonShowMore) {
        this.body = body;
        this.container = container;
        this.createNewsCard = createNewsCard;
        this.newsApi = newsApi;
        this.buttonShowMore = buttonShowMore;
        this.children = this.container.children;
        this.DataStorage = new DataStorage();
        this.renderLocalStorage();
    }
    addCard = (url, urlToImage, publishedAt, title, description, name) => {
        this.container.append(this.createNewsCard(url, urlToImage, publishedAt, title, description, name).create())
    }
    render = () => {
        this.RenderParse = JSON.parse(this.DataStorage.getStorage('data'));
        this.RenderParse.slice(this.children.length, 3 + this.children.length).forEach(item =>
            this.addCard(item.url, item.urlToImage,
                times(item.publishedAt),
                item.title, item.description,
                item.source.name));
        this.checkButtonShowMore();
        this.body.querySelector('.loading').style.display = "none";
        this.body.querySelector('.search__button').disabled = false;
        this.checkResult();
    }
    renderLocalStorage = () => {
        this.body.querySelector('.resul-seach').style.display = "none";
        this.RenderParse = JSON.parse(this.DataStorage.getStorage('data'));
        if (this.DataStorage.getStorage('data') !== null) {
            this.RenderParse.slice(this.children.length, 3 + this.children.length).forEach(item =>
                 this.addCard(item.url, item.urlToImage, times(item.publishedAt), 
                 item.title, item.description, item.source.name));
            this.body.querySelector('.resul-seach').style.display = "block";
        }
        this.checkButtonShowMore();
    }
    checkButtonShowMore = () => {
        if (this.DataStorage.getStorage('data') !== null) {
            if (this.RenderParse.length == this.children.length) {
                this.buttonShowMore.style.display = "none";
            } else {
                this.buttonShowMore.style.display = "block";
            }
        }
    }
    checkResult = () => {
        if (this.children.length === 0) {
            this.body.querySelector('.resul-seach').style.display = "none";
            this.body.querySelector('.not-found').style.display = "flex";
        } else {
            this.body.querySelector('.not-found').style.display = "none";
            this.body.querySelector('.resul-seach').style.display = "block";
        }
    }

}
