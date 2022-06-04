/*eslint-disable*/
// const likes = [];
import { g } from '../utils'

const likesUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RoXIqhnkeneDm1enyFkb/likes/"

export const likesCounter = (data, id) => {
  const likeArryLength = data.length;
  let likesNumber;
  if (likeArryLength === 0) {
    likesNumber = 0;
    return likesNumber;
  }
  likesNumber = data[id].likes;
  return likesNumber;
};

export const fetchLikes = async (url, callback) => {

  // callback(data)

  // likes.push(data);
};

export const getLikes = async () => {
  console.log(likesUrl);
  const response = await fetch(likesUrl);
  const data = await response.json();

  console.log(data);

  data.forEach(lData => {
    const e = g("like_" + lData.item_id)

    if (e !== null) {
      e.innerText = lData.likes
    }
  });
  // const hearts = document.querySelectorAll('.heart');
  // const likeCounter = document.querySelectorAll('.like-p');


  // hearts.forEach((heart, index) => {
  //   let counter = 0;

  //   heart.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     postLikes(likesUrl, images[index].idMeal);
  //     counter += 1;
  //     likeCounter[index].innerHTML = `${likes[index] + counter} Likes`;
  //   });
  // });
};

export const postLikes = async (likesUrl, likeBtn) => {
  await fetch(likesUrl, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      item_id: likeBtn,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((d) => {
    getLikes()
  })
};

const displaylikes = async (likeBtn) => {
  if (likeBtn.nextSibling.textContent === '') { likeBtn.nextSibling.textContent = 0; }
  likeBtn.nextSibling.textContent = parseInt(likeBtn.nextSibling.textContent, 10) + 1;
};

export const getLikesNumber = (likesUrl) => {
  const likesNumber = document.querySelectorAll('.heart');
  likesNumber.forEach((likeBtn) => {
    likeBtn.addEventListener('click', () => {
      postLikes(likesUrl, likeBtn);
      displaylikes(likeBtn);
    });
  });
};