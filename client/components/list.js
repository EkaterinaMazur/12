import React from 'react'
// {useEffect, useParams, useState}
import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'
// import Head from './head'

const List = (props) => {
  const { userName } = useParams()
  // const [list, setList] = useState([])
  // useEffect(() => {
  //   if (typeof userName !== 'undefined') {
  //     axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => {
  //       return setList(data)
  //     })
  //   }
  // }, [userName])
  return (
    <div>
      <ol className="list-decimal list-inside m-6">
        {props.list.map((repos) => {
          return (
            <li>
              <Link to={`/${userName}/${repos.name}`}>{repos.name}</Link>
            </li>
          )
        })}
      </ol>
    </div>
    //   {userName}
    //   {list}
    //   {/* {list.map(user => {
    //     return (<div key={user.name} style={{ display: "flex" }}>
    //       <div style={{ width: '250px' }}>{user.name}</div>
    //     </div>)
    //   })} */}
    // </div>
  )
}
List.propTypes = {}

export default List
