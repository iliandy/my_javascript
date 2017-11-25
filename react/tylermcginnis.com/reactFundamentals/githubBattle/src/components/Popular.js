import React, {Component} from "react";
import PropTypes from "prop-types";
import api from "../utils/api";
import Loading from "./Loading";

// Popular component
class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: "All",
      repos: null,
    };

    this.updateLang = this.updateLang.bind(this);
  }

  // AJAX requests
  componentDidMount() {
    this.updateLang(this.state.selectedLang);
  }

  updateLang(lang) {
    this.setState(() => {
      return {
        selectedLang: lang,
        repos: null,
      }
    });

    api.fetchPopularRepos(lang)
      .then((repos) => {
        this.setState(() => {
          return {
            repos: repos
          }
        })
      })
    }

  render() {
    console.log(`Selected Language: ${this.state.selectedLang}`);
    return (
      <div>
        <SelectLanguage
          selectedLang={this.state.selectedLang}
          onSelect={this.updateLang}
        />
        <RepoGrid repos={this.state.repos} />
      </div>
    )
  }
}

export default Popular;
