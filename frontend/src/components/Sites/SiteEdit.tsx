import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classes from './SiteEdit.module.css';
import { SitesContext } from '../../contexts/SitesContext';

const SiteEdit: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const sitesContext = useContext(SitesContext);
  const siteToEdit = sitesContext.sites.find(
    (site) => site._id === params.siteId
  );

  console.log('TEST', siteToEdit);

  const [name, setName] = useState(siteToEdit?.name);
  const [description, setDescription] = useState(siteToEdit?.description);
  const [date, setDate] = useState(new Date(siteToEdit!.date));

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
      .post(`http://localhost:5000/sites/update/${params.siteId}`, site)
      .then((res) => console.log(res.data));

    navigate('/');
  };

  return (
    <section className={classes.SiteEdit}>
      <h1>Edit Site</h1>
      <form onSubmit={handleSubmitForm}>
        <div className={classes.inputGroup}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            required
            value={name}
            onChange={handleChangeName}
          ></input>
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            required
            value={description}
            onChange={handleChangeDescription}
          ></input>
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor='date'>Date</label>
          <DatePicker selected={date} onChange={handleChangeDate} id='date' />
        </div>

        <div className={classes.inputGroup}>
          <button type='submit'>Confirm Edit</button>
        </div>
      </form>
    </section>
  );
};

export default SiteEdit;
