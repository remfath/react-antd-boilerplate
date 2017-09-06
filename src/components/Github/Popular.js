import React from 'react';
import PropTypes from 'prop-types';
import api from '../../utils/github_apis';
import Loading from './Loading';

function SelectLanguage(props) {
    const languages = ['All', 'PHP', 'JavaScript', 'Python', 'Java', 'C', 'Go', 'Ruby', 'CSS'];

    return (
        <ul className="lang">
            {languages.map((lang) => {
                return (
                    <li key={lang}
                        className={ props.selectedLang === lang ? 'lang-active' : ''}
                        onClick={ props.onSelect.bind(null, lang) }>
                        { lang }
                    </li>
                );
            })}
        </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLang: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};


function ReposList(props) {
    return (
        <ul className="repos">
            {props.repos.map((repo, index) => {
                return (
                    <li key={repo.id}>
                        <div className="repo-rank">#{index + 1}</div>
                        <img className="repo-avatar" src={repo.owner.avatar_url} alt={repo.full_name}/>
                        <a className="repo-name" href={ repo.html_url }>{ repo.name }</a>
                        <a href={repo.owner.html_url} className="repo-author">@{repo.owner.login}</a>
                        <div className="repo-stars">{ repo.stargazers_count } stars</div>
                    </li>
                );
            })}
        </ul>
    );
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired
};


class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: 'All',
            repos: null
        };
        this.changeSelectedLang = this.changeSelectedLang.bind(this);
    }

    componentDidMount() {
        this.changeSelectedLang(this.state.selectedLang);
    }

    changeSelectedLang(lang) {
        this.setState(function () {
            return {
                selectedLang: lang,
                repos: null
            }
        });

        const that = this;
        api.fetchPopularReps(lang).then((repos) => {
            that.setState(function () {
                return {
                    repos: repos
                }
            });
        });
    }

    render() {
        return (
            <div>
                <SelectLanguage selectedLang={this.state.selectedLang} onSelect={this.changeSelectedLang}/>
                {
                    this.state.repos ? <ReposList repos={ this.state.repos }/> :
                        <Loading text='Getting repos'/>
                }

            </div>
        )
    }
}

export default Popular;
