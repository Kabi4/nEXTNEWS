import React, { Component } from "react";
import Fetch from "isomorphic-fetch";
import Error from "next/error";
import Layout from "../components/layout";
import Comment from "../components/comment";

class Story extends Component {
  static async getInitialProps({ req, res, query }) {
    let story;
    let storyId;
    try {
      storyId = query.id;
      const response = await Fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await response.json();
    } catch (err) {
      story = null;
    }
    return {
      story,
      storyId,
    };
  }
  render() {
    const { story, storyId } = { ...this.props };
    if (story === null) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout backbutton>
        <main>
          <h1 className="story_title">
            <a href={story.url}>{story.title}</a>
          </h1>
          <div className="story_details">
            <strong>{story.points} Points</strong>
            <strong>{story.comments_count} Comments</strong>
            <strong>{story.time_ago}</strong>
          </div>
          <div className="story__comments">
            {story.comments.map((ele) => {
              return <Comment comment={ele} key={ele.id} />;
            })}
          </div>
        </main>
        <style jsx>
          {`
            main {
              padding: 1em;
            }
            .story_title {
              font-size: 1.2rem;
              font-weight: 300;
              padding-bottom: 0.5em;
            }
            .story_title a {
              color: #333;
              text-decoration: none;
            }
            .story_title a:hover {
              text-decoration: underline;
            }
            .story_details {
              font-size: 0.8rem;
              padding-bottom: 1em;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              margin-bottom: 1em;
            }
            .story_details strong {
              margin-right: 1em;
            }
            .story_details a {
              color: #f60;
            }
            .story__comments {
              padding: 1rem;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Story;
