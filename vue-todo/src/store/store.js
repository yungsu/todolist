import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './moudules/todoApp'
Vue.use(Vuex); //vue플러그인 global function

// const storage = {
//     fecth() {
//         const arr = [];
//         if (localStorage.length > 0){
//             for(let i =0; i < localStorage.length; i ++){
//             if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//                 console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//             }
//             //console.log(localStorage.key(i));
//             }
//         }
//         return arr;
//     },
// };

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});