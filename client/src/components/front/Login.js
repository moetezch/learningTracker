import React, { Component } from 'react'




export default class Login extends Component {
  render() {
    return (
      <section className="section">
      <div className="container has-text-centered">
      <h1 className="is-size-1">Sign in to get started</h1>
      <br/>

        <a className="button is-large column"
          href="/auth/google"
          style={{ background:'rgb(234, 67, 53) none repeat scroll 0% 0%', color: 'white' }}
        ><i className="fab fa-google"></i> Sign in with Google</a>
        <a className="button is-large column"
          href="/auth/twitter"
          style={{ background:'rgb(0, 172, 237) none repeat scroll 0% 0%', color: 'white' }}
        ><i className="fab fa-twitter"></i> Sign in with Twitter</a>
        <a className="button is-large column"
          href="/auth/github"
          style={{ background:'rgb(22, 23, 26) none repeat scroll 0% 0%', color: 'white' }}
        ><i className="fab fa-github"></i> Sign in with Github</a>
        </div>

      </section>
    );
  }
}