import React, { useState } from 'react'
import { history } from '../redux'
// import Header from './header'
// import Head from './head'

const Dummy = () => {
  const [userName, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      {/* <Header /> */}
      <div>
        <input
          type="text"
          value={userName}
          onChange={onChange}
        />
      </div>
      <div>
        <button type='button' onClick={() => history.push(`/${userName}`)}>Батонидзе</button>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
