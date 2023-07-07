import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchPost } from "./redux/postSlice";
import Header from './components/Header';
import TablePost from './components/TablePost';
import FilterNamePost from './components/FilterNamePost';
import NewPostForm from './components/NewPostForm';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.posts.loading) || false;

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch])

  return (
    <div className="container mb-3">
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
      <div className="card my-3">
        <div className="card-body">
          <NewPostForm />
        </div>
      </div>
      {loading && <LoadingScreen />}
    </div>
  );
}

export default App;
