import Row from './Row';
const Grid = ({ headings, data, onDelete, toRender }) => {
    return (
        <table className='grid'>
            <tbody>
            <tr className='head' align='left'>
                {headings.map((heading, index) => {
                    return <th key={index}>{heading}</th>
                })}
            </tr>
            {data.filter((entry) => {
                return toRender(entry);
            }).map(((entry, index) => {
                return <Row rowData={entry} key={index} 
                onDelete={onDelete}/>
            }))}
            </tbody>
        </table>
    )
}

export default Grid