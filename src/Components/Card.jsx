import React from 'react';
import {Link} from 'react-router-dom';

function Card({story, hasLink}) {
  return (
      <article>
        <h3>{story.title}</h3>
        <p>{story.content}</p>
        <p>{story.author}</p>

        {hasLink && <Link to={`/story/${story.id}`}>detail</Link>}

      </article>
    
  )
}

export default Card