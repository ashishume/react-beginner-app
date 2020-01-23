import React, { Component } from "react";
import { fetchStreams } from "../../store/actions/index";
import { connect } from "react-redux";
import "./StreamList.css";
import { Link } from "react-router-dom";
import Loader from "../UI/Loader/Loader";
class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    if (this.props.threads.length > 0) {
      return this.props.threads.map(value => {
        const date = new Date(value.date);
        return (
          <div key={value._id}>
            <div className="card">
              <div className="card-header">{value.title}</div>
              <div className="card-body">
                <p className="card-text">
                  <Link to={`streams/show/${value._id}`}>
                    {value.description}
                  </Link>
                </p>
                <p>
                  Created At:{" "}
                  {date.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                    day: "numeric"
                  })}
                </p>
                <Link to={`/streams/edit/${value._id}`}>
                  <button className="btn btn-outline-primary btn-sm">
                    Edit
                  </button>
                </Link>
                &nbsp;
                <Link to={`/streams/delete/${value._id}`}>
                  <button className="btn btn-outline-danger btn-sm">
                    Delete
                  </button>
                </Link>
              </div>
            </div>
            <br />
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <div className="col-md-12">
          <h3>Stream List</h3>
          <Link to="/streams/new">
            <button className="btn btn-primary">Create Thread</button>
          </Link>
          <br />
          <br />
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { threads: state.apiData.response };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
