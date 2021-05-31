import React, { useState } from 'react';


const Generate = () => {
    const [amount, setAmount] = useState('');


    const onGenerate = () => {
        window.location = `/file/getFromCsv?amount=${amount}`;
        document.getElementById('amount').value = "";
    }








    return (
                <div className="row">
            <div className='col-md-4'>
                    <input type="text" id="amount" class="form-control-lg" onChange={e => setAmount(e.target.value)} placeholder="Amount" />
                </div>
               
                    <div className="col-md-4">
                        <button className="btn btn-primary btn-lg" onClick={onGenerate} >Generate</button>
                    </div>
                </div>
        
    )
}
    export default Generate;