import './cashitem.css'

const CashItem = ({ title, icon, value }) =>{

    

    return(
        <div className='item'>
            <div className='itemHeader'>
                <h3>{title}</h3>
                <i className={icon}></i>
            </div>
            <h3>{value}</h3>
        </div>
    )
}

export default CashItem