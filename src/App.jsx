import React, { Component } from 'react'
import { Octocat } from './components/Octocat'
import cats from './cats.json'
import CatHeader from './components/CatHeader'

export class App extends Component {
  render() {
    const catFromData = cats.map(cat => (
      <Octocat key={cat.id} i={cat.i} name={cat.name} image={cat.image} />
    ))
    return (
      <div>
        <CatHeader />
        <main>{catFromData}</main>
      </div>
    )
  }
}
