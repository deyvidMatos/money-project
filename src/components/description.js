import './description.css'
import Itens from './itens'

const Description = ({ itens, setItens }) => {

    const onDelete = (ID) =>{
        const newArray = itens.filter((transaction) => transaction.id !== ID)
        setItens(newArray);
        localStorage.setItem('transitions', JSON.stringify(newArray))
    }



    return (
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th className='type'>Tipo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {itens?.map((item, index) => (
                    <Itens key={index} item={item} onDelete={onDelete}/>
                ))}
               
            </tbody>
        </table>
    )
}

export default Description