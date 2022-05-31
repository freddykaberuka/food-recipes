import './style.css';

const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`


const getFoods = async () => {
    const res = await fetch(url)
    const foods = await res.json()
    foods.meals.forEach((food) => {
      let temp = document.createElement('template')
      temp.innerHTML = `
      <div class="card">
      <img src="${food.strMealThumb}"/>

      <div class="meal-description">
      <h3>${food.strMeal}</h3>
      
      <div class="likes"><i class="fas fa-heart"></i><p>5likes</p></div>
  </div>
  <div class="comment">
      <button>Comments</button>
  </div>
</div>
      </div>
      `
      document.getElementById('root').appendChild(temp.content)
    });
  }
  
  getFoods()
  