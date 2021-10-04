const addOneItem = (state, todoItem) => {
        const obj = {complete: false, item: todoItem};
        console.log(todoItem);
        //저장하는 로직
        //localStorage.setItem(this.newTodoItem, obj);//API 1가지 오브젝트로 떨어져서 어떤값인지 모름
        localStorage.setItem(todoItem, JSON.stringify(obj));//API 1가지
        state.todoItems.push(obj);
    }
const removeOneItem = (state, payload) =>{
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index,1); 
    }
const toggleOneItem = (state, payload) => {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    }
const  clearAllItem = (state) => {
        localStorage.clear();
        state.todoItems = [];
    }

export { addOneItem, removeOneItem, toggleOneItem, clearAllItem }