import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

const url = process.env.REACT_APP_API_URL

const SingleView = () => {
  const { id } = useParams()
  const api = `/api/article/${id}`
  const [article, setArticle] = useState({})

  axios.get(`${url}${api}`).then(response => setArticle(response.data))

  return (
    <main className="uk-flex-auto uk-section">
      <article className="uk-container uk-container-xsmall uk-background-default uk-box-shadow-small">
        <header>
          <h1 className="uk-article-title">{article.title}</h1>
          <figure className="uk-child-width-1-1">
            <img src={article.cover} alt="" />
          </figure>
        </header>
        <div>
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}

export default SingleView
