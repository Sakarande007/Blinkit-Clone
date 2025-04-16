import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Search = () => {

    const navigate = useNavigate()
    const loction = useLocation()
    const [isSearchPage, setIsSearchPage] = useState(false)

    useEffect(()=>{
      const isSearch = location.pathname === "/search"
      setIsSearchPage(isSearch)
    },[loction])



    const redirectToSearch = ()=>{
        navigate('/search')
    }

    console.log("search",isSearchPage)

  return (
    <div className='w-full min-w-[320px] lg:min-w-[420px] h-11 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200'>
      <button className='flex justify-center items-center h-full p-3 group-focus-within:bg-primary-200 '>
        <IoSearch size={22} />
      </button>
      <div className='w-full h-full'>
        {
          !isSearchPage ? (
            // When i was not in searchbox
            <div onClick={redirectToSearch} className="w-full h-full flex items-center">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Search "milk"',
            1000,
            'Search "bread"',
            1000,
            'Search "paneer"',
            1000,
            'Search "sugar"',
            1000,
            'Search "oil"',
            1000,
            'Search "face wash"',
            1000,
            'Search "toys"',
            1000,
            'Search "gifts"',
            1000,
            'Search "eggs"',
            1000,

          ]}
          speed={50}
         // style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
          ) : (
            // When i was in searchbox
            <div className='w-full h-full'>
              <input 
                 type="text" 
                 placeholder="Dal Atta and more ...." 
                 autoFocus
                 className='w-full h-full p-3 bg-transparent outline-none' />
              </div>
          )
        }

      </div>
      
    </div>
  );
};

export default Search;
