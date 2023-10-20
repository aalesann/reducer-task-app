import { type } from "../types/type";


export const taskReducer = (state, action) => {

    switch(action.type){

        case type.TASK_ADD:
            return [...state, action.payload];

        case type.TASK_DELETE:
            return state.filter( task => task.id !== action.payload);

        case type.TASK_DONE:
            return state.map((item) => {
                if (item.id === action.payload) {
                  return {
                    ...item,
                    done: !item.done
                  }
                } else {
                  return item;
                }})
        default:
            return state;
    }


}