import { useState } from 'react'
import './form.css'

const Form = ({handleAdd}) => {

    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpanse, setIsExpanse] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000)

    const handleSubmit = () =>{
        if(!desc || !amount){
            alert('informe a descrição e o valor!')
            return;
        } else if(amount < 1){
            alert('o valor tem que ser positivo!')
            return;
        }

    const transaction = {
        id:generateID(),
        desc: desc,
        amount: amount,
        expanse: isExpanse,
    };

    handleAdd(transaction);
    
    setDesc('')
    setAmount('');
    }

    return (
        <div className='form'>
            <div>
                <label htmlFor='descr' >Descrição: </label>
                <input type='textarea' id='descr' value={desc} onChange={(ev)=> setDesc(ev.target.value)} />
            </div>
            <div>
                <label htmlFor='amount' >Valor: </label>
                <input type='number' id='amount' value={amount} onChange={(ev)=> setAmount(ev.target.value)} />
            </div>
            <div>
                <label htmlFor='income' > Entrada</label>
                <input type='radio' defaultChecked name='radioForm' id='income' onChange={()=> setIsExpanse(!isExpanse)} />
                <label htmlFor='expanse' > Saida</label>
                <input type='radio' name='radioForm' value='expanse' id='expanse' onChange={()=> setIsExpanse(!isExpanse)} />
            </div>
            <button type='button' onClick={handleSubmit} >Adicionar</button>
        </div>
    )
}

export default Form