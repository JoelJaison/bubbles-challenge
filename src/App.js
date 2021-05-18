import Heading from './components/Heading';
import Grid from './components/Grid';
import Edit from './components/Edit';
import Add from './components/Add';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  const headings = [
    'Name',
    'Username',
    'Email',
    'Phone',
    'Created Date',
    'Actions'

  ]

  const [data, setData] = useState([
    {
      name: 'test',
      username: 'test1',
      email: 'test@test.com',
      phone: 10101010,
      date: '1/1/2001'
    },
    {
      name: 'tejoel',
      username: 'joeljaison',
      email: 'test2@test2.com',
      phone: 12345,
      date: '9/14/2002'
    }
  ]);

  const [query, setQuery] = useState('');

  const deleteData = (date) => {
    const msg = "Are you sure you want to delete?";
    const result = window.confirm(msg);
    if (!result) {
      return;
    }
    setData(prev => {
      return prev.filter((entry) => {
        return entry.date !== date;
      });
    });
  };

  const matchesQuery = (task) => {
    return task.name.startsWith(query) ||
    task.username.startsWith(query) ||
    task.email.startsWith(query) ||
    String(task.phone).startsWith(query) ||
    task.date.startsWith(query);
  };


  const addUser = (name, username, email, phone) => {
    const newUser = { name, username, email, phone };
    newUser['date'] = String(Date.now());
    setData(prev => [newUser, ...prev]);
  }
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
    <Route path='/edit'
    component={Edit}
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
