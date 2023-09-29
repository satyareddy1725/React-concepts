import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
      },
    };
    console.log(this.props.name + "child-constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/satyareddy1725");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
    console.log(this.props.name + "child-component-did-mount");
  }

  componentDidUpdate() {
    console.log(this.props.name + "child-componentDidUpdate");
  }
  componentWillUnmount() {
    console.log(this.props.name + "child-componentWillUnmount");
  }

  render() {
    const { login } = this.state.userInfo;
    console.log(this.props.name + "child-render");
    return (
      <div className="user-card">
        <h1>Name :{login}</h1>
        <h3>Location :</h3>
        <h4>Contact : satyareddy1725@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
