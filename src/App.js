import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Monitors from './components/Monitors'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Monitors />
    </div>
    // <Router>
    //   <div className='container'>
    //     {/* <Header /> */}
    //     <Route path='/monitors' exact component={Monitors} />
    //   </div>
    // </Router>
  )
}

export default App
