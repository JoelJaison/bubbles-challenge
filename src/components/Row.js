import { Link } from 'react-router-dom';
const Row = ({ rowData, onDelete }) => {
    return (
        <tr>
            <td>{rowData.name}</td>
            <td>{rowData.username}</td>
            <td>{rowData.email}</td>
            <td>{rowData.phone}</td>
            <td>{rowData.date}</td>
            <td>
                <Link to={`/edit/${rowData.name}`}>
                    Edit&nbsp; 
                </Link>
                <u onClick={(event) => {
                    event.preventDefault();
                    onDelete(rowData.date);
                }}>
                    Delete
                </u>
            </td>

        </tr>
    )
}

export default Row;