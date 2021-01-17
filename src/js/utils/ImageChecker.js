import notFound from '../../images/not-found.png';

export function imageChecker(url) {

const regex=/^(https:)$/gmi;

if (url===null || url.match(regex) || url===''){
   return url = notFound;
} else {
    return url;
}
}

