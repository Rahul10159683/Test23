import img from '../Img/Indiapost.png'
import emb from '../Img/Group 4.svg'
import gt from '../Img/G20.png'
import rs from '../Img/Azaadi.png'
import React from 'react'
//import '../style.css'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

class Nav extends React.Component {
    state = {clicked : false};
    handleClick = () => {
        this.setState({clicked:
        !this.state.clicked})
    }
    render(){return(<>
    
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
           <div> <div onClick={this.handleClick}>{this.state.clicked ? <FiX/> : <FiMenu/>}</div></div>
        </div>
    </div>
    </>)
}
}
export default Nav