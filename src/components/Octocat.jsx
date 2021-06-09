//Format for an octocat
import React from 'react'
export class Octocat extends React.Component {
  render() {
    return (
      <ol className="cat">
        <img src={this.props.image} alt={this.props.name} />
        <li>
          #{this.props.i}: <b>{this.props.name}</b>
        </li>
      </ol>
    )
  }
}
