import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewMeetupPage() {
    //for manipulate browser history
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-63985-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', 
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            //when finish, navigate to starting page
            history.replace('/');
        });
    }

    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
    );
}

export default NewMeetupPage;