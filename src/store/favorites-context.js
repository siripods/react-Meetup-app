import { createContext, useState } from 'react';

//create context with initial value and exposed function for context
//value can be of any type
//functions are called from other components
const FavoritesContext = createContext(
    {
        favorites: [],
        totalFavorites: 0,
        addFavorite: (favoriteMeetup)=> {},
        removeFavorite: (meetupId)=> {},
        itemIsFavorite: (meetupId)=> {}
    }
);

//Context Provider for 
//1. providing context to components
//2. updating context values
export function FavoritesContextProvider(props) {
    
    const [userFavorites, setUserFavorites] = useState([]);
    
    //manage context data - Add Favorite
    function addFavoriteHandler(favoriteMeetup) {
        //This update depends on previous snapshot of state
        //Sometimes last state update was not processed yet
        //So we pass state updating function instead, this guarantee that the update follows last update.
        setUserFavorites((prevUserFavorites)=> {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    //manage context data - Remove Favorite
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(previousUserFavorites=> {
            //filter() argument is function to evalute every element
            //if evaluation of each element returns true, then that element if include in the result
            return previousUserFavorites.filter(meetup=>meetup.id !== meetupId);
        });
    }

    //manage context data - Is Favorite
    function itemIsFavoriteHandler(meetupId) {
        //some(): argument is function to evalute every element
        //if evaluation of at least one element returns true, then some() immediately returns true
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    console.log("setUserFavorites.length= " + setUserFavorites.length)
    console.log("userFavorites.length = " + userFavorites.length)
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }
    
    //Context Provider must wrap component which wants to use the context
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;