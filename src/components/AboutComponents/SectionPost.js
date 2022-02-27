import { useEffect,useReducer,useState } from "react";
import axios from 'axios'

const SectionPost = () => {
    function reducer(state,action){
        switch(action.type){
            case "INCR" :
            return {count : state.count + action.value}
            case "DECR" :
            return {count : state.count - action.value}
            case "NOCHN" :
            return {count : action.value}
            default :
            return {count : count}
        }
    }
    const [data,setData] = useState(1);
    const [count,dispatch] = useReducer(reducer,{count:1})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos/'+count.count)
        .then(res => {
           // console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
           // console.log(err)
        })
    },[count])
    return(
        <>
        <div className="PostsInAbout">
            <h2 style={{marginTop:20,marginBottom:20}}>{data.title}</h2>
            <img src={data.url} alt="noFound" />
        </div>
        <div className="buttonsInAbout" style={{marginTop:20,marginBottom:20}}>
             <button onClick={ ()=>{
                dispatch({type:"DECR",value:1})
            }} > Prev  </button>
            <button onClick={ ()=>{
                dispatch({type:"NOCHN",value:1})
            }} > 1   </button>
            <button onClick={ ()=>{
                dispatch({type:"NOCHN",value:2})
            }} > 2  </button>
            <button onClick={ ()=>{
                dispatch({type:"NOCHN",value:3})
            }} > 3   </button>
            <button onClick={ ()=>{
                dispatch({type:"NOCHN",value:4})
            }} > 4   </button>
            <button onClick={ ()=>{
                dispatch({type:"NOCHN",value:5})
            }} > 5   </button>
            <button onClick={()=>{
                dispatch({type:"INCR",value:1})
            }}> Next </button>
        </div>
        </>
    );
}
export default SectionPost

//I think this is not a right way to do pagination but i tried..