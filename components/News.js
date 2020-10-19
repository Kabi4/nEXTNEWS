import React from "react";
import Link from "next/link";
const news = ({ news }) => {
  return (
    <div className="news">
      <h3 className="news__title">
        <a href={news.url}>{news.title}</a>
      </h3>
      <div className="news__details">
        <span>{news.points || 0} Points</span>
        <span>{news.comments_count || 0} Comments</span>
        <Link href={`/story?id=${news.id}`}>
          <a>View Discussion</a>
        </Link>
      </div>
      <style jsx>
        {`
          .news {
            padding: 1em 0;
            border-bottom: 1px solid lightgrey;
          }
          . .news__title {
            font-size: 1rem;
            font-weight: 400;
            margin: 0 0 0.5em 0;
          }
          .news__title a {
            color: #333;
            text-decoration: none;
          }
          .news__title a:hover {
            text-decoration: underline;
          }
          .news__details {
            font-size: 0.8rem;
            font-weight: bold;
          }
          .news__details > span {
            margin-right: 1em;
          }
          .news__details a {
            color: #6600ff;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default news;
