import img from '../Img/Indiapost.png'
import emb from '../Img/Group 4.svg'
import gt from '../Img/G20.png'
import rs from '../Img/Azaadi.png'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Bag = () => {
    const schedules ="http://192.168.1.49:3001/getSchedules";

// useEffect(axios.post(schedules).then((response) => {
//     console.log(response.data)    
//     }    
//   ).catch((response)=>{
//     console.log(response.message)
//   }))



   const [bag,Bagdetails] = useState('');   

   const hadlebag = (e) => {
    Bagdetails([...bag, e.target.value]);
   }
   const addingbag = () => {
    Bagdetails([...bag,{bag}])

   }

return(

    <div>
    <div className='container mx-auto'>
    <div className='h-24 grid grid-cols-7 divide-x-7 py-3'>
    <div><img src={img} className='h-20'></img></div>
       <div> <img src={emb} className='h-20'></img></div>
        
            <div className='col-span-3 text-center'>
                <a className='font-black text-2xl'>Department of Posts (DoP)</a><br/>
                <a className='font-semibold text-xl'>Ministry of Communicaitons</a><br/>
                <a className='font-light text-base'>Government of India</a>
            </div>
  
        <div><img src={gt} className='h-2/3 align-middle'></img></div>
        <div><img src={rs} className='h-20'></img></div>
    </div>
<div className="flex flex-row gap-x-20 pl-20 h-16 content-between py-4 font-bold text-center bg-[#FFBC00]">
        <div>Quick Link</div>
        <div>Send</div>
        <div>Shop</div>
        <div>Bank</div>
        <div>Insurance</div>
        <div>Business</div>
        <div>Help</div>
      </div>
    </div>
    <h1 className='text-4xl'>Bag Dispatch</h1>
    <div><label>Schedule ID: </label><select name="Sche" id="Schedule">
    <option value="1">TMO Bhagalpur</option>
    <option value="2">RMS Vijayawada</option>
    <option value="3">RMS Badweel</option>
</select></div>
    <div className='grid grid-rows-3 grid-flow-col gap-4 my-2 items-center'>
    <div><label>Bagnumber: </label><input type="text" placeholder="username" 
    className="border-2 border-lime-500 rounded-md py-2 pl-3 pr-3 shadow-sm gap-2" value={Bagdetails.bag} onChange={hadlebag} ></input>
    <button className='bg-blue-400 text-2xl font-bold h-8 max-w-full w-28' onClick={addingbag}>Add</button></div>
    
    
    <div><label>From Office: </label><input type="text" placeholder="username" 
    className="border-2 border-lime-500 rounded-md py-2 pl-3 pr-3 shadow-sm " ></input></div>
    <div><label>Dispatch to Office: </label><input type="text" placeholder="username" 
    className="border-2 border-lime-500 rounded-md py-2 pl-3 pr-3 shadow-sm " ></input></div>
    <div><label>Closed to Office: </label><input type="text" placeholder="username" 
    className="border-2 border-lime-500 rounded-md py-2 pl-3 pr-3 shadow-sm " ></input></div>
    
    <div><label>UserID: </label><input type="text" placeholder="username" 
    className="border-2 border-lime-500 rounded-md py-2 pl-3 pr-3 shadow-sm " ></input></div>
    <div><label>Set Number: </label><input type="text" placeholder="username" 
    className="border-2 border-lime-500 rounded-md py-2 pl-3 pr-3 shadow-sm " ></input></div>
    <div><label>Bag Type: </label><input type="text" placeholder="username" 
    className="border-2 border-lime-500 rounded-md py-2 pl-3 pr-3 shadow-sm " ></input></div>
    </div><br/>
    <div>
        <div className='cont1'>
            <h1>Valid bag Number</h1>
            <ul className='itm1'>
                {bag.map((items)=>(<li>{items.Bag}</li>))}
            </ul>
            </div>
    {/* <table id="me1">
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tbody></tbody>

            </table> */}


    </div>
    </div>
)

}
export default Bag
