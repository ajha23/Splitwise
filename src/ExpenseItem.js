import React from 'react'

const ExpenseItem = (props) => (

    <React.Fragment>
        <tr>
            <td>{props.desc}</td>
            <td>{props.amounts}</td>
            <td>{props.friends}</td>
            <td>
                <ul>
                    {props.friends.split(",").map(val => (

                        <li key={val}>
                            {val}:{props.contribution}
                        </li>

                    ))}
                </ul>
            </td>
            <td><button id={props.id} onClick={props.removeItem}>X</button></td>
        </tr>
    </React.Fragment>
)

export default ExpenseItem