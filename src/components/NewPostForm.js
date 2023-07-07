import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { createPost } from '../redux/postSlice';

export const NewPostForm = () => {
  const [validated, setValidated] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const dispatch = useDispatch();

  const handleChangeName = (event) => {
    setInputName(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setInputDescription(event.target.value);
  };

  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!inputName.length || !inputDescription.length) {
      setValidated(true);
      return;
    }
    event.preventDefault();
    const payload = {
      name: inputName,
      description: inputDescription
    }
    setInputName('');
    setInputDescription('');
    setValidated(false);
    dispatch(createPost(payload));
  };

  return (
    <Form noValidate validated={validated} onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-12 mb-2">
          <h6>Nuevo post</h6>
        </div>
        <div className="col-md-3">
          <Form.Group controlId="inputName">
            <Form.Control
              type="text"
              placeholder="Nombre"
              required
              value={inputName}
              onChange={handleChangeName}
            />
            <Form.Control.Feedback type="invalid">
              Este campo es requerido
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="col-md-7">
          <Form.Group controlId="inputDescription">
            <Form.Control
              type="text"
              placeholder="Descripción"
              required
              value={inputDescription}
              onChange={handleChangeDescription}
            />
            <Form.Control.Feedback type="invalid">
              Este campo es requerido
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="col-md-2 text-end">
          <Button variant="outline-primary" type="submit">
            Crear
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default NewPostForm;
