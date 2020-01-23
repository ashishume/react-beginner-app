import "./StreamCreate.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../store/actions/index";
import ThreadForm from "../UI/ThreadForm";
class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="col-md-12">
        <div className="formData">
          <h4>Create Stream</h4>
          <ThreadForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    api: state.apiData
  };
};

export default connect(mapStateToProps, { createStream })(StreamCreate);
