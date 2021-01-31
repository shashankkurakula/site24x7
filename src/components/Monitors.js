import React, { useState, useEffect } from 'react'
import axios from 'axios'

import MonitorGrid from './MonitorGrid'
import AccessDenied from './AccessDenied'
// import Search from '../ui/Search'

const Monitors = () => {
  const [monitors, setMonitors] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errored, setErrored] = useState(false)
  //   const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchMonitors = async () => {
      //   const url = 'http://localhost:5000/monitors'
      const url = 'https://serene-inlet-05924.herokuapp.com/site24x7'
      let result
      try {
        result = await axios.get(url)
        setMonitors(result.data.data.monitors)
        console.log(result.data.data.monitors)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setErrored(true)
      }
    }
    fetchMonitors()
  }, [])

  return (
    <div className='container'>
      {/* <Search getQuery={(q) => setQuery(q)} /> */}
      {errored && <AccessDenied />}
      <MonitorGrid isLoading={isLoading} items={monitors} />
    </div>
  )
}

export default Monitors
