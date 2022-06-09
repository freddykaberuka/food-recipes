/*eslint-disable*/
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