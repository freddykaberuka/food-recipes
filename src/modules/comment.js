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