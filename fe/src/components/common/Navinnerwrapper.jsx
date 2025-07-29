import React from "react";

function Navinnerwrapper({ path, name, key }) {
  return (
    <a href={path} className="hover:underline uppercase font-semibold cursor-pointer text-xl" key={key}> 
      {name}
    </a>
  );
}

export default Navinnerwrapper;
