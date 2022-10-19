import { useState, useEffect } from "react";
import Header from './Header';
import Table from './Table';

const FilteringTable = (props) => {
    const [filterText, setFilterText] = useState();
    const { title, onDelete } = props;
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setFilteredList(props.list);
    }, [props.list])

    let handleFilter = () => {
        setFilteredList(props.list.filter((product) => {
            if (filterText === '') {
                return true;
            }
            else {
                return product.name.toLowerCase().includes(filterText.toLowerCase()) || product.description.toLowerCase().includes(filterText.toLowerCase());
            }
        }));
    };

    return <div>
        <Header title={title}></Header>
        Search :    <input  type="text" value={filterText} 
                            onChange={(e) => {setFilterText(e.target.value)}}>
                    </input>
        <button onClick={handleFilter}>?</button>
        <Table list={filteredList} onDelete={onDelete}></Table>
    </div>
}
export default FilteringTable;

