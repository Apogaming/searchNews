export default class CommitCard {
    constructor(name, email, date, message, avatar) {
        this.name = name;
        this.message = message;
        this.avatar = avatar;
        this.email = email;
        this.date = date;

    }
    create() {
        const commitCard = document.createElement("div");
        commitCard.insertAdjacentHTML('beforeend', `
        <div class="swiper-slide">        
                 <p class="commit__date"></p>
                 <div class="commit__top">
                    <img class="commit__photo-author" >
                 <div class="commit__items">
                     <h3 class="commit__name-author"></h3>
                      <p class="commit__email"></p>
                 </div>
                 </div>
                 <div class="commit__bottom">
                     <p class="commit__text"></p>
              </div>
             `);
        const commitElement = commitCard.firstElementChild;
        commitElement.querySelector(".commit__date").textContent = this.date;
        commitElement.querySelector(".commit__photo-author").setAttribute('src', this.avatar);
        commitElement.querySelector(".commit__name-author").textContent = this.name;
        commitElement.querySelector('.commit__email').textContent = this.email;
        commitElement.querySelector('.commit__text').textContent = this.message;
        this.commitElement = commitElement;

        return commitElement;
    }
}