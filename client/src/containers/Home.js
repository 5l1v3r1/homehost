import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import NavBar from '../components/NavBar'
import FooterBar from '../components/FooterBar'

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">homehost</h1>
          <p className="lead">self-hosted Netflix-like app in React</p>
          <hr className="my-2" />
          <p>homehost is made to stream your media collection over the home network</p>
          <p><strong>Features: </strong>
            <a href="movies"> 🎥 Movies </a>
            <a href="tv"> 📺 TV </a>
            <a href="music"> 🎵 Music </a>
            <a href="books"> 📚 Books </a>
            <a href="comics"> 📒 Comics </a>
            <a href="podcasts"> 🎙️ Podcasts</a>
          </p>
          <p className="lead">
            <Button color="primary" href="https://github.com/ridhwaans/homehost/">View on Github</Button>
          </p>
        </Jumbotron>
        <FooterBar/>
      </div>
    );
  }
}

export default Home;