import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classes from './SiteCreation.module.css';

const SiteCreation: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date>();

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleChangeDate = (selectedDate: any) => {
    setDate(selectedDate);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const site = {
      name: name,
      description: description,
      date: date,
    };

    axios
      .post('http://localhost:5000/sites/add', site)
      .then((res) => console.log(res.data));

    navigate('/');
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmitForm}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            required
            value={name}
            onChange={handleChangeName}
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            required
            value={description}
            onChange={handleChangeDescription}
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='date'>Date</label>
          <DatePicker selected={date} onChange={handleChangeDate} id='date' />
        </div>

        <div className='form-group'>
          <button type='submit'>Create Site</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SiteCreation;
