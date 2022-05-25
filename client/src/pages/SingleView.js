import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getCurrentUser } from '../services/users'
import ReactMarkdown from 'react-markdown'

const url = process.env.REACT_APP_API_URL

const SingleView = () => {
  const [user, setUser] = useState('')
  const { id } = useParams()
  const api = `/api/article/${id}`
  const [article, setArticle] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getArticle() {
    setLoading(true)
    try {
      const response = await axios.get(`${url}${api}`)
      setArticle(response.data)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    setUser(getCurrentUser())
    getArticle()
  }, [])
  // console.log(article)
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
      <article className="uk-container uk-container-xsmall uk-background-default uk-box-shadow-small">
        <header>
          {user}
          <ul className="uk-list uk-margin-remove-bottom uk-padding uk-padding-remove-horizontal uk-padding-remove-bottom uk-flex">
            {article.tags.map(tag => (
              <li key={tag._id} className="uk-margin-remove-top">
                <a className="uk-padding-small uk-padding-remove-vertical" href={`/tag/${tag._id}`}>
                  {tag.name}
                </a>
              </li>
            ))}
          </ul>
          <figure className="uk-child-width-1-1">
            <img src={article.cover} alt="" />
          </figure>
          <h2 className="uk-article-title">{article.title}</h2>
        </header>
        <div>
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>
      </article>
      <section className="uk-container uk-container-xsmall">
        <ul className="uk-list uk-padding">
          {article.comments.map(c => (
            <li key={c._id}>
              <h4>{c.author}</h4>
              <div>{c.content}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default SingleView
