import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import db from '../firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
const filter = createFilterOptions();
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    background: 'white',
    minHeight: '100vh',
    width: '100vw'
  }
}));
function AddEvents() {
  const classes = useStyles();
  var isEqual = require('lodash.isequal');
  var findIndex = require('lodash.findindex');
  const [data, setData] = useState()
  const [index, setIndex] = useState(-1)
  const [events, setEvents] = React.useState('');
  const [eventList, setEventList] = useState([]);
  const [safereq, setSafereq] = useState({})
  const [value, setValue] = React.useState(null);
  const [req, setReq] = React.useState({
          title: '',
          description: '',
          img_link: '',
          meetLink: '',
          time: '',
          date: '',
          docLink:'',
          contact1: { name: '', phno: '' },
          contact2: { name: '', phno: '' },
          started: false
  })
  useEffect(() => {
    db.collection('SurabhiEvents')
      .doc('allEvents')
      .onSnapshot((snapshot) => {
        setData(snapshot.data())
        console.log(snapshot.data())
      })
  }, [])
  useEffect(() => {

  }, [data,events])
  const handleChange2 = () => {
    setReq({ ...req, started: !req?.started });
  };
  const handleChange = (event) => {
    setEvents(event.target.value);
    console.log(event.target.value,data[event.target.value])
    setEventList(data[event.target.value])
  };
  useEffect(() => {
    //  if(events!==undefined && data?.events!==undefined) {
    // console.log(value?.title,(findIndex((data[events]!==undefined)?data[events]:[{}], function(o) { return o.title == value?.title; })))
    //}

  }, [value])
  useEffect(() => { console.log(index) }, [index])
  useEffect(() => { }, [req])
  const update = (e) => {
    console.log(req)
    if (index === -1) {
      db.collection('SurabhiEvents').doc('allEvents').update(
        {
          [events]: firebase.firestore.FieldValue.arrayUnion(
            {
              title: req.title,
              description: req.description,
              img_link: req.img_link,
              meetLink: req.meetLink,
              time: req.time,
              date: req.date,
              docLink:req.docLink,
              contact1: req.contact1,
              contact2: req.contact2,
              started: req.started
            }
          )
        }
      ).then(() => {
        console.log('Event Added!!');
        alert('Event added!!');
        setReq({
          title: '',
          description: '',
          img_link: '',
          meetLink: '',
          time: '',
          date: '',
          docLink:'',
          contact1: { name: '', phno: '' },
          contact2: { name: '', phno: '' },
          started: false
        })
        setEvents('')
        setValue('')
        setSafereq('')
      })
    }
    else {
      console.log(req)
      if(!isEqual(req,safereq))
      db.collection('SurabhiEvents').doc('allEvents').update(
        {
          [events]: firebase.firestore.FieldValue.arrayRemove(
            {
              title: safereq.title,
              description: safereq.description,
              img_link: safereq.img_link,
              meetLink: safereq.meetLink,
              time: safereq.time,
              date: safereq.date,
              docLink:safereq?.docLink,
              contact1: safereq.contact1,
              contact2: safereq.contact2,
              started: safereq.started
            }
          )
        }
      ).then(() => {
        
        db.collection('SurabhiEvents').doc('allEvents').update(
          {
            [events]: firebase.firestore.FieldValue.arrayUnion(
              {
                title: req.title,
                description: req.description,
                img_link: req.img_link,
                meetLink: req.meetLink,
                time: req.time,
                date: req.date,
                docLink:req.docLink,
                contact1: req.contact1,
                contact2: req.contact2,
                started: req.started
              }
            )
          }
        ).then(() => {
          console.log('Event Updated!!');
          alert('Event Updated!!');
          setReq({
            title: '',
            description: '',
            img_link: '',
            meetLink: '',
            time: '',
            date: '',
            docLink:'',
            contact1: { name: '', phno: '' },
            contact2: { name: '', phno: '' },
            started: false
          })
          setEvents('')
          setValue('')
          setSafereq('')

        })
     
      })
      else{
        console.log('No uodate')
      }
    }
  }
  return (
    <div className={classes.formControl} >
      <InputLabel style={{ marginTop: '10px', marginBottom: '-5px' }} >
        <h1 style={{ marginBottom: '-5px' }}>ADD or UPDATE an Event</h1></InputLabel>
      <div style={{ justifyContent: 'center', display: 'flex' }} >
        <InputLabel style={{ marginTop: '10px', marginBottom: '5px' }} >
          <h2 style={{ marginBottom: '-5px' }}>Event Category:&nbsp;&nbsp;</h2></InputLabel>
        <Select
          style={{ width: '150px', marginTop: '5px' }}
          value={events}
          onChange={handleChange}
          color='secondary'
        >
          <MenuItem value={'ArtsCrafts'}>ArtsCrafts</MenuItem>
          <MenuItem value={'DanceEvents'}>DanceEvents</MenuItem>
          <MenuItem value={'DramaThespian'}>DramaThespian</MenuItem>
          <MenuItem value={'LifestyleFashion'}>LifestyleFashion</MenuItem>
          <MenuItem value={'LitreraryEvents'}>LiteraryEvents</MenuItem>
          <MenuItem value={'MusicEvents'}>MusicEvents</MenuItem>
          <MenuItem value={'SpecialEvents'}>SpecialEvents</MenuItem>
        </Select>
      </div>
      <div style={{ justifyContent: 'center', display: 'flex', marginTop: '20px' }}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              //NewValue Addition to list
              setReq({ ...req, title: newValue.inputValue })
              setValue({
                title: -1,
              });
              setIndex(-1)
            } else {
              setValue(newValue);
              setIndex(findIndex(data[events], function (o) { return o.title == newValue?.title; }));
              setSafereq(newValue);
              setReq(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            if (params.inputValue !== '') {
              filtered.push({
                inputValue: params.inputValue,
                title: `Add "${params.inputValue}"`,
              });
            }
            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={eventList}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.title;
          }}
          renderOption={(option) => option.title}
          style={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <TextField color="secondary" {...params} label="Event Name" variant="outlined" />
          )}
        />
      </div>
      <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: '20px', width: 'inherit', placeItems: 'center' }}>
        <div >
          <TextField color="secondary" label="Title" value={req?.title} onChange={(e) => { setReq({ ...req, title: e.target.value }) }} style={{ margin: '10px' }} variant="outlined" />
          <TextField color="secondary" value={req?.description} onChange={(e) => { setReq({ ...req, description: e.target.value }) }} label="Description" style={{ margin: '10px' }} variant="outlined" />
        </div>
        <div>
          <TextField color="secondary" value={req?.meetLink} onChange={(e) => { setReq({ ...req, meetLink: e.target.value }) }} label="Meet Link" style={{ marginBottom: '20px' }} variant="outlined" />
          <Switch
            checked={req?.started}
            onChange={handleChange2}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <div >
        <TextField color="secondary" value={req?.img_link} onChange={(e) => { setReq({ ...req, img_link: e.target.value }) }} label="Image URL" style={{ margin: '10px' }} variant="outlined" />
        <TextField color="secondary" value={req?.docLink} onChange={(e) => { setReq({ ...req, docLink: e.target.value }) }} label="Doc URL" style={{ margin: '10px' }} variant="outlined" />
        </div>
        <div >
          <TextField color="secondary" value={req?.contact1?.name} onChange={(e) => { setReq({ ...req, contact1: { ...req.contact1, name: e.target.value } }) }} label="Contact-1 Name" style={{ margin: '10px' }} variant="outlined" />
          <TextField color="secondary" value={req?.contact1?.phno} onChange={(e) => { setReq({ ...req, contact1: { ...req.contact1, phno: e.target.value } }) }} label="Contact-1 Mobile Number" style={{ margin: '10px' }} variant="outlined" />
        </div>
        <div >
          <TextField color="secondary" value={req?.contact2?.name} onChange={(e) => { setReq({ ...req, contact2: { ...req.contact2, name: e.target.value } }) }} label="Contact-2 Name" style={{ margin: '10px' }} variant="outlined" />
          <TextField color="secondary" value={req?.contact2?.phno} onChange={(e) => { setReq({ ...req, contact2: { ...req.contact2, phno: e.target.value } }) }} label="Contact-2 Mobile Number" style={{ margin: '10px' }} variant="outlined" />
        </div>
        <div >
          <TextField color="secondary" value={req?.date} onChange={(e) => { setReq({ ...req, date: e.target.value }) }} label="Date" style={{ margin: '10px' }} variant="outlined" />
          <TextField color="secondary" value={req?.time} onChange={(e) => { setReq({ ...req, time: e.target.value }) }} label="Time" style={{ margin: '10px' }} variant="outlined" />
        </div>
      </div>
      <button style={{ marginTop: '25px', borderRadius: '20px', background: '#138808', height: '50px', cursor: 'pointer' }} onClick={update} disabled={false} ><h1 style={{ margin: 0 }}>Update Details</h1></button>
    </div>
  )
}

export default AddEvents
