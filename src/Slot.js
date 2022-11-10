import React, { useEffect, useState } from "react";
function Slot(){
  const [data,setData]=useState([]);
  useEffect(()=>{
    checkdetail();

},[]);
const checkdetail=async ()=>{
    let result=await fetch("http://localhost:3000/hospital")
    result=await result.json();
    console.log(result, "result");
    setData(result);
   
}
    return(
    <div>
        <div className="container">
            <div class="row">
               <div className="col-md-12"/>
               <hr className="hr"></hr>
                   <h1 className="details">Appointment</h1>
               <hr className="hr"></hr>
               </div>
            </div>
    
         <br></br>

         <h6 className="details">Morning Slots</h6>

    <div className='row' >
     <div className="col-md-12">
     <button type="button" class="btn btn-secondary"  id="mslot" >08.00</button>
        <button type="button" class="btn btn-secondary"  id="mslot" >08.30</button>
        <button type="button" class="btn btn-secondary"  id="mslot" >09.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">09.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">10.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">10.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">11.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">11.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">12.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">12.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">13.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">13.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">14.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">14.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">15.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">15.30</button>
       
      </div>
    </div>
    <br/>
    <h6 className="details">Evening Slots</h6>
    <div className='row' >
     <div className="col-md-12">
     <button type="button" class="btn btn-secondary"  id="mslot" >16.00</button>
        <button type="button" class="btn btn-secondary"  id="mslot" >16.30</button>
        <button type="button" class="btn btn-secondary"  id="mslot" >17.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">17.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">18.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">18.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">19.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">19.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">20.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">20.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">21.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">21.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">22.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">22.30</button>
        <button type="button" class="btn btn-secondary" id="mslot">23.00</button>
        <button type="button" class="btn btn-secondary" id="mslot">23.30</button>
        
      </div>
    </div>
    
    <br/>
    <div className="row">
        <div className="col-md-4">
          <label>From</label>
          <input type="date"/>
        </div>
        <div className="col-md-4">
        <label>To</label>
          <input type="date"/>
        </div>
        <div className="col-md-4">
        <button type="button" className="btn btn-primary" onClick={checkdetail}>View</button>
        </div>
        
    </div>
    
   <div className="product-list">
                <ul>
                    <li>ID</li>
                    <li>Name</li>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Type</li>
                    <li>Channel</li>
                </ul>
                {
                  data.map((item)=>
                  <ul>
                  <li>{item.pid}</li>
                  <li>{item.patient}</li>
                  <li>{item.date}</li>
                  <li>{item.tid}</li>
                  <li>{item.atype}</li>
                  <li>{item.apponitment}</li>
                  </ul>
                  )
                }
    </div>             
            
</div>



    );
}
export default Slot;