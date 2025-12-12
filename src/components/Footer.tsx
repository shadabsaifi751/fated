import React from 'react'

const Footer = () => {
    return (
        // <footer className='bg-white py-5 sm:py-[66px]'>
        //     <div className="container mx-auto px-4 flex">
        //         <span className='sm:pt-10 text-xl sm:text-[32px] leading-none'>@</span>
        //         <h3 className="lobster-font not-italic font-normal text-[54px] sm:text-[200px] sm:leading-[250px] tracking-[0.05em] text-[#4B164C]/28">fated.</h3>
        //     </div>
        // </footer>
        <footer className="text-[#4B164C] bg-white text-center py-4 text-sm">
          <div className="container mx-auto px-4">
            &copy; {new Date().getFullYear()} Fated. All rights reserved.
          </div>
        </footer>
    )
}

export default Footer