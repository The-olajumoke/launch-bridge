import React from "react";

function UsersInfo() {
  return (
    <div className=" h-screen bg-gray-500 border  p-3">
      <header className=" text-unpaid">Table Heading</header>
      <div className="border">
        <div className="ring">
          <button className="text-paid">All</button>
          <button className="text-overdue">Paid</button>
          <button className=" text-btnPri text-2xl">Unpaid</button>
          <button className="text-xl">Overdue</button>
        </div>
        <h4>
          Total payable amount: <span>$900.00</span> USD
        </h4>
      </div>

      <div> </div>
    </div>
  );
}
export default UsersInfo;
