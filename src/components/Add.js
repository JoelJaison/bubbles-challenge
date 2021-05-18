import { useState } from 'react';
import { Link } from 'react-router-dom';
const Add = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const onChangeName = ({ target }) => {
        const value = target.value;
        setName(value);
    }
    const [user, setUser] = useState('');
    const onChangeUser = ({ target }) => {
        const value = target.value;
        setUser(value);
    }

    const [email, setEmail] = useState('');
    const onChangeEmail = ({ target }) => {
        const value = target.value;
        setEmail(value);
    }

    const [number, setNumber] = useState('');
    const onChangeNumber = ({ target }) => {
        const value = target.value;
        setNumber(value);
    }

    return (
        <form>
            <h1>Add user</h1>
            <div className='label'>
                <label>Name:</label>
                <input type='text' placeholder='Enter name'
                className='input' onChange={onChangeName} />
                <br></br>
            </div>
            <div className='label'>
                <label>Username:</label>
                <input type='text' placeholder='Enter username'
                className='input' onChange={onChangeUser} />
                <br></br>
            </div>
            <div className='label'>
                <label>Email:</label>
                <input type='text' placeholder='Enter email'
                className='input' onChange={onChangeEmail} />
                <br></br>
            </div>
            <div className='label'>
                <label>Phone:</label>
                <input type='text' placeholder='Enter number'
                className='input' onChange={onChangeNumber} />
                <br></br>
            </div>
            <Link to='/'>
                <button className='btn' onClick={() => {
                    onSubmit(name, user, email, number);
                }}>
                    Submit
                </button>
            </Link>
        </form>
    )
}

export default Add;