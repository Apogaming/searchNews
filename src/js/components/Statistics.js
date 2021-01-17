import { times, DaysWeek } from '../utils/date';
import DataStorage from '../modules/DataStorage';
import { RegExp } from 'core-js';
export default class Statistics {
    constructor(container, localParse) {
        this.template = document.querySelector('#diagramma__container').content;
        this.container = container;
        this.date = new Date();
        this.daysWeek = DaysWeek;
        this.localParse = localParse;
        this.dataStorage = new DataStorage;
        this.start = 0;
        this.end = 6;
        this.addCard();
        this.sortArrayRes()
    }
    checkArray = (arr) => {
        const searchValue = this.dataStorage.getStorage('searchQuery').toLocaleLowerCase();
        const Newarr = []
        arr.forEach(item => {
            Newarr.push(item.title);
            Newarr.push(item.description);
        })
        const regExp = new RegExp(searchValue, 'g');
        let countttr = 0;
        Newarr.join().toLowerCase().replace(regExp, () => {
            countttr++;
        });
        return countttr;
    }
    count = (array, day) => {
        this.dayArray = array.filter(item => times(item.publishedAt) == times(day));
        this.countNews = this.checkArray(this.dayArray);
        return this.countNews;
    }

    sortArrayRes = () => {
        while (this.start < this.end) {
            this.week = this.date.setDate(this.date.getDate() - 1);
            this.start += 1;
            this.textRectange = this.count(this.localParse, this.week);
            this.addCard(this.textRectange);
        }
    }

    create = (number) => {
        this.diagramma = this.template.cloneNode(true).children[0];
        this.diagramma.querySelector('.diagramma__date').textContent = `${this.date.getDate()}, ${this.daysWeek()}`;
        this.diagramma.querySelector('.diagramma__percent').textContent = number;
        this.diagramma.querySelector('.diagramma__percent').style.width = `${number}%`;
        return this.diagramma;
    }
    addCard = (number) => {
        this.container.append(this.create(number))
    }
}