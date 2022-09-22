import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import NoteItem from "./components/NoteItem/NoteItem";
import Navigation from "./components/Navigation/Navigation";

type Data = {
  id?: number;
  title?: string;
  content?: string;
};

function App() {
  const [data, setData] = useState<Array<Data>>();
  let item;

  useEffect(() => {
    fetch("http://localhost:8080/api/notes/")
      .then((response) => response.json())
      .then((data: any) => {
        setData(data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [data, setData]);

  return (
    <div className="App">
      <>
        {/* <Sidebar /> */}
        <Navigation info={item} />
        <Form info={item} />
      </>
    </div>
  );
}

export default App;
