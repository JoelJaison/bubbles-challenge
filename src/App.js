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
    },
    {
      name: 'tejoel',
      username: 'joeljaison',
      email: 'test2@test2.com',
      phone: 12345,
      date: '9/14/2002'
    }
  ]);

  const [data2, setData2] = useState([...data]);

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

    setData2(prev => {
      return prev.filter((entry) => {
        return entry.date !== date;
      });
    });
  };

  const updateData = (query) => {
    setData2([...data]);
    setData2(prev => {
      return prev.filter(entry => {
        return entry.name.startsWith(query) ||
          entry.username.startsWith(query) ||
          entry.email.startsWith(query) ||
          String(entry.phone).startsWith(query) ||
          entry.date.startsWith(query);
      });
    });
  };
  return (
    <div className="App">
      <Heading title='My Customers' updateData={updateData} />
      <Grid headings={headings} data={data2} onDelete={deleteData} />
    </div>
  );
}

export default App;
