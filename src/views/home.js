import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Directives Executive</title>
        <meta property="og:title" content="Future Directives Executive" />
      </Helmet>
    </div>
  )
}

export default Home
