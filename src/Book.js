import { useState } from "react";
import React,{useNavigate} from 'react-router-dom'
import './Book.css';
function Book(){
  const [dname,setDname]=useState("");
  const [apponitment,setAppointment]=useState("");
  const [title,setTitle]=useState("");
  const [patient,setPatient]=useState("");
  const [pid,setPid]=useState("");
  const [tid,setTid]=useState("");
  const [date,setDate]=useState("");
  const [atype,setAtype]=useState("");
  const [reasone,setReason]=useState("");
  const [note,setNote]=useState("");
    
  const navigate=useNavigate();
    function submitdata(e)
    {
      e.preventDefault();
    }
     const collectData=async ()=>
     {
     console.log(dname,apponitment,title,patient,pid,tid,date,atype,reasone,note)
      let result= await fetch(' http://localhost:3000/hospital',{
        method:'post',
        
        headers:{
          'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({dname,apponitment,title,patient,pid,tid,date,atype,reasone,note}) 
       });
     



       result= await result.json()
       console.warn(result);
         localStorage.setItem("hospital",JSON.stringify(result));
         navigate('/slot')
     
        // localStorage.setItem("hospital",patient);
        //  navigate('/slot')

    }
    function clearData()
    {
     setDname('');
     setAppointment('');
     setTitle('');
     setPatient('');
     setPid('');
     setTid('');
     setDate('');
     setAtype('');
     setReason('');
     setNote('');


    }
    return(
        <form className="container" onSubmit={submitdata}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
               <div className='col-md-12'>
               <h6 className='details'>Details</h6>
               <select className="form-select" id="validationCustom04" value={dname} onChange={(e)=>setDname(e.target.value)}>
               <option value="">Select Doctor</option>
               <option>Dr.Kulkarni</option>
               <option>Dr.Kharat</option>
               <option>Dr.Mohan</option>
               <option>Dr.Dhamale</option>
               </select>
               </div>
            </div>
           <br/>
            <div className='row'>
               <div className='col-md-12'>
               
               <select className="form-select" id="validationCustom04" value={apponitment} onChange={(e)=>setAppointment(e.target.value)}>
               <option value="">Select Appointment Channel</option>
               <option>Walk In</option>
               <option>By App </option>
               <option>By Phone call </option>
               <option>By Email</option>
               </select>
               </div>
            </div>
            <br/>
            <div className='row'>
               <div className='col-md-12'>
               <input type="text" className="form-control" id="validationCustom01" placeholder="Appointment Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
               </div>
            </div>
        </div>
    
    
    
        <div className='col-md-6'>
        <h6 className='details'>Appointment Details</h6>
          <div className='row'>
           
           <div className='col-md-6'>
           <input type="text" className="form-control" placeholder="Patient Name" value={patient} onChange={(e)=>setPatient(e.target.value)}/>
           </div>
    
           <div className='col-md-6'>
           <input type="text" className="form-control" placeholder="Patient Id" value={pid} onChange={(e)=>setPid(e.target.value)}/>
           </div>
    
          </div>
    
          <div className='row'>
           
           <div className='col-md-8'>
             <h6 className='info'>Walk-In Appointment</h6>
           </div>
    
           <div className='col-md-4'>
           <input type="checkbox"/>
           </div>
        </div>
        
        
        
        <div className='row'>
           
           <div className='col-md-6'>
             <input type="time" className='info1' placeholder='Time' value={tid} onChange={(e)=>setTid(e.target.value)}/>
           </div>
    
           <div className='col-md-6'>
           <input type="date"value={date} onChange={(e)=>setDate(e.target.value)} />
           </div>
        </div>
        <br/>
    
        <div className='row'>
               <div className='col-md-12'>
               <input type="text" className="form-control" id="validationCustom01" placeholder="Select Apponiment Type" value={atype} onChange={(e)=>setAtype(e.target.value)}/>
               </div>
        </div>
     </div>
    </div>
    
    
    
      <h6 className='details'>Vital Informatiom</h6>
      <div className='row' >
      <input type="text" className="col-md-1"  value="BP" id='vital'/>
      <input type="text" className="col-md-1"  value="Temp" id='vital'/>
      <input type="text" className="col-md-1"  value="Height" id='vital'/>
      <input type="text" className="col-md-1"  value="Weight" id='vital'/>
      <input type="text" className="col-md-1"  value="SPO2" id='vital'/>
      <input type="text" className="col-md-1"  value="Pulse Rate" id='vital'/>
    
      </div>
    <br/>
    
    
    <div className='row'>
    <div className='col-md-6'>
    <input type="text" className="form-control" id="validationCustom01"  placeholder="Reason"value={reasone} onChange={(e)=>setReason(e.target.value)}/>
    </div>
         <div className='col-md-6'>
           <select className="form-select" id="validationCustom04" value={note} onChange={(e)=>setNote(e.target.value)}>
               <option value="">Note For Doctor</option>
               <option>Short Note</option>
               
           </select>
          </div>
    </div>
    <br/>
    <div className='row'>
      <div className='col-md-6'><button type="reset" className="btn btn-primary" id='reset' onClick={clearData}>Reset</button></div>
      <div className='col-md-6'><button type="submit" className="btn btn-primary" id='submit' onClick={collectData}>Submit</button></div>
    </div>

    </form>


    )
}
export default Book;