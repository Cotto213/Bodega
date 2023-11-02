import React,{useState,useEffect} from 'react';
import  {getAccessTokenApi, getSession} from '../../../api/auth';
import  {getMeasuresApi} from '../../../api/measure';


import ListMeasures from '../../../components/SuperAdmin/Measures/ListMeasures/ListMeasures';
import useAuth from '../../../hooks/useAuth';

export default function Measures(){
    const{user }=useAuth(); 
    
    const [measures,setMeasures]=useState([]);
    const [reloadMeasures, setReloadMeasures] = useState(false);
    const token=getAccessTokenApi();
   
    useEffect(()=>{
        getMeasuresApi(user.Company).then(response=>{
            if(response){
                setMeasures(response.measure);         
            }
        });  
        setReloadMeasures(false);
    }, [token,reloadMeasures]);



    
    return(
        <div className="row">
        <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
                    <div className="col-12">    
                            <ListMeasures 
                            measures={measures}
                            setReloadMeasures={setReloadMeasures}
                            />
                    </div>      
        </div>
        )
}