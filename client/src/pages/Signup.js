import React, { useState } from 'react'
import { register } from '../services/users'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const data = { name: name, email: email, password: password }
      await register(data)
      window.location.href = '/login'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="uk-flex-auto uk-section uk-flex uk-flex-row uk-flex-center">
      <article className="uk-container uk-container-small">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} className="uk-form-stacked" action="/login" method="post">
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="name">
              Name:
            </label>
            <div className="uk-form-controls uk-inline">
              <span className="uk-form-icon" data-uk-icon="icon: user"></span>
              <input
                onChange={event => setName(event.target.value)}
                className="uk-input"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                autoFocus
                required
              />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="email">
              Email:
            </label>
            <div className="uk-form-controls uk-inline">
              <span className="uk-form-icon" data-uk-icon="icon: mail"></span>
              <input
                onChange={event => setEmail(event.target.value)}
                className="uk-input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="password">
              Password:
            </label>
            <div className="uk-form-controls uk-inline">
              <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
              <input
                onChange={event => setPassword(event.target.value)}
                className="uk-input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          {/* <div className="uk-margin">
            <label className="uk-form-label" htmlFor="passwordConfirmation">
              Password Confirmation:
            </label>
            <div className="uk-form-controls uk-inline">
              <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
              <input
                className="uk-input"
                type="password"
                id="passwordConfirmation"
                name="Password Confirmation"
                placeholder="Password Confirmation"
                required
              />
            </div>
          </div> */}
          <div className="uk-margin">
            <button className="uk-button uk-button-primary uk-width-expand" type="submit">
              Signup
            </button>
          </div>
        </form>
        <p className="uk-text-small">
          <span className="uk-margin-small-right">Already have an Account?</span>
          <a className="uk-link-heading" href="/login/">
            Login
            <span className="uk-margin-small-left uk-icon" data-uk-icon="arrow-right"></span>
          </a>
        </p>
      </article>
    </main>
  )
}
export default Signup
