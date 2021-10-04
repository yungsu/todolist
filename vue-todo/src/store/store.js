import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //vue플러그인 global function

const storage = {
    fecth() {
        const arr = [];
        if (localStorage.length > 0){
            for(let i =0; i < localStorage.length; i ++){
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            //console.log(localStorage.key(i));
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fecth()
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {complete: false, item: todoItem};
            console.log(todoItem);
            //저장하는 로직
            //localStorage.setItem(this.newTodoItem, obj);//API 1가지 오브젝트로 떨어져서 어떤값인지 모름
            localStorage.setItem(todoItem, JSON.stringify(obj));//API 1가지
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index,1); 
        },
        toggleOneItem(state, payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItem(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});