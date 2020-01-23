import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../store/actions/index";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "545966429247-6mggd9klggmb4s3d3do13j17m6k8m0fa.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };
  onAuthChange = isSignedIn => {

    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else this.props.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <button onClick={this.onSignOut} className="btn btn-danger">
            Log out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onSignIn} className="btn btn-success">
            SignIn with Google
          </button>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
