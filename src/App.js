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
import Portfolio from './portfolio/Portfolio'
import Login from './auth/container/Login';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Pagemover pages={pages} />
      </div>

      <Route exact path="/" component={Login} />
      <Route exact path="/observer" component={Observer} />
      <Route exact path="/link" component={Link} />
      <Route exact path="/instagram" component={Instagram} />
      <Route exact path="/portfolio" component={Portfolio} />

    </Provider>
  )
}

const pages = [
  { name: 'observer', path: '/observer' },
  { name: 'link', path: '/link' },
  { name: 'instagram', path: '/instagram' },
  { name: 'portfolio', path: '/portfolio' },
]
