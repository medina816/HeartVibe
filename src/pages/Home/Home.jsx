import React from 'react'
import FeedbackFromVolunteers from '../../components/FeedbackFromVolunteers/FeedbackFromVolunteers'
import GoodDeedsStartWithYou from '../../components/GoodDeedsStartWithYou/GoodDeedsStartWithYou'

function Home() {
  return (
    <div>
      <GoodDeedsStartWithYou/>
      <FeedbackFromVolunteers/>
    </div>
  )
}

export default Home
