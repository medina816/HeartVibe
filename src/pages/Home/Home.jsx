import React from 'react'
import FeedbackFromVolunteers from '../../components/FeedbackFromVolunteers/FeedbackFromVolunteers'
import GoodDeedsStartWithYou from '../../components/GoodDeedsStartWithYou/GoodDeedsStartWithYou'
import Card from '../../components/Card/Card'
import EventsList from '../../components/EventList/EventList'

function Home() {
  return (
    <div>
      <GoodDeedsStartWithYou/>
      <FeedbackFromVolunteers/>
      <Card/>
      <EventsList/>
    </div>
  )
}

export default Home
