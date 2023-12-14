import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: ' Mohamed Raed chokri',
        bio: 'Im a young man who wants to get money and retire ASAP !!!',
        imgSrc: 'https://t4.ftcdn.net/jpg/05/82/57/01/360_F_582570122_6s9UeUv3KJwctv8XPkDEfuWKQoLTZAB0.jpg', 
        profession: 'Software Developer',
      },

    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.updateMountTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateMountTime() {
    this.setState({ mountTime: new Date() });
  }

  handleToggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div>
        <h1>React Profile App</h1>
        <button onClick={this.handleToggleShow}>
          Toggle Profile {show ? 'Off' : 'On'}
        </button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

      </div>
    );
  }
}

export default App;
