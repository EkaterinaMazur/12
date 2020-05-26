import React from 'react'
// import { Link, useParams  } from 'react-router-dom'


const Profile = (props) => {
  return (
    <div>
      <div>
        <div id='description'>
          <ol className="list-decimal list-inside m-6">
            {props.project}
          </ol>
        </div>
        {/* <ReactMarkdown source={props.readme} /> */}
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
