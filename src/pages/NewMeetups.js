import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupsPage = () => {
  const history = useHistory(); // used for example to navigate away to another page once the form is submitted

  const addMeetupHandler = (meetupData) => {
    // 1. After slash we can write anything (meetups) that will create that folder with that name in Firebase. 2. URL needs .json at the end.
    // 3. By default fetch sends a GET request
    fetch(
      "https://react-getting-started-b59fa-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupsPage;
