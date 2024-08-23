// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import notes from "./notes";
import CreateArea from "./components/CreateArea";

// function returnNote(noteItem) {
//     return (<Note key={noteItem.key} title = {noteItem.title} content = {noteItem.content} />)
// }

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNotes =>{
            return [...prevNotes, note];
        })
    }

    function deleteNode(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem, index) =>{
                return <Note id={index} key={index} onDelete={deleteNode} title = {noteItem.title} content = {noteItem.content} />
            })}
            <Footer />
        </div>
    )
}

export default App;