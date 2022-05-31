import {useState} from 'react';
import './Table.css'
function Table(props){
    // const[getTable,setTable]=useState({
    //     fullName:"vk",
    //     age:22
    // })
   
    // setTimeout(()=>{
    //     setTable({
    //         ...getTable,
    //         fullName:"kv",
    //         age:44
    //     })
    //       alert("setime");
    // },3000)
    return(<div>
        <table className='row'>
            <tr>
                <th>FullName</th>
                <th>Age</th>
            </tr>
            <tr>
                {/* <td>{getTable.fullName}</td>
                <td>{getTable.age}</td> */}
                <td>{props.fullName}</td>
                <td>{props.age}</td>
            </tr>
        </table>
    </div>)
}
export default Table;