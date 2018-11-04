import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getPost } from "../../actions/postAction";

import CommentForm from "./CommentForm";
import Spinner from "../common/Spinner";
import CommentFeed from "./CommentFeed";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  render() {
    const { post, loading } = this.props.post;
    let commentContent;

    if (post.comments === null || loading || Object.keys(post).length === 0) {
      commentContent = <Spinner />;
    } else {
      commentContent = (
        <div>
          <CommentForm postId={post._id} placeholder="Comment Here" />
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body mb-3">
                <div className="row">
                  <div className="col-md-2">
                    <a href="profile.html">
                      <img
                        className="rounded-circle d-none d-md-block"
                        src={post.avatar}
                        alt=""
                      />
                    </a>
                    <br />
                    <p className="text-center">{post.name}</p>
                  </div>
                  <div className="col-md-10">
                    <p className="lead">{post.text}</p>
                  </div>
                </div>
              </div>
              {commentContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
