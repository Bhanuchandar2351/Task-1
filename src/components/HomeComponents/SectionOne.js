import axios from 'axios';
import { useEffect, useState } from 'react';
const SectionOne = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            //console.log(res.data);
            setData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    return(
        <div>
            <table style={{border:"1px solid red"}}>
                 <tbody>
                 <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Address</th>
                </tr>
                 {data.map(d =><tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                    <td>{d.company.name}</td>
                    <td>{d.address.city}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default SectionOne;