import {hideLoading} from '../src/toggleLoading.js';
import get from '../src/getElement.js';

export default (data) => {
  hideLoading();
  const drink = data.drinks[0];
  const { strInstructions: desc, strDrink: drinkName, strDrinkThumb: drinkPic } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4, 
    drink.strIngredient5
  ]
  const img = get('.drink-img');
  const drinkNameDOM = get('.drink-name');
  const description = get('.drink-desc');
  const ingredients = get('.drink-ingredients');
  img.src = drinkPic;
  document.title = drinkName;
  drinkNameDOM.textContent = drinkName;
  description.textContent = desc;
  ingredients.innerHTML = list.map((item)=>{
    if(item) return `<li><i class="far fa-check-square"></i>${item}</li>`;
    return;
  }).join('');

}
