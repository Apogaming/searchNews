export {
    serverGitUrl,
    container,
    buttonShowMore,
    searchItems,
    serverNewsUrl,
    apiKey,
    body,
    statisticsResult,
    statisticsResultTotal,
}
const serverGitUrl = 'https://api.github.com/repos/apogaming/diplom/commits';
const serverNewsUrl = 'https://nomoreparties.co/news/v2/everything?';
const apiKey = 'd859ae06755a47e9bd8a2dde0376ec0d';
const body = document.querySelector('.body');
const container = document.querySelector('.resul-seach__cards');
const buttonShowMore = document.querySelector('.button-show-more');
const searchItems = document.querySelector('.search__input'); // инпут
const statisticsResult = document.querySelector('.status__title_search');
const statisticsResultTotal = document.querySelector('.status__week');