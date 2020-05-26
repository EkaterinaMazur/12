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

      <form className="flex items-center justify-center h-screen">
        <div className="flex items-center px-80 py-10">
          <div className="md:w-1/3">
            <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Repository:
            </label>
          </div>
          <div className="md:w-2/3">


            <div>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={userName}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            {/* <div className="md:w-1/3" /> */}
            {/* </div> */}
            {/* <div className="md:w-2/3"> */}
            <button
              type='button'
              onClick={() => history.push(`/${userName}`)}
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >Баттонидзе
            </button>
            {/* </div> */}
          </div>
        </div>
      </form>
    </div>

  )
}

Dummy.propTypes = {}

export default Dummy
