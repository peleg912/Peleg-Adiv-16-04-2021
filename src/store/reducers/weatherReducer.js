
const initialState = {
    currentCity: {
        name: 'Tel aviv',
        key: '215854',
        temp: '',
        like: false,
        weatherDesc: ""
    },
    favorites: []
    
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case 'UPDATE_CITY': 
          let like_;
          if(state.favorites.length > 0 ){
            const current = state.favorites.find(obj=> obj.id === action.key);
             if(current){
                like_= true;
             } else{
                 like_ = false;
             }
          }else{
              like_ = false;
          }
        return{
            ...state,
            currentCity: {
                ...state.currentCity,
                name: action.name,
                key: action.key,
                like: like_
            }
        }
        case 'UPDATE_TEMP':
            return{
                ...state,
                currentCity: {
                    ...state.currentCity,
                    temp: action.temp,
                    weatherDesc: action.desc
                }
            }
        case 'ADD_TO_FAVORITES':
            return{
                ...state,
                favorites: state.favorites.concat({
                    id: action.id,
                    name: action.name,
                    temp: state.currentCity.temp,
                    weatherDesc: state.currentCity.weatherDesc
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
            break;
        default: return state;
    }
   
}


export default reducer;