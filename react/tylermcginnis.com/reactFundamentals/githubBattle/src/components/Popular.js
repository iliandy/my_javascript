import React, {Component} from "react";
import PropTypes from "prop-types";
import api from "../utils/api";



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

module.exports = Popular;
