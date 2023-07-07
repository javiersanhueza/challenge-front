import Header from './components/Header';
import TablePost from './components/TablePost';
import FilterNamePost from './components/FilterNamePost';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="card my-3">
        <div className="card-body">
          <FilterNamePost />
        </div>
      </div>
      <div className="card my-3">
        <div className="card-body">
          <TablePost />
        </div>
      </div>
    </div>
  );
}

export default App;
