import './style.css';

const url = `https://www.themealdb.com/api/json/v1/1/categories.php`


const getFoods = async () => {
    const res = await fetch(url)
    const foods = await res.json()
    foods.categories.forEach((food) => {
      let temp = document.createElement('template')
      temp.innerHTML = `
      <div class="card">
      <img src="${food.strCategoryThumb}"/>

      <div class="meal-description">
      <h3>${food.strCategory}</h3>
      
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
  