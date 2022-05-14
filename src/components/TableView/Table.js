import React from 'react'
import { useTable,useSortBy,usePagination } from 'react-table';

export default function Table({columnsList, setSearchItem,searchItem,dataList}) {
    const data = React.useMemo(
        () => [...dataList],[dataList]
      );
    
      const columns = React.useMemo(
        () => [...columnsList],[columnsList]
      );
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
      return (
          <div className="relative  shadow-md sm:rounded-lg">
              <div className="p-4 px-0">
                <label for="table-search" className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input value={searchItem} on type="text" id="table-search" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search for Gender" onChange={(e) => setSearchItem(e.target.value)} />
                </div>
            </div>
            <div className="h-auto table-responsive">
                <table className=" w-full text-sm text-left block text-gray-500 dark:text-gray-400 " {...getTableProps()}>

                <thead className="text-xs flex text-gray-50 w-full uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400" >
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} className="flex w-full">
                        {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                            scope="col" className="px-6 py-3 w-11/12"
                        >
                            {column.render('Header')}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody className="bg-gray-200 w-full block  items-center overflow-y-auto h-96"  
                    {...getTableBodyProps()}>
                    {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr className="border-b flex dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                            <td className="w-11/12 p-4  text-gray-900"
                                {...cell.getCellProps()}
                            
                            >
                                {cell.render('Cell')}
                            </td>
                            )
                        })}
                        </tr>
                    )
                    })}
                </tbody>
                </table>
                <div className="bg-gray-200 p-4  w-full flex items-center justify-end">
                    <ul className="list-style-none pr-96">
                        <li className="flex items-center">
                            <h5>Total No: </h5>
                            <span> {dataList.length}</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
      )
}