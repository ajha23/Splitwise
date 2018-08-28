import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'


class ExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []

        };

    }

    componentDidMount() {
        let data = [];
        if (localStorage.length) {
            for (var i = 0; i < localStorage.length; i++) {
                let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
                item["contribution"]=(item.amounts/item.friends.split(",").length).toFixed(2);
                data.push(item);
            }
            this.setState({
                data: [...data]
            })

        }
    }

    removeItem = (key) => {
        localStorage.removeItem(key.target.id);
        // this.setState(prev => {
        //     data: [...prev.data]
        // })
        this.forceUpdate();
    }



    render() {

        return (
            < React.Fragment >
                <table>
                    <thead>
                        <tr>
                            <th>Expense Description</th>
                            <th>Amounts</th>
                            <th>Friends</th>
                            <th>Expense Contribution </th>
                        </tr>
                    </thead>
                    <tbody >

                        {this.state.data.map(input =>
                            <ExpenseItem
                                key={input.desc}
                                {...input} removeItem={this.removeItem}
                            />
                        )}
                    </tbody>
                </table>

            </React.Fragment >
        )
    }
}



export default ExpenseList