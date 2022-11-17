
const Itens = ({ item, onDelete }) => {
    return (
        <tr>
            <td>{item.desc}</td>
            <td>{item.amount}</td>
            <td>
                {item.expense ?
                    (<i className="bi bi-arrow-down-circle-fill"></i>)
                    : (<i className="bi bi-arrow-down-circle-fill"></i>)}
            </td>
            <td>
                <i className="bi bi-trash-fill" onClick={() => onDelete(item.id)} />
            </td>
        </tr>
    )
}

export default Itens