import React from 'react';

export default class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
            name: '',
            price: '',
            description: ''
        };
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd() {
        const { name, price, description } = this.state;
        const newProduct = { name, price, description }
        this.props.onAdd(newProduct);
        this.setState({
            formOpen: false,
            name: '',
            price: '',
            description: ''
        });


    }

    render() {

        const button = <button onClick={() => { this.setState({ formOpen: !this.state.formOpen }) }}>
        <i>Add</i>
    </button>;
        const form = (
            <div>
                <table>
                    <tr><td><label>Name</label></td>
                        <td><input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} /></td>
                    </tr>
                    <tr><td><label>Price</label></td>
                        <td><input type="number" value={this.state.price} onChange={e => this.setState({ price: e.target.value })} /></td></tr>
                    <tr><td><label>Description</label></td>
                        <td><textarea width="100" height="300" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} /></td></tr>
                    <tr><td colSpan="2"><button onClick={this.handleAdd}>Add</button></td></tr>
                </table>

            </div>
        );
        return this.state.formOpen ? form : button;
    }
}