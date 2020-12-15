import React from 'react';
import { Route}  from 'react-router-dom';
import 'antd/dist/antd.css'   

//component
import IntersectionObserver from './intersectionObserver/IntersectionObserver'
import Pagemover from './main/component/Pagemover' 

export default function App() {
  return (
    <>
      <div>
        <Pagemover pages={pages}/>
      </div>

      <Route exact path="/intersection_observer" component={IntersectionObserver} />
    </>
  )
}

const pages = [
  { name: 'intersection_observer', path: '/intersection_observer' }
]
