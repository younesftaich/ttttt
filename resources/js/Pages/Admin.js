import React, { useEffect,useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import AdminMenu from './AdminMenu';
import axios from "axios";

const Admin = () => {

    const [today, setToday] = useState("0");
    const [yesterday, setYesterday] = useState("0");
    const [lastmonth, setLastMonth] = useState("0");
    const [subs, setSubs] = useState([]);
    const [page, setPage] = useState(1);
    const [maxpage, setMaxPage] = useState(1);

     //creating function to load ip address from the API
     const id2email = async (id) => {
    
    let res5 = await axios.get('/api/id2email/'+id)
    return (res5.data)
}


  const getData = async () => {
      console.log('/api/getlastsubs/'+page)
    let res1 = await axios.get('/api/yesterday')
    setYesterday(res1.data);
    let res2 = await axios.get('/api/today')
    setToday(res2.data);
    let res3 = await axios.get('/api/lastmonth')
    setLastMonth(res3.data);
    let res4 = await axios.get('/api/getlastsubs/'+page)
    setSubs(res4.data.subscriptions);
    setMaxPage(res4.data.total)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [page])


  
  const changepageno  = (e) => {
    setPage(e.target.value)
}

  
const gotopage  = () => {
    getData()
}


const deletesub = async (unique) => {
    let res1 = await axios.get('/api/deletesub/'+unique)
         alert(res1.data)

}


  function MyTr (props){
      return (
        <tr className>
            
        <td className="px-4 py-3"><span className="text-sm">
                        {props.id}</span></td>
        <td className="px-4 py-3">
            <div className="flex items-center text-sm">
        
                <div>
                    <p className="font-semibold">
                        
                        {props.package}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      User Id :   {props.email}</p>
                </div>
            </div>
        </td>
        <td className="px-4 py-3"><span className="text-sm">
                        {props.total}</span></td>
        <td className="px-4 py-3"><span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-black bg-green-100 ">
            
        {props.status}
        </span></td>
        <td className="px-4 py-3"><span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-black bg-green-100 ">
            
        {props.username}
        </span></td>
        <td className="px-4 py-3"><span className="text-sm">
            
        {props.date}
            </span></td>
        <td className="px-4 py-3">
            <div className="flex items-center space-x-4">
                <a href={ props.type == "mag" ? '/activatemag?sub='+props.unique : '/activatem3u?sub='+props.unique } className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button" aria-label="Edit">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </a>
                <a  onClick={() => deletesub(props.unique)}   className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button" aria-label="Delete">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </td>
    </tr>
      )
  }
    

    return (
    
        <div>
               <Head>
<title>Admin - FAST IPTV SHOP</title>
</Head>
       
        <div>
        <div id="root">
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
        
        <AdminMenu></AdminMenu>
    
        <div className="flex flex-col flex-1 w-full">
    
        <main className="h-full overflow-y-auto">
            <div className="container grid px-6 mx-auto">

            <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                
                Let's make some $$
            </h2>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                 
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                    <div className="p-4 flex items-center">
                        <div className="p-3 rounded-full text-green-500 dark:text-green-100 bg-green-100 dark:bg-green-500 mr-4">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
Today
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                
                                £ {today}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                    <div className="p-4 flex items-center">
                        <div className="p-3 rounded-full text-blue-500 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 mr-4">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                
                            Last Month

                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            £ {lastmonth}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white dark:bg-gray-800">
                    <div className="p-4 flex items-center">
                        <div className="p-3 rounded-full text-teal-500 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 mr-4">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                Yesterday
                            </p>
                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                
                            £ {yesterday}

                            </p>
                        </div>
                    </div>
                </div>
            </div>


 



          
            <div className="w-full overflow-hidden rounded-lg shadow-xs mb-8">
            <div className="w-full overflow-x-auto">


<div className='text-right inline-grid grid-cols-2 gap-4
'>
    <div className='space-x-2 text-right '>
        
<input value={page}
                              onChange={changepageno} class="bg-blue-400 border-4 btn-secondary p-4 border-black text-black allign-center  py-1" type='number'/> 
    </div>
    <div >
        
<button   onClick={() => gotopage()}  class="bg-primary  btn-secondary py-1">Go to Page </button>
    </div>
</div>
            
            <table className="w-full whitespace-no-wrap">
                <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <tr>
                        <td className="px-4 py-3">Id</td>
                        <td className="px-4 py-3">Client</td>
                        <td className="px-4 py-3">Amount</td>
                        <td className="px-4 py-3">Status</td>
                        <td className="px-4 py-3">Username</td>
                        <td className="px-4 py-3">Date</td>
                        <td className="px-4 py-3">Actions</td>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
              
            {
  Object.values(subs).map((sub, index) => {
    
    return (
        <MyTr email= {sub.userid} package={sub.packagename}  total={sub.packageprice}  
        status={sub.status} date={sub.placeddate} username={sub.username}  id={sub.id}  unique={sub.uniqueid}  type={sub.type}   ></MyTr>

        
    );
})
}

              
                
                </tbody>
            </table>
            </div>
            
            </div>
            </div>
        </main>
        </div></div></div>
        </div>
        </div>
          
      
    );
};

export default Admin;