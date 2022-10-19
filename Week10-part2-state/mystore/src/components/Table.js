import React, { Component } from 'react';


class Table extends Component {

    render() {
        const { list, onDelete } = this.props;

        return (
            <div>
               
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><button onClick={() => {onDelete(index);}}>
                                        <i>Delete</i>
                                    </button></td>

                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table;