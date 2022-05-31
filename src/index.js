import './style.css';

const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`


const getFoods = async () => {
    const res = await fetch(url)
    const foods = await res.json()
    foods.meals.forEach((food) => {
      let temp = document.createElement('template')
  console.log(food);
      temp.innerHTML = `
      <div>
      <img src="${food.strMealThumb}"/>
      <h3>${food.strMeal}</h3>
      <span><3 likes[5  ]</span>
      </div>
      `
      document.getElementById('root').appendChild(temp.content)
    });
  }
  
  getFoods()
  