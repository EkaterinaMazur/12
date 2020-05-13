import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">
        Dashboard
      </div>
      <Link to='/dashboard/profile/1e2daae8-1f83-4b20-b87b-21119f49f39c'>Go To Profile </Link>
      <Link to='/dashboard/main'>Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
