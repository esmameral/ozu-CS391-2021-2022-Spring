import React, { Component } from 'react';
import Table from './Table.js';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
class FilteringTable extends Component {
    render() {
        const { title, list, onDelete } = this.props;
        return (
            <div>
                <Header title={title}></Header>
                <SearchBar></SearchBar>
                <Table list={list} onDelete={onDelete}></Table>

            </div>
        );
    }
}
export default FilteringTable;