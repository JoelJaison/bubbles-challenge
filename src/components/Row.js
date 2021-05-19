import { Link } from 'react-router-dom';
import { useState } from 'react';
const Row = ({ rowData, onDelete }) => {
    const [background, setBackground] = useState('white');
    return (
        <tr style={{backgroundColor: background}} onMouseOver={() => 
        setBackground('lightgray')} onMouseOut={() => setBackground('white')}>
            <td>{rowData.first_name}</td>
            <td>{rowData.last_name}</td>
            <td>{rowData.email}</td>
            <td>{rowData.id}</td>
            <td><img alt='unavailable' src={rowData.avatar} /></td>
            <td>
                <Link to={`/edit/${rowData.id}`}>
                    Edit&nbsp; 
                </Link>
                <u onClick={(event) => {
                    event.preventDefault();
                    onDelete(rowData);
                }}>
                    Delete
                </u>
            </td>

        </tr>
    )
}

export default Row;