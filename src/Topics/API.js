import emb from '../Img/Group 4.svg'
import gt from '../Img/G20.png'
import rs from '../Img/Azaadi.png'
import React, {useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from '../Img/Indiapost.png'
//import { Link } from 'react-router-dom';

const Url = "http://restapi.adequateshop.com";

const localhost ="https://jsonplaceholder.typicode.com/users";

export default function API() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ConfError, setCnf] = useState('');


  const [userDetails, setUserDetails] = useState(
    {
      email: '',
      password: '', 
    }
  );
  
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setUserDetails({ ...userDetails, email: e.target.value });

  };

  const handlePasswordChange = (e) => {
    setUserDetails({ ...userDetails, password: e.target.value });

  };

    useEffect(()=>{(axios.post(localhost).then((response)=>
    {setUserDetails(response.data); 
    console.log(response.data)}
  ).catch((response)=> setCnf(response.message)))},[])


  const handleSubmit = (e) => {
    e.preventDefault();
    // {(axios.post(localhost).then((response)=>
    //   {setUserDetails(response.data); 
    //     console.log(response.data); 
    //     // navigate("/dashboard")
    // }
    // ).catch((response)=> setCnf(response.message)))}

  };


  return (
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

        <form onSubmit={handleSubmit}>
                    <div className="container mx-auto w-1/2 h-80 mt-40  border-4 border-blue-500 rounded-lg">
                <div style={{textAlign:"center",alignContent:"center"}}>
            <form>
                <h1 className="bg-yellow-600 text-2xl font-bold h-8 max-w-full text-white font-mono">LOGIN PAGE</h1><br/>            
               <p>UserName:
               
                <input type="text" placeholder="username" className="border-2 border-lime-500 rounded-md py-2 pl-3 pr-3 shadow-sm " value={userDetails.email}  onChange={handleEmailChange} 
                required ></input>
                </p>
                <div><span className="error" style={{color:"red"}}>{emailError}</span></div><br/>
               <p>Password: 
              
                <input type="password" placeholder="Password" className="border-2 border-lime-500 rounded-md py-2 pl-3 pr-3 shadow-sm" value={userDetails.password} onChange={handlePasswordChange}  required></input>
                </p><div> <span className="error" style={{color:"red"}}>{passwordError}</span></div><br/>
                
                <div> 
                 
                  </div><br/>

            </form>       
            <button className="bg-blue-400 text-2xl font-bold h-8 max-w-full w-28 rounded-xl text-white font-mono shadow-lg shadow-indigo-500 md:shadow-lg md:shadow-indigo-500" type="submit">Sign in</button>            
            </div>        
    </div>
    </form>
    </div>
  );

}
