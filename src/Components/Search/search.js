import React, { useEffect, useState } from 'react'
import './search.css'

function Search({data, setData, tempSearch, setTempSearch}) {
    console.log(data)
    const [searchInput, setSearchInput]=useState("")
    useEffect(()=>{
        if(!searchInput){
            setTempSearch(data)
        }
    },[searchInput])
    
    const search = (e)=>{
        setSearchInput(e.target.value)
        if(searchInput==""){
            setTempSearch(data)
        }
        else{
            setTempSearch(data.filter((item)=>item.Title.includes(searchInput)))
    }
        console.log(searchInput)
        console.log(data)
    }
    return (
        <div>
            <input className="find" type="search" placeholder="Search..." value={searchInput} onChange={(e)=>search(e)}/>
        </div>
    )
}

export default Search
