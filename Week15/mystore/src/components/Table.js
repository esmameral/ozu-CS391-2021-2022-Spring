import ProductCard from './ProductCard';

const Table = (props) => {
    const {list, onDelete} =props;
    return <div>
        
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
                {list.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><button onClick={() => {onDelete(item.id);}}>
                                        <i>Delete</i>
                                    </button></td>                              
                                    </tr>
                            );
                        })}
            </tbody>
        </table>


    </div>
}

export default Table;