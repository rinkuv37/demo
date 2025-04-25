import React from 'react'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <div className='headerSearch w-[450px] relative'>
            <input type='text' placeholder='Search for products...'
                className='bg-gray-200 h-[50px] w-full outline-none p-2 pl-4 rounded-md' />
            <Button className='!absolute top-[5px] right-[10px] !min-w-[40px] !w-[40px] !h-[40px] !rounded-full !text-black'><IoSearch size={20} className='text-gray-800' /></Button>
        </div>
    )
}

export default Search