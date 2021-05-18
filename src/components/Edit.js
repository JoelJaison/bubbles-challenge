import { useState } from 'react';
import { Link } from 'react-router-dom';
const Edit = ({ onSubmit, id, data }) => {

    const user = data.filter((item) => {
        return item.name === id;
    })[0];

    const [newUser, setNewUser] = useState({...user});

    const onChange = ({ target }) => {
        const {id, value} = target;
        setNewUser(prev => ({...prev, [id]: value}));
    }

    return (
        <form>
            <h1>Edit user</h1>
            <div className='label'>
                <label>Name:</label>
                <input type='text' value={newUser.name}
                className='input' onChange={onChange} id='name' />
                <br></br>
            </div>
            <div className='label'>
                <label>Username:</label>
                <input type='text' value={newUser.username}
                className='input' onChange={onChange} id='username' />
                <br></br>
            </div>
            <div className='label'>
                <label>Email:</label>
                <input type='text' value={newUser.email}
                className='input' onChange={onChange} id='email' />
                <br></br>
            </div>
            <div className='label'>
                <label>Phone:</label>
                <input type='text' value={newUser.phone}
                className='input' onChange={onChange} id='phone' />
                <br></br>
            </div>
            <Link to='/'>
                <button className='btn' onClick={() => {
                    onSubmit(newUser)}}
                >
                    Submit
                </button>
            </Link>
        </form>
    )
}

export default Edit;