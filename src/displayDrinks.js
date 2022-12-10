import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';
const displayDrinks = ({drinks}) => {
  const sectionCenter = get('.section-center');
  const title = get('.title');
  if(!drinks) {
    // hide Loading
    hideLoading();
    title.textContent = 'Sorry no drinks matched your search';
    sectionCenter.innerHTML = null;
    return;
  }
  const newDrinks = drinks.map((drink) => {
    const {idDrink:id, strDrink:drinkName, strDrinkThumb: drinkPic} = drink;
    return `<a href="./drink.html">
        <article class="cocktail" data-id="${id}">
          <img src="${drinkPic}" alt="${drinkName}">
          <h3>${drinkName}</h3>
        </article>
      </a>`;
  }).join('\n');
  // hide loading
  hideLoading();
  // get('.loading').classList.add('hide-loading');
  title.textContent = '';
  sectionCenter.innerHTML = newDrinks;
  return sectionCenter;
}
export default displayDrinks;