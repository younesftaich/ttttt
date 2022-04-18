import React, { useEffect,useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import AdminMenu from './AdminMenu';
import axios from "axios";
import queryString from 'query-string'

const Admin = () => {
    const parsed = queryString.parse(location.search);
    const sub = parsed.sub;
  
    const [today, setToday] = useState("0");
    const [yesterday, setYesterday] = useState("0");
    const [lastmonth, setLastMonth] = useState("0");
    const [subs, setSubs] = useState([]);
    const [page, setPage] = useState(1);
    const [maxpage, setMaxPage] = useState(1);
    const [packagename, setpackagename] = useState("");
    const [id, setid] = useState("");
    const [mac, setmac] = useState("");

     //creating function to load ip address from the API
     const id2email = async (id) => {
    
    let res5 = await axios.get('/api/id2email/'+id)
    return (res5.data)
}


  const getData = async () => {

    let res1 = await axios.get('/api/subunique/'+sub)
    setpackagename(res1.data.packagename);
    setmac(res1.data.mac);
    setid(res1.data.id);
    
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [sub])


  
  const changepageno  = (e) => {
    setPage(e.target.value)
}

  
const gotopage  = () => {
    getData()
}


let [id4k, setid4k] = useState("");
let [username, setusername] = useState("");
let [password, setpassword] = useState("");


const changeid4k = (e) => {
    setid4k(e.target.value)
 }
 const changeuser = (e) => {
    setusername(e.target.value)
  }
  const changepass = (e) => {
    setpassword(e.target.value)
   }
const activate = async () => {
    const subdata = {
        "status" : "Active",
        "active" : "yes",
        "id4k" : id4k,
        "mac" : username,
        "portal" : password
         };
         console.log(subdata)

    let res1 = await axios.post('/activatemag/'+id, subdata)
         console.log(res1.data)

}




    return (
    
        <div>
               <Head>
<title>Activate M3u - FAST IPTV SHOP</title>
</Head>
       
        <div>
        <div id="root">
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 false">
        
        <AdminMenu></AdminMenu>
    
        <div className="flex flex-col flex-1 w-full">
    
        <main className="h-full overflow-y-auto">
            <div className="container grid px-6 mx-auto">

            <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                
                Activate M3u For Sub id : {id}
            </h2>
            <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                
                Package : {packagename}
            </h2>
            <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                
                Mac : {mac}
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


            <div className="relative">
              <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">4K Id</label>
              <input value={id4k}
                              onChange={changeid4k} name='email' type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="" />
            </div>

            <div className="relative mt-4">
              <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">4K Mac</label>
              <input value={username}
                              onChange={changeuser} name='email' type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="" />
            </div>

            <div className="relative mt-4">
              <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">4K Portal</label>
              <input value={password}
                              onChange={changepass} name='email' type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="" />
            </div>


        



            <button onClick={() => activate()} class="bg-green-600 mt-4 w-full px-4 py-4 text-white  uppercase mb-4 mx-auto">  Activate</button>
        
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