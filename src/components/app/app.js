import { Component } from 'react';


import './app.css';
import AppInfo from '../app-info/app-info'; 
import SearchPannel from '../search-pannel/search-pannel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Smith', salary: '1000', increase: false, star: false, id: 1},
                {name: 'Alex Brown', salary: '800', increase: true, star: true, id: 2},
                {name: 'Mary Jane', salary: '900', increase: false, star: false, id: 3}
            ],
            maxId: 4,
            term: '',
            filter: ''
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            return {
                data : data.filter((item, i) => i !== index)
            }
        })
    }

    addData = (name, salary) => {
        this.setState(({data, maxId}) => {
            const upd = [...data];
            upd.push({name: name, 
                salary: salary, 
                increase: false,
                star: false, 
                id : maxId});
            return {
                data : upd,
                maxId : maxId + 1
            }
        })
    }


    toggleProp = (id, prop) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const dataCopy = JSON.parse(JSON.stringify(data));
            dataCopy[index][prop] = !data[index][prop];
            return {
                data: dataCopy
            }
        })
    }


    searchStr = (data, term, filterData) => {
        let items = [...data];
        if (filterData) {
            if (filterData === 'salary') {
                items = items.filter(item => item.salary > 1000);
            }
            else {
                items = items.filter(item => item.star);
            }
        }
        if (term.length === 0) {
            return items;
        }
        else {
            return items.filter(item => item.name.indexOf(term) > -1);
        }
    }

    onUpdSearch = (term) => {
        this.setState({term: term});
    }

    onFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.searchStr(data, term, filter);

        return (
            <div className="app">
                <AppInfo data={data}/>
                <div className="search-pannel">
                    <SearchPannel
                        onUpdSearch={this.onUpdSearch}/>
                    <AppFilter
                        onFilter={this.onFilter}/>
                </div>
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.toggleProp}/>
                <EmployeesAddForm 
                    onNewData={this.addData}/>
            </div>
        )
    }

    
}

export default App;