import { useState, useEffect, useContext} from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context"

function FavoritesPage() {
    
    /* const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]); */

    const favoriteCtx = useContext(FavoritesContext);
    console.log("Total favorites = " + favoriteCtx.totalFavorites);
    console.log(favoriteCtx.favorites);
    
    let content;
    if(favoriteCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>;
    }
    else {
        content = <MeetupList meetups={favoriteCtx.favorites} />;
    }

    /* useEffect(() => {
        //initial loading state = true
        setIsLoading(true);
        setLoadedMeetups(favoriteCtx.favorites);
    
        //fetch() finishes, so set loading state to false
         setIsLoading(false);
      }, []); */

    return (
        <section>
            <h1>Favorite Meetups</h1>
            {content}
        </section>
        );
}

export default FavoritesPage;