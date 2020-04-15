export const initialState = { todos: [ 
    {
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]};

export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos:[
                    ...state.todos,
                    { task: action.payload, completed: false, id: new Date() }
                ]
            };
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todos: [
                    ...state.todos.map(item => {
                        if(action.payload.id === item.id) {
                            return {
                                ...item,
                                completed: !item.completed
                            };
                        } else {
                            return item;
                        }
                    })
                ]
            };

        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: [...state.todos.filter(item => !item.completed)]
            };

         default:
            return state;
    };
}