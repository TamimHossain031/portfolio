import { SingleData } from "..";
import {useState} from 'react';
const SingleDataProvider =({children})=>{
    const[data,setData]=useState('About')
   
    
    return(
        <SingleData.Provider value={{data,setData}}>
            {children}
        </SingleData.Provider>
    )
}

    export {SingleDataProvider};