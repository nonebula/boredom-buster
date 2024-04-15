import React, { Component } from "react";
import boredomData from "../data/BoredomBuster.json";

class ActivityComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomActivity: {},
    };
    this.generateRandomActivity = this.generateRandomActivity.bind(this);
  }

  componentDidMount() {
    this.generateRandomActivity();
  }

  generateRandomActivity() {
    const randomIndex = Math.floor(Math.random() * boredomData.length);
    const randomActivity = boredomData[randomIndex];
    this.setState({ randomActivity });
  }

  render() {
    const { randomActivity } = this.state;

    return (
      <div className="flex-column centre">
        <h3 className="text-6xl mt-10 font-bold text-center">
          Looking for Something to Do?
        </h3>
        <h4 className="text-3xl mt-5 italic text-center">
          {randomActivity.title}
        </h4>
        <a className="text-center" href={randomActivity.link}>
          {randomActivity.link}
        </a>
        <img
          className="max-h-300 max-w-300 min-h-300 min-w-300 justify-center text-center"
          src={randomActivity.imageSrc}
          alt="Activity image"
        />
        <p className="text-center">{randomActivity.description}</p>
        <div className="flex flex-row justify-evenly text-center">
          <button
            onClick={() => window.open(randomActivity.link)}
            className="btn bg-green-400 text-white font-bold mt-8 text-center"
            href={randomActivity.link}
          >
            Visit Site
          </button>
          <button
            onClick={this.generateRandomActivity}
            className="btn bg-red-400 text-white font-bold mt-8 text-center"
          >
            Try Something Else
          </button>
        </div>
      </div>
    );
  }
}

export default ActivityComponent;
