import React, { Component } from "react";

export default class BottomNavbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md py-5 navbar-dark bg-dark navbar-bottom">
          <div class="container-fluid justify-content-center">
          <p class="text-secondary">Powered By <a class="text-secondary" href="https://www.squarespace.com/?channel=word_of_mouth&subchannel=customer&source=footer&campaign=4fd1028ee4b02be53c65dfb3"> Squarespace </a></p>
          </div>
        </nav>
      </div>
    );
  }
}
