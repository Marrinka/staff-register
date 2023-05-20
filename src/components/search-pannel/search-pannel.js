import { Component } from 'react';

import './search-pannel.css'

class SearchPannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdSearch(term);
    }

    render() {
        return (
            <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onUpdSearch} />
        )
    }
}

export default SearchPannel;