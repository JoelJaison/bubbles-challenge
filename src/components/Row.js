const Row = ({ rowData, onDelete }) => {
    return (
        <tr>
            <td>{rowData.name}</td>
            <td>{rowData.username}</td>
            <td>{rowData.email}</td>
            <td>{rowData.phone}</td>
            <td>{rowData.date}</td>
            <td><a href='apple.com'>Edit</a> <a 
            onClick={(event) => {
                event.preventDefault();
                onDelete(rowData.date);
            }} href='apple.com'>Delete</a></td>

        </tr>
    )
}

export default Row;