import React from "react";

function Navinnerwrapper({ path, name }) {
  return (
    <a href={path} className="hover:underline uppercase font-semibold cursor-pointer">
      {name}
    </a>
  );
}

export default Navinnerwrapper;
