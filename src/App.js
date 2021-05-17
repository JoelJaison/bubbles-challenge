import Heading from './components/Heading';
import Grid from './components/Grid';
import { useState } from 'react';
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
    }
  ]);

  const deleteData = (date) => {
    setData(prev => {
      return prev.filter((entry) => {
        return entry.date !== date;
      });
    });
  };
  return (
    <div className="App">
      <Heading title='My Customers' />
      <Grid headings={headings} data={data} onDelete={deleteData} />
    </div>
  );
}

export default App;
