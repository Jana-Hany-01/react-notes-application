import React from "react";

const Note = ( props) => {
  return (
    <div className="flexItem">
      <p>    {props.title}</p>
      {/* <p> Note Id :{props.id}</p> */}
      
<div className="buttons">
<button onClick ={()=>props.handleDelete(props.id)}>Delete</button>
<button onClick={()=>props.handleUpdate(props.id)}>Update</button>
</div>

      
    </div>
  );
};

export default Note;
