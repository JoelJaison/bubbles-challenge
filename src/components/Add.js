import { useState } from 'react';
import { Link } from 'react-router-dom';
const Add = ({ onSubmit }) => {
    
    const [newUser, setNewUser] = useState({});
    const onChange = ({ target }) => {
        const {id, value} = target;
        setNewUser(prev => ({...prev, [id]: value}));
    };

    return (
        <form>
            <h1>Add user</h1>
            <div className='label'>
                <label>First Name:</label>
                <input type='text' placeholder='Enter first name'
                className='input' id='first_name' onChange={onChange} />
                <br></br>
            </div>
            <div className='label'>
                <label>Last Name:</label>
                <input type='text' placeholder='Enter last name'
                className='input' id='last_name' onChange={onChange} />
                <br></br>
            </div>
            <div className='label'>
                <label>Email:</label>
                <input type='text' placeholder='Enter email'
                className='input' id='email' onChange={onChange} />
                <br></br>
            </div>
            <div className='label'>
                <label>Avatar Link:</label>
                <input type='text' placeholder='Enter Image Link'
                className='input' id='avatar' onChange={onChange} />
                <br></br>
            </div>
            <Link to='/'>
                <button className='btn' onClick={() => {
                    onSubmit(newUser);
                }}>
                    Submit
                </button>
            </Link>
        </form>
    )
}

export default Add;