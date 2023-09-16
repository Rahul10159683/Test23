import img from './Img/Indiapost.png'
import emb from './Img/Group 4.svg'
import gt from './Img/G20.png'
import rs from './Img/right_side_logo.png'
import './style.css'

const Home = () => {
    return(
        <>
        <div style={{backgroundColor:"#Dcddde", border:"block", height:"40px", marginTop:"0%"}}>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  
</svg>9:00 AM - 6:00 PM (Except Sundays & Gazetted Holidays) 18002666868</p>
        </div>
        <div style={{display:'flex', alignItems:'center',marginTop:'0.3rem',marginBottom:'0.3rem',width:"100%"}}> 
            <img src={img} style={{height:"80px",justifyContent:"flex-start",marginLeft:'2rem'}}></img>
            <img src={emb} style={{height:"80px",marginLeft:'2rem'}}></img>
            
                <p style={{marginLeft:'28%',marginRight:"20%",textAlign:"center"}}>
                    <a style={{fontSize:'1.5rem',fontWeight:'800',width:'40rem'}}>Department of Posts (DoP)</a><br/>
                    <a>Ministry of Communicaitons</a><br/>
                    <a>Government of India</a>
                </p>
      
            <img src={gt} style={{height:"80px",marginLeft:'2rem'}}></img>
            <img src={rs} style={{height:"80px",marginLeft:'2rem'}}></img>
        </div>
        <div style={{display:'flex',gap:'3rem',backgroundColor:'#FFBC00', paddingLeft:'2rem'}}>
            <h4>Quick Link</h4>
            <h4>Send</h4>
            <h4>Shop</h4>
            <h4>Bank</h4>
            <h4>Insurance</h4>
            <h4>Business</h4>
            <h4>Help</h4>
        </div>
        </>
    )
}
export default Home