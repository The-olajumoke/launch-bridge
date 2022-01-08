import React from "react";
 function ItemLayout(){
     return (
       <div className="">
         <input type="checkbox" />

         <div>
           <h4>Justin Septimus</h4>
           <h5>example@email.com</h5>
         </div>
         <div>
           <h4>Active</h4>
           <h5>Last login: 14/APR/2020</h5>
         </div>
         <div>
           <h4>Paid</h4>
           <h5>Paid on 15/APR/2020</h5>
         </div>
         <div>
           <h4>$200</h4>
           <h5>USD</h5>
         </div>
         <button>View More</button>
       </div>
     );
 }