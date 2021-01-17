import './pages/index.css';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import NewsApi from './js/modules/NewsApi';
import {
    apiKey,
    serverNewsUrl,
    container,
    buttonShowMore,
    searchItems,
    body,
} from './js/constants/constants';
import SearchInput from './js/components/SearchInput';
import DataStorage from './js/modules/DataStorage';
import { fromDate } from './js/utils/date';
(function () {
    const dataStorage = new DataStorage();
    searchItems.value = dataStorage.getStorage('searchQuery');
    body.querySelector('.header__logo').addEventListener('click', () => dataStorage.clearStorage())
    const newsApi = new NewsApi({
        baseUrl: serverNewsUrl,
        key: apiKey,
        fromDate: fromDate,
        searchItems: searchItems,
        headers: {
            'Content-Type': 'application/json'
        },
    }, body);
    const createNewsCard = (...arg) => new NewsCard(...arg);
    const newsCardList = new NewsCardList(body, container, createNewsCard, newsApi, buttonShowMore);
    const searchInput = new SearchInput(body, newsCardList, container, newsApi, searchItems);
})();