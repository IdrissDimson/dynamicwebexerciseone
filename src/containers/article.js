import React from 'react';
import './article.css';
import articleData from '../components/SiteData/articleData';

function ArticleTypes({
    articleData = {}
}) {
    return (
    <div className="article">
        <header className="article-header">
            <img className="article-img" src={articleData.image.url} alt={articleData.image.alt}/>
            <h1 className="articles-title">{articleData.title}</h1>
            <p>{articleData.publishedDate}</p>
            <p>{articleData.blurb}</p>
            <a href={`/article/${articleData.id}`}>Read More</a>
        </header>
    </div>
    );
}

export default function Article(props){
    return(
        <div class="article-body">
            <h1>Articles</h1>
            {articleData.map((article, i) => (
                <ArticleTypes key={i} articleData={article} />
            ))}
        </div>
    )
}