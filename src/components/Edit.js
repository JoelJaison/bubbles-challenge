import { useState } from 'react';
import { Link } from 'react-router-dom';
const Edit = ({ onSubmit, id, data }) => {

    const user = data.filter((item) => {
        return String(item.id) === id;
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
                <label>First Name:</label>
                <input type='text' value={newUser.first_name}
                className='input' onChange={onChange} id='first_name' />
                <br></br>
            </div>
            <div className='label'>
                <label>Last Name:</label>
                <input type='text' value={newUser.last_name}
                className='input' onChange={onChange} id='last_name' />
                <br></br>
            </div>
            <div className='label'>
                <label>Email:</label>
                <input type='text' value={newUser.email}
                className='input' onChange={onChange} id='email' />
                <br></br>
            </div>
            <div className='label'>
                <label>Avatar Link:</label>
                <input type='text' value={newUser.avatar}
                className='input' onChange={onChange} id='avatar' />
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