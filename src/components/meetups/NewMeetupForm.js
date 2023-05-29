import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';
 
function NewMeetupForm(props) {

    //declare variables which reference to DOM elements
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        //React automatically pass an event argument into the function executed for that event
        
        //To prevent browser default and allow us to handle the submission with JS and React
        event.preventDefault();

        //read values from the form elements
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        
        //create a object for meetup fields, it will be parameter to AddMeetup event
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        console.log(meetupData);

        //call event handler (definition of handler is in NewMeetup.js)
        props.onAddMeetup(meetupData);

    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea required id="description" rows="5" ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;