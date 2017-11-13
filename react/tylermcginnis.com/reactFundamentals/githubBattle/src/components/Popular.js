import React, {Component} from "react";

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "All"
    };

    this.updateLang = this.updateLang.bind(this);
  }

  updateLang(lang) {
    this.setState(() => {
      return {
        selectedLang: lang
      }
    });
  }


  render() {
    const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

    console.log(`Selected Language: ${this.state.selectedLang}`);
    return (
      <ul className="languages">
        {languages.map((lang) => {
          return (
            <li
              style={lang === this.state.selectedLang ? {color: "#d0021b"}: null}
              onClick={this.updateLang.bind(null, lang)}
              key={lang}>
                {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = Popular;
