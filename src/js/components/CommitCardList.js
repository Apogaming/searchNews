export default class CommitCardList {
    constructor(container, commitArray) {
        this.container = container;
        this.commitArray = commitArray;
    }

    render() {
        this.commitArray.forEach(element => {
            this.container.appendChild(element);
        });
    }

}