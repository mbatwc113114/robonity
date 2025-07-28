import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EventNavigation from '../components/eventComponents/EventNavigation.js';
export default function EventPage() {
  const { eventId } = useParams();

  return (
    <>
      <Navbar
      
      title={eventId}/>
      <EventNavigation/>

    </>
  );
}
