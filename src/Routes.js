import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import TheCanvas from './components/TheCanvas'


export default (
    <Switch>
        <Route path='/' exact component={App} />
        <Route path='/TheCanvas' component={TheCanvas} />
    </Switch>
)