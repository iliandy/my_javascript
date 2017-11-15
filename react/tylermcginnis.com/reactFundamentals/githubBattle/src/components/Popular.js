import React, {Component} from "react";
import PropTypes from "prop-types";
import api from "../utils/api";

const SelectLanguage = (props) => {
  const languages = ["All", "JavaScript", "Python", "Java", "CSS", "Ruby"];

  return (
    <ul className="languages">
      {languages.map((lang) => {
        return (
          <li
            style={lang === props.selectedLang ? {color: "#d0021b"}: null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

const RepoGrid = (props) => {
  if (!props.repos) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <ul className="popular-list">
      {props.repos.map((repo, index) => {
        return (
          <li className="popular-item" key={repo.name}>
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={`Avatar for ${repo.owner.login}`}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}


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

    api.fetchPopularRepos(lang).then((repos) => {
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

module.exports = Popular;
