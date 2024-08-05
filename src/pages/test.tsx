import React, { useState } from "react";
import LiveRevenueDisplay from "../components/LiveRevenueDisplay";


const Dashbard: React.FC = () => {
  const [showRevenue, setShowRevenue] = useState(true);

  return (
    <div className='dashboard'>
      <h1>Business Dashboard</h1>
      <button onClick={() => setShowRevenue(!showRevenue)}>
        {showRevenue ? "Hide" : "Show"} Revenue
      </button>
      {showRevenue && <LiveRevenueDisplay />}
      <div className="other-content">
        {/* other content here */}
      </div>
    </div>

  )
}

export default Dashbard;