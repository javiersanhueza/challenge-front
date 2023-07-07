import { useState } from "react";
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { filterPostWithName } from '../redux/postSlice';

export const FilterNamePost = () => {
  const [validated, setValidated] = useState(false);
  const [inputFilter, setInputFilter] = useState('');

  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    setInputFilter(event.target.value);
  };
  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    event.preventDefault();
    dispatch(filterPostWithName(inputFilter));
    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-6">
          <Form.Group controlId="validationInput">
            <Form.Control
              type="text"
              placeholder="Filtrar por nombre"
              required
              value={inputFilter}
              onChange={handleChangeFilter}
            />
            <Form.Control.Feedback type="invalid">
              Este campo es requerido
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="col-md-6 text-end">
          <Button type="submit">Buscar</Button>
        </div>
      </div>
    </Form>
  );
}

export default FilterNamePost;
