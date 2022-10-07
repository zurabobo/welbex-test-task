// import React from 'react';
// import './InfoTableForm.css';
// import { Button, Col, Form, Row } from "react-bootstrap";
// import { useFormValidation } from '../../hooks/useFormValidation';

// function InfoTableForm({ filterSubmit, onReset }) {
//   // const [name, setName] = useState("");
//   // const [law, setLaw] = useState("");
//   // const [argument, setArgument] = useState("");
//   // const [search, setSearch] = React.useState([]);
//   // const [isValid, setIsValid] = React.useState(false);

//   const {
//     values,
//     handleChange,
//     resetForm,
//     isValid
//   } = useFormValidation({});

//   function onClearFilter() {
//     resetForm();
//     onReset();
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     filterSubmit({values});
//   }

//   return (
//     <Form className="form d-flex align-items-center justify-content-end" onSubmit={handleSubmit}>
//       <Form.Label className="mb-1">Филтр:</Form.Label>
// 	  <Row>
// 	  <Col className='p-0'>
//       <Form.Group>
//         <Form.Select className="m-0" size="sm" name="name" value={values.name || ''} onChange={handleChange} required>
//           <option value="">Выберите колонку</option>
//           <option value="name">Название</option>
//           <option value="points">Количество</option>
//           <option value="distance">Расстояние</option>
//         </Form.Select>
//       </Form.Group>
// 	  </Col>
// 	  <Col className='p-0'>
//       <Form.Group>
//         <Form.Select size="sm" name="law" value={values.law || ''} onChange={handleChange} required>
//           <option value="">Выберите условие</option>
//           <option value="equal">равно</option>
//           <option value="contain">содержить</option>
//           <option value="greater">больше</option>
//           <option value="less">меньше</option>
//         </Form.Select>
//       </Form.Group>
// 	  </Col>
// 	  </Row>
// 	  <Row>
// 	  <Col className='pl-0'>
// 	  <Form.Group>
// 	  <Form.Control className='ml-5' size="sm" id="search-text" placeholder="Значение" name="argument" value={values.argument || ''} onChange={handleChange} required/>
//       </Form.Group>
// 	  </Col>
// 	  </Row>
// 	  <Button size="sm" variant="primary" type="submit" disabled={!isValid}>
//         Отфильтровать
//       </Button>
// 	  <Button size="sm" variant="outline-secondary" type="reset" onClick={onClearFilter} disabled={!isValid}>
//         Сброс
//       </Button>
//     </Form>
//   );
// }

// export default InfoTableForm;


// import React, { useState } from 'react';
// import './InfoTableForm.css';
// import { Button, Col, Form, Row } from "react-bootstrap";
// import { useFormValidation } from "../../hooks/useFormValidation"
// function InfoTableForm({ filterSubmit, onReset }) {
//   const [ name, setName ] = useState('');
// 	const [ law, setLaw ] = useState('');
// 	const [ argument, setArgument ] = useState('');

//     const {
//     resetForm,
//     isValid
//   } = useFormValidation({});

// 	function handleNameChange(e) {
// 		setName(e.target.value);
// 	}
// 	function handleLawChange(e) {
// 		setLaw(e.target.value);
// 	}
// 	function handleArgumentChange(e) {
// 		setArgument(e.target.value);
// 	}

// 	function onClearFilter() {
// 		resetForm();
// 		onReset();
// 	}

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		filterSubmit({ name, law, argument });
// 	}

//   return (
//     <Form className="form d-flex align-items-center justify-content-end" onSubmit={handleSubmit}>
//       <Form.Label className="mb-1">Филтр:</Form.Label>
// 	  <Row>
// 	  <Col className='p-0'>
//       <Form.Group>
//         <Form.Select className="m-0" size="sm" name="name" value={name} onChange={handleNameChange} required>
//           <option value="">Выберите колонку</option>
//           <option value="name">Название</option>
//           <option value="points">Количество</option>
//           <option value="distance">Расстояние</option>
//         </Form.Select>
//       </Form.Group>
// 	  </Col>
// 	  <Col className='p-0'>
//       <Form.Group>
//         <Form.Select size="sm" name="law" value={law} onChange={handleLawChange} required>
//           <option value="">Выберите условие</option>
//           <option value="equal">равно</option>
//           <option value="contain">содержить</option>
//           <option value="greater">больше</option>
//           <option value="less">меньше</option>
//         </Form.Select>
//       </Form.Group>
// 	  </Col>
// 	  </Row>
// 	  <Row>
// 	  <Col className='pl-0'>
// 	  <Form.Group>
// 	  <Form.Control className='ml-5' size="sm" id="search-text" placeholder="Значение" name="argument" value={argument} onChange={handleArgumentChange} required/>
//       </Form.Group>
// 	  </Col>
// 	  </Row>
// 	  <Button size="sm" variant="primary" type="submit" disabled={!isValid}>
//         Отфильтровать
//       </Button>
// 	  <Button size="sm" variant="outline-secondary" type="reset" onClick={onClearFilter} >
//         Сброс
//       </Button>
//     </Form>
//   );
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
	console.log(values)
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
	  <Button size="sm" variant="outline-secondary" type="reset" onClick={onClearFilter}>
        Сброс
      </Button>
    </Form>
  );
}

export default InfoTableForm;
