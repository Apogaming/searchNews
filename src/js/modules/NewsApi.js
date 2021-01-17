import { fromDate } from "../utils/date";

export default
    class NewsApi {
    constructor(options, body) {
        this.url = options.baseUrl;
        this.apiKey = options.key;
        this.headers = options.headers;
        this.request = null;
        this.searchItems = options.searchItems;
        this.body = body;
        this.fromDate = fromDate(); 
    }
    getCardsNews() {
        this.request = this.searchItems.value;
        return fetch(`${this.url}q=${this.request}&pageSize=100&from=${this.fromDate}&language=en&apiKey=${this.apiKey}`, {
            method: "GET",
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
    }

}
