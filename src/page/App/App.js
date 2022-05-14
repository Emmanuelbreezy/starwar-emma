
import React,{useState} from "react";
import DefaultLayout from "../../hoc/DefaultLayout";
import starwar from "../../assets/image/Star_Wars_Logo.svg.png";
import DropdownBox from "components/DropdownBox/DropdownBox";
import TableView from "components/TableView/TableView";


function App() {
   const [selectedItem, setSelectedItem] = useState(null);

   const goBackHome = () => setSelectedItem(null);

  return (
    <DefaultLayout>
       <>
       {selectedItem ? 
       (<div>
            <TableView goBackHome={goBackHome} selectedItem={selectedItem}/>
       </div>) : (
         <div className="flex items-center h-full justify-center w-100 image-container">
            <img src={starwar}  width="700" height="auto" alt="Star"/>
         </div>
       )}
       </>

       <div className="dropdown-selection ">
          <DropdownBox selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
       </div>
    </DefaultLayout>
  );
}



export default App;

