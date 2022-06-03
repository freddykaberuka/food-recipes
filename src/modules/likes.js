/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-named-as-default
import likesUrl from './dataUrl';

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

export const fetchLikes = async (_url) => {
  try {
    const response = await fetch(likesUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const postLikes = async (likesUrl, likeBtn) => {
  await fetch(likesUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: likeBtn.id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await fetchLikes(url, likeBtn);
};

const displaylikes = async (likeBtn) => {
  if (likeBtn.nextSibling.textContent === '') { likeBtn.nextSibling.textContent = 0; }
  likeBtn.nextSibling.textContent = parseInt(likeBtn.nextSibling.textContent, 10) + 1;
};

export const getLikesNumber = (_likesUrl) => {
  const likesNumber = document.querySelectorAll('.heart');
  likesNumber.forEach((likeBtn) => {
    likeBtn.addEventListener('click', () => {
      postLikes(url, likeBtn);
      displaylikes(likeBtn);
    });
  });
};