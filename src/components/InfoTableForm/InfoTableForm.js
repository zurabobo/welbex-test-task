// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function InfoTableForm({ filterSubmit, onReset }) {
// 	const [ name, setName ] = useState('');
// 	const [ law, setLaw ] = useState('');
// 	const [ argument, setArgument ] = useState('');

// 	function handleNameChange(evt) {
// 		setName(evt.target.value);
// 	}
// 	function handleLawChange(evt) {
// 		setLaw(evt.target.value);
// 	}
// 	function handleArgumentChange(evt) {
// 		setArgument(evt.target.value);
// 	}

// 	function onClearFilter() {
// 		setName('');
// 		setLaw('');
// 		setArgument('');
// 		onReset();
// 	}

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		filterSubmit({ name, law, argument });
// 	}

// 	return (
// 		<form className="table-form" onSubmit={handleSubmit}>
// 			<select name="name" value={name} onChange={handleNameChange} required>
// 				<option value="">Поле...</option>
// 				<option value="name">Название</option>
// 				<option value="points">Количество</option>
// 				<option value="distance">Расстояние</option>
// 			</select>
// 			<select name="law" value={law} onChange={handleLawChange} required>
// 				<option value="">Условие...</option>
// 				<option value="equal">Равно</option>
// 				<option value="contain">Содержит</option>
// 				<option value="greater">Больше</option>
// 				<option value="less">Меньше</option>
// 			</select>
// 			<input
// 				name="argument"
// 				value={argument}
// 				onChange={handleArgumentChange}
// 				type="text"
// 				placeholder="Значение"
// 				required
// 			/>
// 			<button className="table-form__button" type="reset" onClick={onClearFilter}>
// 				Сброс
// 			</button>
// 			<button className="table-form__button" type="submit">
// 				Фильтр
// 			</button>
// 		</form>
// 	);
// }

// export default InfoTableForm;

import './InfoTableForm.css';
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useFormValidation } from '../../hooks/useFormValidation';

function InfoTableForm({ filterSubmit, onReset }) {
  // const [name, setName] = useState("");
  // const [law, setLaw] = useState("");
  // const [argument, setArgument] = useState("");

  const {
    values,
    isValid,
    handleChange,
    resetForm
  } = useFormValidation({});

  function onClearFilter() {
    resetForm();
    onReset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    filterSubmit(values);
  }

  return (
    <Form className="form d-flex align-items-center justify-content-end" onSubmit={handleSubmit}>
      <Form.Label className="mb-1">Филтр:</Form.Label>
	  <Row>
	  <Col className='p-0'>
      <Form.Group>
        <Form.Select className="m-0" size="sm" name="name" value={values.name || ''} onChange={handleChange} required>
          <option value="">Выберите колонку</option>
          <option value="name">Название</option>
          <option value="points">Количество</option>
          <option value="distance">Расстояние</option>
        </Form.Select>
      </Form.Group>
	  </Col>
	  <Col className='p-0'>
      <Form.Group>
        <Form.Select size="sm" name="law" value={values.law || ''} onChange={handleChange} required>
          <option value="">Выберите условие</option>
          <option value="equal">равно</option>
          <option value="contain">содержить</option>
          <option value="greater">больше</option>
          <option value="less">меньше</option>
        </Form.Select>
      </Form.Group>
	  </Col>
	  </Row>
	  <Row>
	  <Col className='pl-0'>
	  <Form.Group>
	  <Form.Control className='ml-5' size="sm" type="text" placeholder="Значение" name="argument" value={values.argument || ''} onChange={handleChange} required/>
      </Form.Group>
	  </Col>
	  </Row>
	  <Button size="sm" variant="primary" type="submit" disabled={!isValid}>
        Отфильтровать
      </Button>
	  <Button size="sm" variant="outline-secondary" type="reset" onClick={onClearFilter} disabled={!isValid}>
        Сброс
      </Button>
    </Form>
  );
}

export default InfoTableForm;
