import React from 'react'
import FeedbackFromVolunteers from '../../components/FeedbackFromVolunteers/FeedbackFromVolunteers'
import GoodDeedsStartWithYou from '../../components/GoodDeedsStartWithYou/GoodDeedsStartWithYou'
import HowToBecomeAVolunteer from '../../components/HowToBecomeAVolunteer/HowToBecomeAVolunteer'
import Card from '../../components/Card/Card'
import EventsList from '../../components/EventList/EventList'
import News from '../../components/News/News'

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
      <News/>
    </div>
  )
}

export default Home
