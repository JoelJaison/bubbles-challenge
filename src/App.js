import Heading from './components/Heading';
import Grid from './components/Grid';
import Edit from './components/Edit';
import Add from './components/Add';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  const headings = [
    'First Name',
    'Last Name',
    'Email',
    'Id',
    'Avatar',
    'Actions'
  ]

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const deleteData = async (item) => {
    const msg = "Are you sure you want to delete?";
    const result = window.confirm(msg);
    if (!result) {
      return;
    }
    setData(prev => {
      return prev.filter((entry) => {
        return entry.id !== item.id;
      });
    });
    const response = await makeRequest('DELETE', item);
    console.log(response);
  };


  const matchesQuery = (task) => {
    return task.first_name.startsWith(query) ||
    task.last_name.startsWith(query) ||
    task.email.startsWith(query) ||
    String(task.id).startsWith(query); 
  };

  const addUser = async (newUser) => {
    newUser['id'] = data[data.length - 1].id + 1; 
    setData(prev => [...prev, newUser]);
    setQuery('');
    const result = await makeRequest('POST', newUser);
    console.log(result);
  }

  const makeRequest = async (action, data) => {
    const response = await fetch('https://reqres.in/api/users', {
      method: action,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const end = action === 'DELETE' ? {} : await response.json();
    return end;
  }

  const editUser = async (newUser) => {
    setData(prev => {
      return prev.map((item) => {
        return item.id === newUser.id ? newUser : item;
      })
    });
    const result = await makeRequest('PUT', newUser);
    console.log(result);
  };

  const fetchData = async () => {
    const result = await fetch('https://reqres.in/api/users');
    const newResult = await result.json();
    setData(newResult.data);
  }

  useEffect(() => {
    fetchData();
  }, []) 

  return (
    <Router>
      <Route path="/" exact
      render={() => (
        <Heading title='My Customers' 
        updateData={(txt) => setQuery(txt)} />
      )}
      />
     <Route path='/' exact 
      render={() => (
      <Grid headings={headings} data={data} 
      onDelete={deleteData} toRender={matchesQuery} />
      )}
    />
    <Route path='/edit/:id' render={({ match }) => 
    <Edit onSubmit={editUser} id={match.params.id} data={data} />}
    />
    <Route path='/add'
    render={() => (
      <Add onSubmit={addUser} />
    )}
    />
    </Router>
  );
}

export default App;
