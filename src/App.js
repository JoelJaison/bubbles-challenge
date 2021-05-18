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

  const deleteData = (id) => {
    const msg = "Are you sure you want to delete?";
    const result = window.confirm(msg);
    if (!result) {
      return;
    }
    setData(prev => {
      return prev.filter((entry) => {
        return entry.id !== id;
      });
    });
  };


  const matchesQuery = (task) => {
    return task.first_name.startsWith(query) ||
    task.last_name.startsWith(query) ||
    task.email.startsWith(query) ||
    String(task.id).startsWith(query) ||
    task.avatar.startsWith(query);
  };

  const addUser = (newUser) => {
    newUser['id'] = String(Date.now());
    setData(prev => [newUser, ...prev]);
    setQuery('');
  }

  const editUser = (newUser) => {
    setData(prev => {
      return prev.map((item) => {
        return item.id === newUser.id ? newUser : item;
      })
    })
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
