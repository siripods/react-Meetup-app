import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect} from "react";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage() {
  //1st element is the current state snapshot
  //2nd element is the function for updating state
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //1st argument is function to execute
  //2nd argment is array of dependencies that your effect function relies on
  useEffect(() => {
    //initial loading state = true
    setIsLoading(true);
    //fetch() only executes when React execute this section
    fetch(
      'https://react-getting-started-63985-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    ).then(response => {
        //fetch() returns a promise which resolves as soon as it is done
        //when promise completes, we want to process the response body
        return response.json();
    }).then (data=> {
      //response.json() returns a promise also, so we need another attach then
      
      console.log('data in response');
      console.log(data);

      const meetups = [];

      //assume 'data' from Firebase is key-value pairs, not array of objects
      //so we need transform data
      for(const key in data) {
        /*const meetup = {
           //let each key be id of object meetup
          id: key,
          //spread every field in data
          //assume each  value in data[] is object with fields title, address, description, image
          ...data[key]
        }*/

        const meetup = {
          //let each key be id of object meetup
          id: key,
          //spread every field in data, 
          //assume each value in data[] is object with fields title, address, description, image
          title: data[key].title,
          address: data[key].address,
          description: data[key].description,
          image: data[key].image
        }

        console.log('meetup set ');
        console.log(meetup);
        meetups.push(meetup);
      }

      //fetch() finishes, so set loading state to false
      setIsLoading(false);
      
      //we set data into loadedMeeups
      setLoadedMeetups(meetups);
    });
  }, []);
  //2nd argment of useEffect is array of dependencies
  //when value of element in this array change, the effect code executes
  //if array is empty, then the effect code executes only once when this component is loaded for the first time

  //because javascript does not wait, we need to handle during loading content
  if(isLoading) {
    return (
      <section><p>Loading...</p></section>
    );
  }

  return (
  <section>
      <div>All Meetups</div>
      <MeetupList meetups={loadedMeetups} />
  </section>
  );
}

export default AllMeetupsPage;