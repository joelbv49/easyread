import Main from "./components/Main";
import Home from "./components/Home";
import { Routes,Route, useParams } from "react-router-dom";
import Chat from "./components/Chat";
function App() {
  return (
    <>
     <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/summarize/*" element={<Main/>} >
        <Route path="chat/:id" element={<Chat key={useParams().id} />} />
      </Route>
     </Routes>
    </>
  );
}

export default App;
