import { Link } from 'react-router-dom';
const Row = ({ rowData, onDelete }) => {
    return (
        <tr>
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
                    onDelete(rowData.id);
                }}>
                    Delete
                </u>
            </td>

        </tr>
    )
}

export default Row;