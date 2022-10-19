
import './App.css';
import FilteringTable from './components/FilteringTable.js';
import { data } from './data.js';


function App() {
    return (
      <div className="App">
        <FilteringTable title="Today's Deals" list={data}></FilteringTable>
       
      </div>
    );
  }
export default App;
