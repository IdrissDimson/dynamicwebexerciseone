import React, {useEffect, useState} from 'react';

import articleData from '../components/SiteData/articleData';
import TextBlock from '../components/textdisplay';

import "./article-listing.css";

function Articlelisting(props) {
    const [article, setArticle] = useState({});
    const routeId = props.match.params.id;

    useEffect(() => {
        for(let i = 0; i < articleData.length; i++) {
            if(articleData[i].id === routeId) {
                setArticle(articleData[i])
            } else{
                console.log('nope')
            }
        }
    }, [routeId]);

    return (
    <div className="Article-content">
        <div className="article-heading" style={{backgroundImage: `url("${article.image && article.image.url}")`}}>
            <h1 className="articles-title">{article.title}</h1>
            <p>{article.publishedDate}</p>
            <h2 className="articles-dates">{article.blurb}</h2>
        </div>
        <div className="article__text">
            {article.articleText && article.articleText.map((text,i) => (
                <TextBlock key={i} type={text.type} data={text.data} />
            ))}
        </div>
    </div>
    );
}
  
export default Articlelisting;
  
