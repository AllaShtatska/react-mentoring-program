import React from 'React';

const BackToSearch=({onSelectMovie})=>(
    <div>
        <button onClick={()=>onSelectMovie(null)}>Search</button> 
    </div>
);

export default BackToSearch;