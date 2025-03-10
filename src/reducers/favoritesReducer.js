
import {TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE} from './../actions/favoritesActions';

const initialState = {
    favorites: [{title: 'This is a movie', id:1 }],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case('TOGGLE_FAVORITES'): {
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
            
        case('ADD_FAVORITE'): {
            return{
                ...state,
                displayFavorites: [...state.favorites, action.payload]
            }
        }
        case('REMOVE_FAVORITE'); {
            return{
                ...state,
                favorites: [state.filter(item=>(
                    item.id !== action.payload
                ))];
            }
        }
        default:
            return(state);
    }
}

export default favoritesReducer;