import { useState } from 'react';
const SearchBar = () => {
    const [contents, setContents] = useState('');
    const onChange = ({ target }) => {
        setContents(target.value);
    };
    return (
        <input className='bar' value={contents} onChange={onChange}
        placeholder='Search for an entry'></input>
    )
}

export default SearchBar;