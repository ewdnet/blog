import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = process.env.REACT_APP_API_URL
const api = '/api/articles'

const Homepage = () => {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getArticles() {
    setLoading(true)
    try {
      const response = await axios.get(`${url}${api}`)
      setArticles(response.data)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  if (loading)
    return (
      <main className="uk-flex-auto uk-section">
        <article className="uk-container uk-container-xsmall">
          <p className="uk-text-center">
            <span className="uk-text-secondary" data-uk-spinner="ratio: 5"></span>
          </p>
        </article>
      </main>
    )
  if (error)
    return (
      <main className="uk-flex-auto uk-section">
        <article className="uk-container uk-container-xsmall">
          <p className="uk-text-center">Error: {error}</p>
        </article>
      </main>
    )

  return (
    <main className="uk-flex-auto uk-section">
      <article className="uk-container uk-container-small">
        <ul className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
          {articles.map(article => (
            <li key={article._id}>
              <div>
                <ul className="uk-list uk-margin-remove-bottom uk-flex">
                  {article.tags.map(tag => (
                    <li key={tag._id} className="uk-margin-remove-top">
                      <a
                        className="uk-padding-small uk-padding-remove-vertical"
                        href={`/tag/${tag._id}`}
                      >
                        {tag.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <figure className="uk-child-width-1-1">
                  <img src={article.cover} alt="" />
                </figure>
                <h2>{article.title}</h2>
              </div>
              <div>
                <p>{article.description.substring(0, 250)} ...</p>
                <p>
                  <Link
                    to={`/article/${article._id}`}
                    className="uk-link-reset uk-card uk-card-default uk-card-hover uk-card-body"
                  >
                    More ...
                  </Link>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}

export default Homepage
