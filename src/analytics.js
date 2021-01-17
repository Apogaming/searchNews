import './pages/analytics.css';
import Statistics from './js/components/Statistics';
import DataStorage from './js/modules/DataStorage';
import {
    getMonth
} from './js/utils/date';
import{
statisticsResult,
statisticsResultTotal
} from './js/constants/constants';
(function () {
const dataStorage = new DataStorage;
const searchInput = dataStorage.getStorage('searchQuery').toLocaleLowerCase();
statisticsResult.textContent = searchInput;
statisticsResultTotal.textContent = dataStorage.getStorage('totalResults');
const regExp = new RegExp(searchInput, 'g');
let countttr = 0;
const newAr = dataStorage.getStorage('data');
newAr.toLowerCase().replace(regExp, () => {
    countttr++;
});
const container = document.querySelector('.diagramma__graph');
const localParse = JSON.parse(dataStorage.getStorage('data'));
document.querySelector('.status__number').textContent = countttr;

const statistics = new Statistics(container, localParse);
const todayMonth = document.querySelector('.status__month').textContent = getMonth();
})();