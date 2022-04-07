import React from "react";
import axios from "axios";
import ArmazenaPlaylist from "./Components/ArmazenaPlaylist";

export default class App extends React.Component {

  render() {

    return (
      <div>
        <ArmazenaPlaylist />
      </div>
    );
  }
}
