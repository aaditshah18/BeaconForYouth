import { useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return null;
}

export default App;
