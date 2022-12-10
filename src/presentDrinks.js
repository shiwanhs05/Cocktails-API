import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from './displayDrinks.js';
// import get from './getElement.js';
import {showLoading} from './toggleLoading.js';
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  // get('.loading').classList.remove('hide-loading');
  showLoading();
  // fetch drinks
  const data = await fetchDrinks(url);
  // display drinks
  const section = await displayDrinks(data);
  if(section) setDrink(section); 
}

export default showDrinks;