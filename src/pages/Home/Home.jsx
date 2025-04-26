import React from 'react'
import FeedbackFromVolunteers from '../../components/FeedbackFromVolunteers/FeedbackFromVolunteers'
import GoodDeedsStartWithYou from '../../components/GoodDeedsStartWithYou/GoodDeedsStartWithYou'
import HowToBecomeAVolunteer from '../../components/HowToBecomeAVolunteer/HowToBecomeAVolunteer'
import EventsList from '../../components/EventList/EventList';
import News from '../../components/News/News'
import SecondBlock from '../../components/secondBlock/SecondBlock'

function Home() {
  return (
    <div>
      {/* <GoodDeedsStartWithYou/> */}
      {/* <FeedbackFromVolunteers/> */}
      <GoodDeedsStartWithYou/>
      <SecondBlock/>
      <EventsList/>
      <News/>
      <FeedbackFromVolunteers/>
      <HowToBecomeAVolunteer/>
   </div>
  )
}

export default Home
