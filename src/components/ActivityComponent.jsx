import React, { Component } from "react";
import boredomData from "../data/BoredomBuster.json";

class ActivityComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomActivity: {},
    };
  }

  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * boredomData.length);
    const randomActivity = boredomData[randomIndex];
    this.setState({ randomActivity });
  }

  render() {
    const { randomActivity } = this.state;

    return (
      <div>
        <h3 className="text-6xl mt-10 font-bold">
          Looking for Something to Do?
        </h3>
        <h4 className="text-3xl mt-5 italic">{randomActivity.title}</h4>
        <a href={randomActivity.link}>{randomActivity.link}</a>
        <img
          className="max-h-300 max-w-300 min-h-300 min-w-300 justify-center"
          src={randomActivity.imageSrc}
          alt="Activity image"
        />
        <p>{randomActivity.description}</p>
        <div className="flex flex-row justify-evenly">
          <button
            className="btn bg-green-400 text-white font-bold mt-8"
            href={randomActivity.link}
          >
            Visit Site
          </button>
          <button className="btn bg-red-400 text-white font-bold mt-8">
            Try Something Else
          </button>
        </div>
      </div>
    );
  }
}

export default ActivityComponent;
