import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classes from './SiteEdit.module.css';

const SiteEdit: React.FC = () => {
  const navigate = useNavigate();
  const { siteId } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const fetchSite = useCallback(async () => {
    const response = await axios.get(`http://localhost:5000/sites/${siteId}`);

    // TODO: Causes 3 re-renders: Should I combine into a "Site" object?
    setName(response.data.name);
    setDescription(response.data.description);
    setDate(new Date(response.data.date));
  }, [siteId]);

  useEffect(() => {
    fetchSite();
  }, [fetchSite]); // DidMount

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
      .patch(`http://localhost:5000/sites/${siteId}/edit`, site)
      .then((res) => {
        //   res.data => { site: (updated info), message: Sucess / error }
        console.log(res.data);
        // TODO: Cause re-render to update new, edited info
      });

    navigate(`/sites/${siteId}`);
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
