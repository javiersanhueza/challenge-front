import { useSelector } from 'react-redux';

import PostRow from './PostRow';

export const TablePost = () => {
  const posts = useSelector((state) => state.posts.list) || [];

  console.log(posts);
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th className="text-center" scope="col">Acción</th>
        </tr>
        </thead>
        <tbody>
        {posts.map((post) => (
          <PostRow
            key={post.id}
            post={post}
          />
        ))}
        </tbody>
      </table>
    </>
  )
}

export default TablePost;
