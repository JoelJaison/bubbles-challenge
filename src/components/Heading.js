import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
const Heading = ({ title, updateData })  => {
    return (
        <div>
            <h1>{title}</h1>
            <SearchBar updateData={updateData} />
            <Link to='./add'>
                <button className='btn'>Add User</button>
            </Link>
        </div>
    )
}

export default Heading;