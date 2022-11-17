import { useEffect, useState } from 'react';
import './App.css';
import CashItem from './components/cashitem';
import Description from './components/description';
import Form from './components/form';
import NavBar from './components/navbar';

function App() {

  const data = localStorage.getItem('transactions');
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0)
  const [expanse, setExpanse] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() =>{
    const amountExpanse = transactionsList
      .filter((item) => item.expanse)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expanse)
      .map((transaction) => Number(transaction.amount));

      const expanse = amountExpanse.reduce((acc, cur) => acc + cur, 0).toFixed(2)
      const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

     const total = Math.abs(income - expanse).toFixed(2);
     
     setIncome(`R$ ${income}`)
     setExpanse(`R$ ${expanse}`)
     setTotal(`${Number(income) < Number(expanse) ? '-' : '' }R$ ${total}`)

  }, [transactionsList])

  const handleAdd = (transaction) =>{
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  }

  return (
    <div className="App">
      <NavBar />
      <div className='itemContainer'>
        <CashItem icon={'bi bi-arrow-up-circle-fill'} title={'Entrada'} value={income} />
        <CashItem icon={'bi bi-arrow-down-circle-fill'} title={'Saida'} value={expanse} />
        <CashItem icon={'bi bi-currency-dollar'} title={'Total'} value={total} />
      </div>
      <Form handleAdd={handleAdd}/>
      <Description itens={transactionsList} setItens={setTransactionsList} />
    </div>
  );
}

export default App;
