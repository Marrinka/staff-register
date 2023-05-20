import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    onFilter = (e) => {
        const filter = e.currentTarget.getAttribute('data-filter');
        this.setState({filter});
        this.props.onFilter(filter);
    }

    render () {
        return (
            <div className="btn-group">
                <button 
                    className={"btn" + ((this.state.filter == "") ? " btn-light" : " btn-outline-light")}
                    type="button"
                    data-filter=""
                    onClick={this.onFilter}>
                        Все сотрудники
                </button>
                <button 
                    className={"btn" + ((this.state.filter == "star") ? " btn-light" : " btn-outline-light")}
                    type="button"
                    data-filter="star"
                    onClick={this.onFilter}>
                       На повышение
                </button>
                <button 
                    className={"btn"  + ((this.state.filter == "salary") ? " btn-light" : " btn-outline-light")}
                    type="button"
                    data-filter="salary"
                    onClick={this.onFilter}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;