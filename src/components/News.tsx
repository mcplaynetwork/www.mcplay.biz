import React from "react";

export default function News({ num }) {
  const Posts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");
  console.log(Posts.items.slice(0, num));
  return (
    <ul className="news-list">
      {Posts.items.slice(0, num).map((item, index) => {
        const date = item.permalink.split("/").slice(2, 5).join("-");
        return (
          <li key={index} className="news-item">
            <a href={`${item.permalink}`} className="news-link">
              {item.title}
            </a>
            <span className="news-date">{new Date(date).toLocaleDateString()}</span>
          </li>
        );
      })}
    </ul>
  );
}
