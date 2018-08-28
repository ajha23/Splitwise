import React, { Component } from 'react'
import ExpenseList from './ExpenseList'


class Splitwise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            desc: '',
            amounts: '',
            friends: ''
        };

    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((prev,props)=>{
            id:prev.id++
        })
        if (localStorage) {
            localStorage.setItem(this.state.id, JSON.stringify(this.state));
        } else {
            alert(" Your browser  supporting localstorage !!!");
        }
        this.forceUpdate();
        document.getElementById('ContactForm').reset();
        
    }



    render() {

        const attribute = [
            { label: 'Expense Description', name: 'desc' },
            { label: 'Amounts', name: 'amounts' },
            { label: 'Friends', name: 'friends' },

        ]
        return (
            <React.Fragment>
                <form id='ContactForm' onSubmit={this.handleSubmit}>
                    {attribute.map(item => {
                        return (<div key={item.name} className='row'>
                            <div className='col-25'>
                                <label>
                                    {item.label}:
                    </label>
                            </div>
                            <div className='col-75'>
                                <input type="text" name={item.name} placeholder={item.label} value={this.state.value} onChange={this.handleChange} required />
                            </div>
                        </div>

                        )
                    })}
                    <div className='row'>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <ExpenseList />
            </React.Fragment>
        );
    }
}

export default Splitwise
