import React,{useState,useEffect} from "react";
import axios from "axios";
//import img from './Image/ZKZg.gif'
//import userEvent from "@testing-library/user-event";
//import { resolvePath } from "react-router-dom";

// const Axios = () => {
// const [count, setCount] = useState(1);
// const [Data, setData] = useState([]);
// const [newState, siGma] = useState([]);
// const [loading, setLoading] = useState(true);
// const [log,setLog] = useState(true);

// const portal="https://jsonplaceholder.typicode.com/users";

// const Pr="https://jsonplaceholder.typicode.com/todos?id="

// useEffect(()=> {axios.get(portal).then((response)=>{setData(response.data); setLoading(false);})}, [])
// axios.get(Pr+{count}).then((resop)=>{siGma(resop.data); setLog(false);})

// // useEffect(()=> {axios.get("https://jsonplaceholder.typicode.com/users?id=2").then((response)=>{setData(response.data); setLoading(false);})}, [])
// // axios.get("https://jsonplaceholder.typicode.com/todos?id=2").then((resop)=>{siGma(resop.data); setLoading(false);})

// const mess = () =>{
//     setCount(count+1);  
// }
// if (count < 6) {
//     return(    
//         <>
//             {loading == true && <div><h1>Loading......</h1></div>}
//             {/* {loading ? (<h1>Loading.....</h1>):(<div> */}
//             <p>{count}</p>        
//             <button onClick={mess}>Next</button>
//             <h1>Without UserEffect</h1><br></br>
//              {/* {newState.map((ting)=>{const {id,title} = ting; return(<div>id:{id}, title: {title}</div>)})} */}
//              <br/>
//              <h1>With UserEffect</h1><br></br>
//              {/* {Data.map((ting)=>{const {id,name} = ting; return(<div>id:{id}, title: {name}</div>)})} */}
//          {Data.map((getting) => ((<div>{`${getting.id}) Username: ${getting.username} Name: ${getting.name}`}</div>)))}
     
//         </>
//     )  
// }

// else
// {
//     return(      
//          <>
//             {log ? (<img src={img}/>):(<div>        
//             <p>{count}</p>   
//             <button onClick={mess}>Next</button>
//             <h1>Without UserEffect</h1><br></br>
//              {newState.map((ting)=>{const {id,title} = ting; return(<div>id:{id}, title: {title}</div>)})}
//              <br/>
//              {/* <h1>With UserEffect</h1><br></br>
//              {Data.map((ting)=>{const {id,name} = ting; return(<div>id:{id}, title: {name}</div>)})} */}
//          {/* {Data.map((getting) => {return(<div>{`${getting.id}) Username: ${getting.username} Name: ${getting.name}`}</div>)})} */}
//          </div>)}
//         </>
//     )
// }

// return(
    
//     <div>        
//         <button onClick={mess}>submit</button>
//         <h1>Without UserEffect</h1><br></br>
//          {newState.map((ting)=>{const {id,title} = ting; return(<div>id:{id}, title: {title}</div>)})}
//          <br/>
//          <h1>With UserEffect</h1><br></br>
//          {Data.map((ting)=>{const {id,name} = ting; return(<div>id:{id}, title: {name}</div>)})}
//      {/* {Data.map((getting) => {return(<div>{`${getting.id}) Username: ${getting.username} Name: ${getting.name}`}</div>)})} */}
//     </div>
// )
// }



const Dashboard =()=>{
    const [Data,setData] = useState([]);
    const [isError, setError] = useState();
    // const [meTa,eMessage] = useState("Hi Debbu");
    // //const [newState, siGma] = useState([])

    useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{setData(response.data); console.log(response.data)}).catch((respnse)=>setError(respnse.message))},[])
     

   // const mess = () =>{eMessage("Hello Khubs")}
    return(

        <div>
            {isError ? (<div>{`${isError}`}</div>):(<div>
            {/* 
            <p>{meTa}</p>
            <button onClick={mess}>submit</button> */}
            {/* {isError !== "" && <div>{`${isError}`}</div>} */}
            {/* {Data.map((ting)=>{const {id,title} = ting; return(<div>id:{id}, title: {title}</div>)})} */}           
            
            
            {Data.map((thing)=>(<div>{`id: ${thing.id} title: ${thing.name}`}</div>))}
            </div>)
        }  
        </div>
    )
}


// const Axios = () => {
// const [Data,setData]=useState([]);
// useEffect(async ()=>{await axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{setData(response.data)})},[])

// return(
//     <div>
//         {Data.map((pos)=>{const {id,title}=pos; return(<div>id= {id},  title={title}</div>)})}
//     </div>
// )

// }


export default Dashboard
//https://jsonplaceholder.typicode.com/users



