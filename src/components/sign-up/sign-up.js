import React from "react";

import "./sign-up.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return <div>Sign Up</div>;
  }
}

export default SignUp;
