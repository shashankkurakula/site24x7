import React from 'react'

import spinner from './spinner.gif'

// import accessDenied from './access-denied.gif'

const Spinner = ({ isLoading }) => {
  return (
    <div style={{ marginTop: '200px' }}>
      <img
        // src={(isLoading = true ? spinner : accessDenied)}
        src={spinner}
        alt='Loading...'
        style={{
          width: '200px',

          margin: 'auto',
          display: 'block',
        }}
      />
    </div>
  )
}

export default Spinner
