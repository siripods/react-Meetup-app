import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList(props) {
    console.log(props.meetups);
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => { 
                return <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} description={meetup.description} />;
            }
            )}
        </ul>
    );
}

export default MeetupList;
