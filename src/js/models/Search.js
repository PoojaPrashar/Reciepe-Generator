import axios from 'axios';

export default class Search {
 constructor(query) {
     this.query = query;
 }
 async getResults() {
     
    const proxy='https://cors-anywhere.herokuapp.com/';
    const key = 'f9984a8774e47e8a2f46f2b9ab4a855e';
    try {
        const res = await axios(`${proxy}https://food2fork.com/api/search?key=${key}&q=${this.query}`);//Works on all browsers
        this.result = res.data.recipes;
        //console.log(this.result);
    } catch(error) {
        alert(error);
    }

}

}
