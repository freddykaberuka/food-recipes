/*eslint-disable*/

import likesUrl from './dataUrl';

const likes = [];

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

export const fetchLikes = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    likes.push(data);
  } catch (error) {
    throw Error(error);
  }
};

export const getLikeElements = (images) => {
  const hearts = document.querySelectorAll('.heart');
  const likeCounter = document.querySelectorAll('.like-p');
  hearts.forEach((heart, index) => {
    let counter = 0;
    heart.addEventListener('click', (e) => {
      e.preventDefault();
      postLikes(likesUrl, images[index].idMeal);
      counter += 1;
      likeCounter[index].innerHTML = `${likes[index] + counter} Likes`;
    });
  });
};

export const postLikes = async (likesUrl, likeBtn) => {
  await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: likeBtn,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await fetchLikes(likesUrl);
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