import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import img from '../img/profile.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useParams, NavLink, useNavigate } from 'react-router-dom';

const Details = () => {
  const { id } = useParams('');
  console.log(id);

  const navigate = useNavigate();

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch(`https://eduwork-tugas-be-eko-1.vercel.app/getuser/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log('error ');
    } else {
      setUserdata(data);
      console.log('get data');
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(`https://eduwork-tugas-be-eko-1.vercel.app/deleteuser/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log('error');
    } else {
      console.log('user deleted');
      navigate('/');
    }
  };

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Eko Firlianto</h1>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <NavLink to={`/edit/${getuserdata._id}`}>
              <button className="btn btn-primary mx-2">
                <CreateIcon />
              </button>
            </NavLink>
            <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}>
              <DeleteIcon />
            </button>
          </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src={img} style={{ width: 50 }} alt="" />
              <h3 className="mt-2">
                Name: <span>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Age: <span>{getuserdata.age}</span>
              </h3>
              <p className="mt-3">
                <MailOutlineIcon />
                Email: <span>{getuserdata.email}</span>
              </p>
              <p className="mt-3">
                <WorkOutlineIcon />
                Occuption: <span>{getuserdata.work}</span>
              </p>
            </div>

            <div className="right_view col-lg-6 col-md-6 col-12">
              <p className="mt-5">
                <PhoneAndroidIcon />
                Mobile: <span>{getuserdata.mobile}</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon />
                Location: <span>{getuserdata.add}</span>
              </p>
              <p className="mt-3">
                Description: <span>{getuserdata.desc}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
