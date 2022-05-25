import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const url = process.env.REACT_APP_API_URL
const cat = '/api/tags'

const Tag = () => {
  const { id } = useParams()
  const api = `/api/tag/${id}`

  const [articles, setArticles] = useState(null)
  const [tags, setTags] = useState([])

  useEffect(() => {
    axios.get(`${url}${api}`).then(response => setArticles(response.data))
    axios.get(`${url}${cat}`).then(response => setTags(response.data))
  }, [api])

  return (
    <main className="uk-flex-auto uk-section">
      <article className="uk-container uk-container-small">
        <ul>
          {tags.map(t => (
            <li key={t._id}>
              <a href={`/tag/${t._id}`}>{t.name}</a>
            </li>
          ))}
        </ul>
        <ul className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
          {articles &&
            articles.articles.map(article => (
              <li key={article._id}>
                <div>
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

export default Tag
