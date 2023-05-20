import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChanged = (e) => {
        this.setState( () => {
            return {
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.trim() && !this.state.salary.match(/\D/)) this.props.onNewData(this.state.name, this.state.salary);
        this.setState(() => {
            return {
                name: '',
                salary: ''
            }
        })
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text" 
                        className="form-control new-posr-label"
                        placeholder="Имя сотрудника"
                        name="name"
                        value={name}
                        onChange={this.onValueChanged}/>
                    <input type="text" 
                        className="form-control new-posr-label"
                        placeholder="З/П в $"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChanged}/>
                    
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;