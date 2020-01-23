import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteStream } from "../../store/actions/index";
import Modals from "../UI/Modals/Modal";
import history from "../../history";
class StreamDelete extends Component {
  state = {
    isVisible: true
  };

  handleCloseModal = () => {
    this.setState({
      isVisible: false
    });
    history.push('/')
  };

  deleteHandler = () => {
    this.props.deleteStream(this.props.match.params.id);
  };
  render() {
    return (
      <Modals
        show={this.state.isVisible}
        handleClose={this.handleCloseModal}
        handleDelete={this.deleteHandler}
      />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { deleteStream })(StreamDelete);
