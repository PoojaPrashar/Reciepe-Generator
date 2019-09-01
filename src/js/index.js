// Global app controller
//f9984a8774e47e8a2f46f2b9ab4a855e
//https://www.food2fork.com/api/search

// Search Controller
import Search from './models/Search';
import * as searchView from  './Views/searchView';
import { elements,renderLoader,clearLoader } from './Views/base';

const state = {};

const controlSearch = async () => {
  //1. Get query from the view
  const query = searchView.getInput();
  console.log(query);

  if(query) {
     
  //2.  New Search object and add it to the state
 state.search = new Search(query);

  //3. Prepare UI for recipes
 searchView.clearInput();
 searchView.clearResults();
 renderLoader(elements.searchRes);


  //4. Search for recipes
  await state.search.getResults();

  //5. Render results on UI
  clearLoader();
  searchView.renderResults(state.search.result);
    
   }
}

 elements.searchForm.addEventListener('submit',e => {
     e.preventDefault();
     controlSearch();
 });

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if(btn) {
   const goToPage = parseInt(btn.dataset.goto,10); 
   searchView.clearResults();
   searchView.renderResults(state.search.result, goToPage);
  }
});