import React, { Component } from "react";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
      return <div>
          
    </div>;
  }
}

const mapStateToProps = state => {
  return { authStatus: state.auth.isSignedIn };
};
export default connect(mapStateToProps, null)(Dashboard);
