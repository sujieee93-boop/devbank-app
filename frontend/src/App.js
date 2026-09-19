import React, { useEffect, useState } from "react";

function App() {
  const [serverTime, setServerTime] = useState("Loading...");

  const backendUrl =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(backendUrl)
      .then((response) => response.json())
      .then((data) => setServerTime(data.time))
      .catch(() => setServerTime("Unable to contact backend"));
  }, [backendUrl]);

  return (
    <div style={{
      textAlign: "center",
      fontFamily: "Arial",
      marginTop: "150px"
    }}>
      <h1>Welcome to DevBank</h1>
      <h2>Microservices Application</h2>
      <p>Frontend: React</p>
      <p>Backend: Node.js</p>
      <h3>Hello, the time at the server is now:</h3>
      <strong>{serverTime}</strong>
    </div>
  );
}

export default App;