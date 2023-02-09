import React from 'react'
import { Outlet } from 'react-router-dom'

function Home(){
    return(
        <div>
        <Outlet />
            <h4 className=''>Welcome, This is Home Page</h4>
            <p className=''>What you Want</p>
        </div>
    )

}

export default Home