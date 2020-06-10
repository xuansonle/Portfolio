import React, { Component } from "react";

import ReactTyped from "react-typed";

const dataTextDE = [
  "ein Data Scientist",
  "ein 90er Vietnameser",
  "kurzsichtig, 1m70 groß und schlank",
  "seit Ende 2011 in Berlin",
  "ein selbstgelernter Web-Entwickler",
  "ein selbstgelernter Keyboarder",
  "pollenallergisch",
  "ein Fan des FC Liverpool",
  "ein Zauberwürfel-Sammler"
];

const dataTextEN = [
  "a data scientist",
  "a 90er Vietnamese",
  "shortsighted, 1m70 tall and thin",
  "since late 2011 in Berlin",
  "a self-taught web developer",
  "a self-taught keyboarder",
  "allergic to pollen",
  "a FC Liverpool fan",
  "a Rubik's Cube collector"
];

export default class HomeTypeWriter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 80,
      startTyping: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ startTyping: true }), 3000);
  }

  render() {
    return (
      <div className="hi-text section-text">
        {this.props.language === "de"
          ? "Mein Name ist Xuan Son Le."
          : "My name is Xuan Son Le."}
        <br />
        {this.props.language === "de" ? "Ich bin " : "I am "}

        {this.state.startTyping ? (
          <ReactTyped
            className="typing-span"
            strings={this.props.language === "de" ? dataTextDE : dataTextEN}
            typeSpeed={70}
            backSpeed={15}
            backDelay={500}
            showCursor={false}
            loop
          />
        ) : null}
        <span id="cursor" />
      </div>
    );
  }
}

// componentDidMount() {
//   this.handleType();
// }

// handleType = () => {
//   const dataText = this.props.language === "de" ? dataTextDE : dataTextEN;
//   const { isDeleting, loopNum, text, typingSpeed } = this.state;
//   const i = loopNum % dataText.length; // loop i from 0 to n
//   const fullText = dataText[i]; // each element in text list

//   this.setState({
//     text: isDeleting
//       ? // while deleting: text = fullText[0,-1], then fullText[0,0], then fullText[0,1]
//         fullText.substring(0, text.length - 1)
//       : // while typing: text = fullText[0,1], then fullText[0,2], then fullText[0,3]
//         fullText.substring(0, text.length + 1),
//     typingSpeed: isDeleting ? 15 : 80
//   });

//   if (!isDeleting && text === fullText) {
//     // when typing and text not yet fullText
//     setTimeout(() => this.setState({ isDeleting: true }), 400);
//   } else if (isDeleting && text === "") {
//     // when deleting and text is empty
//     this.setState({
//       isDeleting: false,
//       loopNum: loopNum + 1
//     });
//   }

//   setTimeout(this.handleType, typingSpeed);
// };
