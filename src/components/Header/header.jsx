import React from 'react'

const Header = () => {
  return (
    <>
        <header className='bg-white w-full'>
           <div className='topStrip w-full h-[50px] bg-white border-b-[1px] border-gray-250'>
            <div className='container'>
                <div className='w-full flex items-center justify-between'>
                    <p>Get up to 50% off new season styles, limited time only</p>
                </div>
            </div>
           </div>
        </header>
    </>
  )
}

export default Header