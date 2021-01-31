import React from 'react'

import accessDenied from './access-denied.gif'

const Spinner = ({ isLoading }) => {
  return (
    <div style={{ marginTop: '200px' }}>
      <img
        // src={(isLoading = true ? spinner : accessDenied)}
        src={accessDenied}
        alt='Access Denied...'
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
