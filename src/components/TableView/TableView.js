import React,{useEffect,useState} from 'react';
import Table from './Table';


export default function TableView({goBackHome,selectedItem}) {
  const [AlldataList, setAllDataList] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [isLoading, setIsLoading] = useState(true);

    
  

  useEffect(() => {
   
    if(selectedItem){
      const promises =  selectedItem.characters.map(item => fetchData(item));
      Promise.all(promises).then(results => {
        const _data = results.map(item => ({
              name:item.name,
              gender:item.gender === 'male' ? 'M' : item.gender === 'female' ? 'F': 'None',
             height:item.height
        }));
         setAllDataList(_data);
      });

       setTimeout(() => {
         setIsLoading(false);
       },2000)
     }

     if(searchItem){
      filterByGender(searchItem);
    }
  
  }, [searchItem]);


  const filterByGender = (searchItem) => {
    if(AlldataList && searchItem){

      const search = AlldataList.filter(item => {
          return item.gender.toLowerCase() === searchItem.toLowerCase();
      });
      setAllDataList(search);
    }

  }
  

    const fetchData = (url) => {
      return fetch(url)
      .then((response) => response.json())
      }


  





  const columnsList = [
    {
      Header: 'Name',
      accessor: 'name', 
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'Height',
      accessor: 'height',
    },
  ]

  // const dataList = [
    
  // ];


  return (
    <div className="w-6/12 mx-auto pt-20  h-full">
       <div className="w-auto mb-2">
         <span className="text-[#ffe919] flex item-center cursor-pointer text-sm" onClick={goBackHome}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
            </svg>
               Back Home
           </span>
           <div className="mt-3">
            {isLoading ? (
                <div className=" flex flex-col items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-7 w-7 text-[#ffe919]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  Loading...
               </div>
            ) : (
                 <Table columnsList={columnsList} dataList={AlldataList} searchItem={searchItem} setSearchItem={setSearchItem}/>
            )}
           </div>
       </div>
    </div>
  )
}
