import "./App.css";
import { useState } from "react";
import Note from "./Components/Note";

function App() {
  let [noteTitle, setNoteTitle] = useState("");
  let [notesList, setNotesList] = useState([]);

  function handleAdd() {
    console.log(" the lengt of the notes list ", notesList.length);
    console.log(" the note title ", noteTitle);
    const note = {
      id: notesList.length === 0 ? 1 : notesList[notesList.length - 1].id + 1,
      title: noteTitle,
    };
    setNotesList([...notesList, note]);
    // post  the data in the backend 
  
  }// end handle submit 

  function handleDelete( id ){
    setNotesList(notesList.filter ( (note)=>{ return note.id !== id })); 
}
function handleUpdate( id){
  notesList.map((note)=>{ if (note.id===id){
   return {  ...note , title: noteTitle}
  }
return note });
}

  return (
    <div className="App">
      <div className="addNote">
        
        <input
          type="text"
          required
          id="noteTitle"
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
        />
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
        
      </div>

      {/* Rendering the To do list  */}
      <div className="notesList">
      <h1>To do List </h1>
      <div className="container">
        {notesList.map( (note)=>{ return <Note title={note.title} id ={note.id}  handleDelete={handleDelete} handleUpdate={handleUpdate} />} )}
        
      </div>
      </div>
    </div>
  );
}

export default App;
