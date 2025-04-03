import React from 'react'
import FeedbackFromVolunteers from '../../components/FeedbackFromVolunteers/FeedbackFromVolunteers'
import GoodDeedsStartWithYou from '../../components/GoodDeedsStartWithYou/GoodDeedsStartWithYou'
import HowToBecomeAVolunteer from '../../components/HowToBecomeAVolunteer/HowToBecomeAVolunteer'
import Card from '../../components/Card/Card'
import EventsList from '../../components/EventList/EventList'

function Home() {
  return (
    <div>
      {/* <GoodDeedsStartWithYou/> */}
      {/* <FeedbackFromVolunteers/> */}
      <HowToBecomeAVolunteer/>
      <GoodDeedsStartWithYou/>
      <FeedbackFromVolunteers/>
      <Card/>
      <EventsList/>
    </div>
  )
}

export default Home
