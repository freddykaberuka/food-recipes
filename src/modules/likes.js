/* eslint-disable */
class Likes{
  upDateUILikes = (likes)=>{
    likes.map(item=>{
      const targetId = `likecount${item.item_id}`
      const LikeWrapper = document.getElementById(targetId);
      if(LikeWrapper) LikeWrapper.innerHTML = item.likes;
      
    })
  }
  fetchLikes = () => {
    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tJRup0Me8cP9OobHqxUY/likes`).then((res) => res.json()).then((likes) => this.upDateUILikes(likes));
  };
  postLike = (Id) => {
    const likeId = Id.slice(5);
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset="utf-8"',
      },
      body: JSON.stringify({ item_id: likeId }),
    };
    console.log(config)
    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tJRup0Me8cP9OobHqxUY/likes/`,
    config).then(() =>{
      const targetId = `likecount${likeId}`
      const LikeWrapper = document.getElementById(targetId);
      LikeWrapper.innerHTML = (+LikeWrapper.innerHTML +1)
    });
  };
}
export default Likes;