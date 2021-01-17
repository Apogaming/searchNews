import './pages/about.css';
import GithubApi from './js/modules/GithubApi';
import CommitCard from './js/components/CommitCard';
import CommitCardList from './js/components/CommitCardList';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import {
  serverGitUrl
} from './js/constants/constants';
import {times} from './js/utils/date'
const githubApi = new GithubApi(serverGitUrl);
githubApi.getCardsCommits()
  .then(function (commits) {
    const container = document.querySelector('.swiper-wrapper');
    const authorAvatar = commits[0].author.avatar_url;
    const commitArray = [];
    commits.map(function (element) {
      const commitCard = new CommitCard(
        element.commit.committer.name,
        element.commit.committer.email,
        times(element.commit.committer.date),
        element.commit.message,
        authorAvatar
      );
      commitArray.push(commitCard.create());
    });
    const commitCardsList = new CommitCardList(container, commitArray);
    commitCardsList.render();
  }).then(function () {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      flipEffect: {
        rotate: 3,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 16,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 4,
        },
      },
    });
  });

