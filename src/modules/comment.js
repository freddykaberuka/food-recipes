// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tJRup0Me8cP9OobHqxUY/likes/';
// const sendLikes = async (id) => {
//   const res = fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       item_id: id,
//     }),
//   });
// };



// const getLikes = async (id) => {
//   let likes;
//   const res = await fetch(url);
//   const data = await res.json();
//   data.includes((like) => {
//     // console.log(like);
//     if (id == like.item_id) {
//       likes = like.likes;
//     } else {
//       return 0;
//     }
//   });
//   console.log(likes);
//   // return likes
// };

// export {
//   sendLikes,
//   getLikes,
// };

import CountComments from "./CountComments";
class Comments {
  FetchComments = (itemId) => {
    fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tJRup0Me8cP9OobHqxUY/comments?item_id=${itemId}`
    )
      .then((res) => res.json())
      .then((data) => {
        if(data.error) return;
        const commentContainer = document.querySelector(".all-comments");
        commentContainer.innerHTML = data
          .map(
            (element) => `<li class="comments-element">
            ${element.creation_date.replace("-", "/")}&nbsp;${
              element.username
            }&nbsp:&nbsp;${element.comment}
            </li>`
          )
          .join("");
          return CountComments(data)
      });
  };
  PostComment = ({ commentId, name, textArea }) => {
    console.log(commentId, name, textArea);
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": 'application/json; charset="utf-8"',
      },
      body: JSON.stringify({
        item_id: commentId,
        username: name,
        comment: textArea,
      }),
    };

    fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tJRup0Me8cP9OobHqxUY/comments`,
      config
    ).then(() => this.FetchComments(commentId));
  };
}
export default Comments;