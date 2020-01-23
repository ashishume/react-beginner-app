import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../store/actions/index";
import Loader from "../UI/Loader/Loader";
class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        {!this.props.thread.length ? (
          <Loader />
        ) : (
          <div>
            {this.props.thread[0].title}
            <p>{this.props.thread[0].description}</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    thread: state.apiData.response
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
