import SearchBar from './SearchBar';
import Button from './Button';
const Heading = ({ title, updateData })  => {
    return (
        <div>
            <h1>{title}</h1>
            <SearchBar updateData={updateData} />
            <Button />
        </div>
    )
}

export default Heading;