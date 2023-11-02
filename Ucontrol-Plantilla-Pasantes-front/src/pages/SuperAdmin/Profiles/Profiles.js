import React,{useState,useEffect}from 'react';


//componetes
import ProfilesList from '../../../components/SuperAdmin/Profiles/ListProfiles';
import {getProfilesApi} from '../../../api/profile';
import  {getAccessTokenApi, getRefreshTokenApi} from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';



export default function Profiles(){
    const{user }=useAuth(); 

    const [profiles,setProfiles]=useState([]);
    const [reloadProfiles, setReloadProfiles]=useState(false);
    const token=getAccessTokenApi();

    useEffect(()=>{
        getProfilesApi().then(response=>{
            if(response){
                setProfiles(response.Profile);         
            }
        });  
        setReloadProfiles(false);
    }, [token,reloadProfiles]);

    console.log(profiles);
    return(

       <div className="row">
         <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
         <div className="col-12">    
                   <ProfilesList     
                    profiles={profiles}
                    setReloadProfiles={setReloadProfiles}
                   >                     
                   </ProfilesList>
             </div>      
      </div>
    )
}