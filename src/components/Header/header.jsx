import Link from 'next/link'
import React from 'react'
import Search from './search'
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import Tooltip from '@mui/material/Tooltip';
const Header = () => {
  return (
    <>
      <header className='bg-white w-full'>
        <div className='topStrip w-full py-2 bg-white border-b-[1px] border-gray-250'>
          <div className='container'>
            <div className='w-full flex items-center justify-between'>
              <p className='text-[14px] text-gray-700'>Get up to 50% off new season styles, limited time only</p>

              <ul className='flex items-center gap-2'>
                <li><Link href="/help-center" className='link'>Help Center</Link></li>
                <li><Link href="/order-tracking" className='link'>Order Tracking</Link></li>
              </ul>

            </div>
          </div>
        </div>


        <div className='header py-2'>
          <div className='container'>
            <div className='flex items-center justify-between'>
              <div className='logoBox'>
                <Link href="/">
                  <img src="/logo.jpg" alt='logo' className='w-[200px]' />
                </Link>
              </div>

              <Search />


              <div className='headerIcons flex items-center justify-end gap-3'>
                <Link href="/login" className='link !text-[16px]'>Login</Link>
                <Link href="/register" className='link !text-[16px]'>Register</Link>

                <Tooltip title="Wishlist">
                  <Link href="/wishlist"><Button className='!min-w-[37px] !w-[37px] !h-[37px] !rounded-full !bg-gray-100'><FaRegHeart size={18} className='text-gray-800' /></Button></Link>
                </Tooltip>

                <Tooltip title="Cart">
                  <Link href="/cart"><Button className='!min-w-[37px] !w-[37px] !h-[37px] !rounded-full !bg-gray-100'><BsCart size={18} className='text-gray-800' /></Button></Link>
                </Tooltip>
              </div>

            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header