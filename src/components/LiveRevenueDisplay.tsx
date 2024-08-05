import React from "react";
import useRevenueStream from "../hooks/useRevenueStream";

const LiveRevenueDisplay: React.FC = () => {
  const { revenue, error } = useRevenueStream();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!revenue) {
    return <div>Loading...</div>;
  }

  const formattedRevenue = new Intl.NumberFormat('en-US', { // Fixed typo 'Int1' to 'Intl'
    style: 'currency',
    currency: 'USD',
  }).format(parseInt(revenue.amount));

  const formattedTime = new Date(revenue.timestamp).toLocaleTimeString('en-US');
  const [hours, minutes, seconds] = formattedTime.split(':');

  return (
    <div className='live-revenue-display'>
      <h2>Live Revenue</h2>
      <p className='revenue-amount'>{formattedRevenue}</p>
      <p className='revenue-time'>
        {hours}:{seconds} {minutes}
      </p>
    </div>
  );
};

export default LiveRevenueDisplay;