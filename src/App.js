
import React, { Component } from 'react';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: '',
      pwd: '',
      username: "Jeanita",
      password: "Paloma",
      login: false

    };
  }

  inputHandler = (event) => {
    const { uname, pwd, password, username } = this.state;
    if (uname === username && pwd === password) {
      this.setState({login: true})
    }
    else {
      this.setState ({login: false})
      alert("Invalid");
    }
  }

  render() {
    const { uname,login } = this.state;
    if (!login) {
      return (
        <div>
          <input type="text" placeholder="Username" onChange={event => this.setState({ uname: event.target.value })} required></input>
          <br />
          <input type="password" placeholder="Password" onChange={event => this.setState({ pwd: event.target.value })} required></input>
          <div>
            <button onClick={event => this.inputHandler(event)}>Login</button>
          </div>
          <div>
          </div>
        </div>
      );
    }
    else {
      return(
        <div>
          <Dashboard name={uname}/>
        </div>
      )
    }
  }
}
export default App;
