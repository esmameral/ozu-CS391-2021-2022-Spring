import Header from './Header';
import SearchBar from './SearchBar';
import Table from './Table';
const FilteringTable = (props) => {
    const {title,list, onDelete} = props;
   

    return <div>
        <Header title={title}></Header>
        <SearchBar></SearchBar>
        <Table list={list} onDelete={onDelete}></Table>
    </div>
}

export default FilteringTable;