import { useState } from "react";

// import { MouseEvent } from "react";
function Listgroup() {
  let items = ["korea", "japan", "phils", "china"];
 // let selectedIndex = 0;

  //statehooks
  const [selectedIndex, setSelectedIndex] = useState(-1);
  useState('')


  //event handler
  //   const handleClick = (event:MouseEvent) => console.log(event);
  // const getMessage = () =>}{
  //     return  message = items.length === 0 ? <p>NO item found</p> : null;
  // }

  // const message = items.length === 0 ? <p>NO item found</p> : null;

  return (
    <>
      <div className="maincotainer">
        <h1>LIST</h1>
        {/* {items.length === 0 ? <p>NO item found</p> : null} */}
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
               onClick={()=>{ setSelectedIndex(index);}}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Listgroup;
