import { useDispatch } from 'react-redux';

import { deletePostState } from '../redux/postSlice';

export const PostRow = ({
  post
}) => {
  const dispatch = useDispatch();

  const deletePost = (idPost) => {
    dispatch(deletePostState(idPost));
  }
  return (
    <tr>
      <td>{ post.name }</td>
      <td>{ post.description }</td>
      <td className="text-center">
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => deletePost(post.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default PostRow;
