import { 
    TaskActionTypes, 
    ADD_TODO, 
    TOGGLE_TODO, 
    SET_VISIBILITY_FILTER, 
    DELETE_TODO 
} from './types'


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
  // use this for future filters?
  // do we keep this in actions?
}

/*
 * action creators
 */
export function addTodo(newname:string):TaskActionTypes {
  return { type: ADD_TODO, 
           name: newname
  }
}
export function toggleTodo(index:number):TaskActionTypes {
  return { type: TOGGLE_TODO, 
           id : index }
}
export function setVisibilityFilter(filter:string):TaskActionTypes {
  return { type: SET_VISIBILITY_FILTER, 
           filter: filter 
  }
}
export function deleteTodo(index:number):TaskActionTypes{
  return {type: DELETE_TODO, 
          id: index
  }
}

/* 
Things to add
- Edit todolist
- More fields for add todolist (and edit)
- Filters
- Same things but tags
*/