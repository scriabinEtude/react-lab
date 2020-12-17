import React from 'react';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css'

//component
import Observer from './observer/Observer'
import Pagemover from './main/component/Pagemover'

export default function App() {
  return (
    <>
      <div>
        <Pagemover pages={pages} />
      </div>

      <Route exact path="/observer" component={Observer} />
    </>
  )
}

const pages = [
  { name: 'observer', path: '/observer' }
]
