import React from 'react';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './common/store'

//component
import Pagemover from './main/component/Pagemover'
import Observer from './observer/Observer'
import Link from './link/Link.js'
import Instagram from './instagram/Instagram'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Pagemover pages={pages} />
      </div>

      <Route exact path="/observer" component={Observer} />
      <Route exact path="/link" component={Link} />
      <Route exact path="/instagram" component={Instagram} />

    </Provider>
  )
}

const pages = [
  { name: 'observer', path: '/observer' },
  { name: 'link', path: '/link' },
  { name: 'instagram', path: '/instagram' },
]
