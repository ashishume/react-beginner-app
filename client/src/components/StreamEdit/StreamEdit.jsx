import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams, editStream } from "../../store/actions/index";
import ThreadForm from "../UI/ThreadForm";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div className="col-md-12">
        <div className="formData">
          <h4>Edit Stream</h4>
          {this.props.data ? (
            <ThreadForm
              initialValues={this.props.data}
              onSubmit={this.onSubmit}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let data;
  state.apiData.response.map(value => {
    if (value._id == ownProps.match.params.id) {
      data = value;
    }
  });
  return {
    data: data,
    threads: state.apiData.response
  };
};
export default connect(mapStateToProps, { fetchStreams, editStream })(
  StreamEdit
);
