
const Itens = ({ item, onDelete }) => {


    return (
        <tr>
            <td>{item.desc}</td>
            <td>R$ {item.amount}</td>
            <td>
                {item.expanse ? (
                    <i className="bi bi-arrow-down-circle-fill"></i>
                ) : (
                    <i className="bi bi-arrow-up-circle-fill"></i>
                )}
            </td>
            <td>
                <i className="bi bi-trash-fill" onClick={() => onDelete(item.id)} />
            </td>
        </tr>
    )
}

export default Itens