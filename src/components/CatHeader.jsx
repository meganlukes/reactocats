import React, { Component } from 'react'

class CatHeader extends Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <ul>
              <img src="Images/octocat.jpg" alt="Octodex logo" height="32" />
              <li className="after">Home</li>
              <li className="after">FAQ</li>
              <li>RSS</li>
            </ul>
          </li>
          <li></li>
          <li>
            <ul>
              <li className="after">Follow us on Twitter</li>
              <li className="after">
                <a>Back to GitHub.com</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    )
  }
}

export default CatHeader
