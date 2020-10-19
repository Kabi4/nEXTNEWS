import React, { Component } from "react";
import Fetch from "isomorphic-fetch";
import Error from "next/error";
import News from "../components/News";
import Layout from "../components/layout";
import Link from "next/link";
class index extends Component {
  componentDidMount(){
    if("serviceWorker" in navigator){
      navigator.serviceWorker.register("/service-worker.js")
      .then(resgistration=>{
        
      })
      .catch(err=>{
        console.log("FAILED",err)
      })
    }
  }
  static async getInitialProps({ req, res, query }) {
    let stories = null;
    let page;
    try {
      page = Number(query.page) || 1;
      
      const response = await Fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (err) {
      stories = null;
    }
    return {
      stories,
      page,
    };
  }
  render() {
    const { stories, page } = { ...this.props };
    if (stories === null) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title="nEXT NEWS" description="A News Clone with nEXT JS">
        <div className="news__list">
          <h1>News By nEXT</h1>
          {this.props.stories.map((ele) => {
            return <News news={ele} key={ele.id} />;
          })}
        </div>
        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>
        <style jsx>
          {`
            .news__list {
              padding: 0 1em;
            }
            footer {
              padding: 1em;
              margin-left: auto;
              margin-right: 0.3em;
            }
            footer a {
              text-decoration: none;
              font-weight: bold;
              color: black;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default index;
