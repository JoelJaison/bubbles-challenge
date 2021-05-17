import SearchBar from './SearchBar';
import Button from './Button';
const Heading = ({ title })  => {
    return (
        <div>
            <h1>{title}</h1>
            <SearchBar />
            <Button />
        </div>
    )
}

export default Heading;