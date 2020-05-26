import React, { useState, useEffect } from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import DummyView from './dummy-view'
import List from './list'
import Project from './project'


const Home = () => {
  const { userName, repositoryName } = useParams()
  const [list, setList] = useState([])
  useEffect(() => {
    if (typeof userName !== 'undefined') {
      axios.get(`https://api.github.com/users/${userName}/repos`).then(({ data }) => {
        return setList(data)
      })
    }
  }, [userName])
  const [project, setProject] = useState([])
  useEffect(() => {
    if (typeof repositoryName !== 'undefined') {
      axios.get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then(({ data }) => {
        return setProject(data)
      })
    }
  }, [userName, project])
  return (
    <div>
      <Header userName={userName} repositoryName={repositoryName} />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/" component={() => <DummyView />} />
            <Route exact path="/:userName" component={() => <List list={list} />} />
            <Route exact path="/:userName/:repositoryName" component={() => <Project project={project} />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
