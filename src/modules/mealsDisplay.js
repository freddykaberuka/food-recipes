// const getFoods = async () => {
//   const res = await fetch(url);
//   const foods = await res.json();
//   foods.meals.forEach((food) => {
//     const temp = document.createElement('template');
//     temp.innerHTML = `
//         <div class="card">
//         <img src="${food.strMealThumb}"/>

//         <div class="meal-description">
//         <h3>${food.strMeal}</h3>

//         <div class="likes" id="${food.idMeal}">
//         <i class="fas fa-heart heart" id="${food.idMeal}"></i>
//         <p>${getLikes(`${food.idMeal}`)}</p></div>
//     </div>
//     <div class="comment">
//         <button id="${food.idMeal}" type="button" class="showpop">Comments</button>
//     </div>
//   </div>
//         </div>
//         `;
//     document.getElementById('root').appendChild(temp.content);
//   });

//   const likeBtns = document.querySelectorAll('.heart');
//   likeBtns.forEach((heart) => {
//     heart.addEventListener('click', (e) => {
//       sendLikes(e.target.id);
//     });
//   });

//   /*eslint-disable*/
//     const btns = document.querySelectorAll('.showpop');
//     btns.forEach((btn) => {
//       btn.addEventListener('click', (e) => modalsup(e, foods));
//     });
//   };

//   function modalsup(e, foods) {
//     const foodData = foods.meals;
//     const { id } = e.target;

//     foodData.find((card) => {
//       if (Number(id) === Number(card.idMeal)) {
//         console.log(card);
//         const img = document.getElementById('img');
//         const foodName = document.getElementById('foodType')
//         img.src = `${card.strMealThumb}`;
//         foodName.innerHTML = `${card.strMeal}`

//         const container = document.getElementById('modals');
//         container.style.display = 'block';
//       }
//     });
//   }

//   getFoods();