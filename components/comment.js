import React from "react";
import htmlToText from "html-to-text";
const Comment = ({ to, replied, comment }) => {
  return (
    <div className="comment">
      <h4>
        {replied && (
          <span style={{ color: "grey", fontWeight: "400 !important" }}>
            {" "}
            @{to} {"<-"} replied by
          </span>
        )}{" "}
        {comment.user} - {comment.time_ago}
      </h4>
      <p>
        {htmlToText.fromString(comment.content, {
          wordwrap: 130,
          linkHrefBaseUrl: "",
        })}
      </p>
      {comment.comments.length > 0 && (
        <div className="inside">
          {comment.comments.map((ele) => (
            <Comment to={comment.user} replied key={ele.id} comment={ele} />
          ))}
        </div>
      )}
      <style jsx>
        {`
          .comment {
            margin: 0.5rem 0;
          }
          .comment > h4 {
            font-weight: 600;
            font-size: 1rem;
          }
          .comment > p {
            padding-left: 1rem;
          }
          .inside {
            width: 95%;
            padding: 1rem 1rem;
            margin: 0.5rem 0;
            margin-left: auto;
            border-left: 1px solid lightgrey;
          }
        `}
      </style>
    </div>
  );
};

export default Comment;
