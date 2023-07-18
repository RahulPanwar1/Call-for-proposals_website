import React, { useState, useEffect } from 'react';
import "./news.css";

function JobNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = 'e6776717ec5e493a94961501e6fde2c5';
    const apiUrl = `https://newsapi.org/v2/everything?q=jobs&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <div>
        <div className="grid">
        <h1>Latest Job News</h1>
        <ul className="list">
            {news.map(article => (
            <li key={article.url} className="item">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img src={article.urlToImage} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                </a>
            </li>
            ))}
        </ul>
        </div>
    </div>
  );
}

export default JobNews;