/*eslint-disable*/
import './style.css';
import url from './modules/dataUrl';
import Comments from './modules/comment.js';
import closeModalBtn from './modules/functionality';
const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RoXIqhnkeneDm1enyFkb/likes/';
import { postLikes, getLikes } from './modules/likes';
import { g, t } from './utils';


const NewComments = new Comments();
const getFoods = async () => {
  const res = await fetch(url);
  const foods = await res.json();
  const CountDisplay = document.querySelector('.count-display');
  const data = foods.meals.length;
  CountDisplay.innerHTML = data


  foods.meals.forEach((food) => {
    g('root').appendChild(t(`<div class="card">
      <img src="${food.strMealThumb}"/>

      <div class="meal-description">
        <h3>${food.strMeal}</h3>
            
        <div class="likes">
          <i class="fas fa-heart heart" id="${food.idMeal}"></i>
          <p class="like-p" id="like_${food.idMeal}"></p></div>
        </div>

        <div class="comment">
            <button value="${food.idMeal}" type="button" class="showpop">Comments</button>
        </div>
      </div>
    </div>`
    ));
  });

  await getLikes()

  const likeBtns = document.querySelectorAll('.heart');

  likeBtns.forEach((heart) => {
    heart.addEventListener('click', (e) => {
      postLikes(likeUrl, e.target.id)
    });
  });

  const btns = document.querySelectorAll('.showpop');

  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => modalsup(e, foods));
  });
};
const modalsup = (e, foods) =>{
  const foodData = foods.meals;

  const id =  e.target.value;

  foodData.find((card) => {
    if (Number(id) === Number(card.idMeal)) {
      NewComments.FetchComments(card.idMeal);
      const img = document.getElementById('img');
      const foodName = document.getElementById('foodType')
      img.src = `${card.strMealThumb}`;
      foodName.innerHTML = `${card.strMeal}`
      commentForm.id = card.idMeal;
      const container = document.getElementById('modals');
      container.style.display = 'block';
    }
  });
}

const commentForm = document.getElementById('form')

commentForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = commentForm.name;
  const textArea = commentForm.comment;
  NewComments.PostComment({ commentId: commentForm.id, name: name.value, textArea: textArea.value })
  name.value = '';
  textArea.value = '';
})

getFoods();

const likesNumber = document.querySelector('.like-p');

likesNumber.className = 'likes-number';

for (let i = 0; i < liked.length; i += 1) {
  if (idMeal === liked[i].item_id) {
    likesNumber.textContent = `${liked[i].likes}`;
  }
}



