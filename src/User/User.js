import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import classes from './User.module.css';
import useData from '../Hook/useData';
import Info from '../fake-database/db.json'
import photo from '../fake-database/asset/my-photo.JPG' // relative path to image 

const UserInfo = () => {
  const {data:User,updateData:updaateInfo } = useData(Info.Users);
  const [image, setImage] = useState(photo);
  const [fname, setFname] = useState(User[0]['f-name']);
  const [lname, setLname] = useState(User[0]['L-name']);
  const [age, setAge] = useState(User[0].Age);
  const navigate = useNavigate()

  const handelSubmit = (e) => {
    e.preventDefault()
    const userinfo = [User];
    userinfo[0].photo = image;
    userinfo[0]['f-name'] = fname;
    userinfo[0]['L-name'] = lname;
    userinfo[0].Age = age;
    updaateInfo(userinfo[0])
    navigate('/home')
  }

  const handleFileChange = e => {
    e.preventDefault()
    setImage(URL.createObjectURL(e.target.files[0]));
  };


  return (
    <div className={classes.user_box}>
      {image && <img className={classes.user_photo} src={image} />}
      <label for="input_file" className={classes.input_file}>Select Image</label>
      <input id='input_file' type="file" title='kook' onChange={handleFileChange} />

      <h2>User Info</h2>
      <form className={classes.user_form} onSubmit={handelSubmit}>
        <label for='fname'>First Name:</label>
        <input
          id='fname'
          type="text"
          required
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <label for='lanme'>Last Name:</label>
        <input
          id='lanme'
          required
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        ></input>
        <label for='age'>Age:</label>
        <input
          id='age'
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>

        <button>change Info</button>
      </form>
    </div>
  );
};

export default UserInfo;
