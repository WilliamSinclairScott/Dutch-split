import { useState, useEffect } from "react";

interface RevenueData{
  amount: string;
  timestamp: number;
}

const useRevenueStream = () => {
  const [revenue, setRevenue] = useState<RevenueData >({amount: "0", timestamp: Date.now()});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const socket = new WebSocket("wss://my-websocket-server.com");

    socket.onopen = () => {
      console.log("Connected to server");
      socket.send(JSON.stringify({ action: 'subscribe'}))
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setRevenue(data);
      setRevenue(prevRevenue =>({
        ...prevRevenue,
        amount: prevRevenue.amount + data.amount
      }))
    };

    socket.onerror = (event) => {
      console.error("Error:", event);
      setError('Failed to connect to revenue stream');
    };

    return () => {
      socket.send(JSON.stringify({ action: 'unsubscribe'}));
      socket.close();
    };
  }, [revenue]);

  return { revenue, error };
}

export default useRevenueStream;