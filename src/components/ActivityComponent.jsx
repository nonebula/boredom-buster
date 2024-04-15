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
      <div className="flex flex-col items-center justify-center m-5">
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
          className="max-h-2/3 max-w-2/3 min-h-2/3 min-w-2/3 justify-center text-center place-content-center content-center h-2/3 w-2/3"
          src={randomActivity.imageSrc}
          alt="Activity image"
        />
        <p className="text-center m-8">{randomActivity.description}</p>
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
