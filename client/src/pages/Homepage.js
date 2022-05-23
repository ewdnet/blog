import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getCurrentUser } from '../services/users'

const url = process.env.REACT_APP_API_URL
const api = '/api/articles'

const Homepage = () => {
  const [user, setUser] = useState('')
  const [articles, setArticles] = useState([])
  useEffect(() => {
    setUser(getCurrentUser())
    axios.get(`${url}${api}`).then(response => setArticles(response.data))
  }, [])

  return (
    <main className="uk-flex-auto uk-section">
      <article className="uk-container uk-container-small">
        <h2>User: {user}.</h2>
        <ul className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
          {articles.map(article => (
            <li key={article._id}>
              <Link
                to={`/article/${article._id}`}
                className="uk-link-reset uk-card uk-card-default uk-card-hover uk-card-body"
              >
                <div>
                  <figure className="uk-child-width-1-1">
                    <img src={article.cover} alt="" />
                  </figure>
                  <h3>{article.title}</h3>
                </div>
                <div>
                  <p>{article.description.substring(0, 250)} ...</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}

export default Homepage
