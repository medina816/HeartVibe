import React from 'react'
import FeedbackFromVolunteers from '../../components/FeedbackFromVolunteers/FeedbackFromVolunteers'
import GoodDeedsStartWithYou from '../../components/GoodDeedsStartWithYou/GoodDeedsStartWithYou'
import HowToBecomeAVolunteer from '../../components/HowToBecomeAVolunteer/HowToBecomeAVolunteer'
import Card from '../../components/Card/Card'
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
      <Card/>
      <EventsList/>
      <News/>
      <FeedbackFromVolunteers/>
      <HowToBecomeAVolunteer/>
      <News/>
   </div>

  )
}

export default Home
