Here is an example of a CQRS architecture in JavaScript, using the MERN stack (MongoDB, Express, React, Node.js):

**MongoDB**: This will be used as the database to store and retrieve data.

**Express**: This will be used as the back-end framework to handle the routing and communication with the MongoDB database.

**React**: This will be used as the front-end library to create the user interface and handle the interactions with the back-end.

**Node.js**: This will be used to run the back-end server and handle the communication between the front-end and back-end.

The code in this repo is for an approach for a CQRS architecture in JavaScript using the MERN stack (MongoDB, Express, React, Node.js). It includes classes for Paciente, MedicalRecord, EquipeSaude, UnityService and it's communication with the backend.

It's important to mention that this code is only a **template** and it would require further development and adjustments to be fully functional, like including the routes, services and controllers, and functionalities to the frontend.

## Backend

1- Set up a Node.js and MongoDB environment using the MERN stack.
2- Create two separate Express routes for handling commands and queries.

```javascript
// command route
app.post('/api/commands', (req, res) => {
  // execute a command to modify data in the database
});

// query route
app.get('/api/queries', (req, res) => {
  // retrieve data from the database
});
```

3- Create a MongoDB model for storing the data.

```javascript
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // data fields
});

const Data = mongoose.model('Data', dataSchema);
```

4- Implement the commands in the command route to modify the data in the database.

```javascript
app.post('/api/commands', (req, res) => {
  const data = new Data(req.body);
  data.save()
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err));
});
```

5- Implement the queries in the query route to retrieve the data from the database.

```javascript
app.get('/api/queries', (req, res) => {
  Data.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});
```

##Frontend

1- Set up a Next.js environment for building the frontend.
2- Create components for displaying the data and sending commands.
3- Use Axios to send HTTP requests to the backend routes.

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/queries')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
  );
};

const CommandForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/commands', { name })
      .then(() => setName(''))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    );
};

const CQRS = () => {
    return (
        <div>
            <DataList />
            <CommandForm />
        </div>
    );
};

export default CQRS;