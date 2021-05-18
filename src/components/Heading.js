import SearchBar from './SearchBar';
import Button from './Button';
import { Link } from 'react-router-dom';
const Heading = ({ title, updateData })  => {
    return (
        <div>
            <h1>{title}</h1>
            <SearchBar updateData={updateData} />
            <Link to='./add'>
                <Button />
            </Link>
        </div>
    )
}

export default Heading;