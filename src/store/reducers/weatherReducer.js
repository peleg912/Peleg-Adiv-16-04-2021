
const initialState = {
    currentCity: {
        name: 'Tel aviv',
        key: '215854',
        like: false
    },
    favorites: []
    
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case 'UPDATE_CITY': 
        return{
            ...state,
            currentCity: {
                name: action.name,
                key: action.key
            }
        }
        case 'ADD_TO_FAVORITES':
            return{
                ...state,
                favorites: state.favorites.concat({
                    id: action.id,
                    name: action.name
                }),
                currentCity:{
                    ...state.currentCity,
                    like: true
                }
            }
        case 'REMOVE_FROM_FAVORITES':
            const indexToRemove = state.favorites.findIndex(obj=> obj.id === action.id);
            if(indexToRemove !== -1){
                const faves = [...state.favorites];
                faves.splice(indexToRemove, 1);
                return{
                    ...state,
                    favorites: faves,
                    currentCity:{
                        ...state.currentCity,
                        like: false
                    }
                }
            } else{
                console.log(indexToRemove);
            }
        default: return state;
    }
   
}


export default reducer;