import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { deletePost } from '../redux/postSlice';

export const PostRow = ({
  post
}) => {
  const dispatch = useDispatch();

  const deleteElement = (idPost) => {
    dispatch(deletePost(idPost));
  }
  return (
    <>
      <tr>
        <td>{ post.name }</td>
        <td>{ post.description }</td>
        <td className="text-center">
          <Button
            className="btn-sm"
            variant="outline-danger"
            onClick={() => deleteElement(post.id)}
          >
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
}

export default PostRow;
