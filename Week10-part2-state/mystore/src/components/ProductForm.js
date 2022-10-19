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
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ formOpen: !this.state.formOpen });
        const { name, price, description } = this.state;
        const product = { name, price, description };
        this.props.onAdd(product);
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
                <label>Name</label><input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <label>Price</label><input value={this.state.price} onChange={e => this.setState({ price: e.target.value })} />
                <label>Description</label><input value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
        return this.state.formOpen ? form : button;
    }
}