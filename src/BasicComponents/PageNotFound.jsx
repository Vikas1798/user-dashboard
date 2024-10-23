// import React, { memo } from 'react'
// import { useNavigate } from 'react-router-dom'

// const PageNotFound = () => {
//     const navigate = useNavigate();
//     return (
//         <section className='flex flex-col items-center justify-center my-20 text-center h-[200px] md:h-[500px] animate-fade'>
//             <h1 className='text-2xl md:text-4xl font-bold text-primary  dark:text-[#FFF]'>404</h1>
//             <h6 className='text-xl md:text-2xl font-bold  text-primary dark:text-[#FFFFFF66]'>Sorry, the page was not found</h6>
//             <p className='text-sm font-normal text-primary dark:text-[#FFFFFF66]'>The link you followed has probably broken or the page has been removed.</p>
//             <button onClick={() => navigate('/')} className='rounded-full bg-[#fe7678] text-[#FFF] px-10 py-1 my-5 shadow-lg text-sm transition-transform hover:scale-105 duration-500 ease-in-out' >Home</button>
//         </section>
//     )
// }

// export default memo(PageNotFound);

import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    let images = {
        instagramImage: 'https://globalgarnerdev.s3.ap-south-1.amazonaws.com/images/mega-brand/banners/ehG4biemjfpPu8dN2Y7RamjG9gQmXxd7zJ0k3THw.jpg',
        facebookImage: 'https://globalgarnerdev.s3.ap-south-1.amazonaws.com/images/mega-brand/banners/XD4fgaox3tRL6BlUcjW4zKvF61HbaERFyo4JZhvN.jpg'
    }

    return (
        <section className='w-full lg:w-[60%] mx-auto grid grid-cols-2 gap-5 group'>
            <figure className='group-hover:blur-sm hover:!blur-none transform overflow-hidden duration-500 hover:scale-125 hover:z-10'>
                <img src={images.instagramImage} alt="" className='w-full h-full object-contain rounded-xl ' />
            </figure>
            <figure className='group-hover:blur-sm hover:!blur-none transform overflow-hidden duration-500 hover:scale-125 hover:z-10'>
                <img src={images.facebookImage} alt="" className='w-full h-full object-contain rounded-xl' />
            </figure>
        </section>
    )
}

export default memo(PageNotFound);