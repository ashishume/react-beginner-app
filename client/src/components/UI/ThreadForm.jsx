import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class ThreadForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderError = ({ error, touched }) => {
    if (touched && error)
      return <small className="error-message">{error}</small>;
  };

  renderInput = ({ input, meta }) => {
    const idName = meta.touched && meta.error ? "error" : "";
    return (
      <>
        <label htmlFor={input.name}>{input.name}</label>

        <input
          autoComplete="off"
          {...input}
          className="form-control"
          id={idName}
        />
        {this.renderError(meta)}
      </>
    );
  };

  render() {
    return (
      <div className="formData">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <Field name="title" component={this.renderInput} />
          </div>
          <div className="form-group">
            <Field name="description" component={this.renderInput} />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const error = {};
  if (!formValues.Title) {
    error.Title = "Must enter a title";
  }
  if (!formValues.Description) {
    error.Description = "Must enter a description";
  }
  return error;
};
export default reduxForm({
  form: "ThreadForm",
  validate
})(ThreadForm);

// const mapStateToProps = state => {
//   console.log(state.apiData);
//   return {
//     api: state.apiData
//   };
// };

// export default connect(mapStateToProps, { createStream })(formWrapped);
