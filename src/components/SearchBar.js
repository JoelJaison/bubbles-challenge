import { useState } from 'react';
const SearchBar = ({ updateData }) => {
    const [contents, setContents] = useState('');
    const onChange = ({ target }) => {
        setContents(target.value);
        updateData(target.value);
    };
    return (
        <input className='bar' value={contents} onChange={onChange}
        placeholder='Search for names, username, 
        email, phone...'></input>
    )
}

export default SearchBar;