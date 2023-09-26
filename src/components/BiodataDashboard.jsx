import React from 'react'

const BiodataDashboard = () => {
    return (
        <div className='w-full lg:w-3/4 bg-slate-600 mt-4 lg:my-auto lg:ml-4 lg:h-full rounded-md p-4 md:p-8'>
            <div className="title flex justify-center">
                <p className='text-xl lg:text-2xl font-regular text-slate-200 flex mb-8 px-4 py-2 rounded-md'>Biodata</p>
            </div>
            <div className='mb-4 lg:flex'>
                <div className='w-1/2 lg:w-1/4 xl:mx-2 lg:mx-2 xl:w-1/4 h-4 lg:mx-2 bg-slate-200 mb-4'>

                </div>
                <div className='w-full lg:w-3/4 xl:mx-2 h-4 lg:mx-2 bg-slate-200'>

                </div>
            </div>
            <div className='mb-4 lg:flex'>
                <div className='w-1/2 lg:w-1/4 xl:mx-2 xl:w-1/4 h-4 lg:mx-2 bg-slate-200 mb-4'>

                </div>
                <div className='w-full lg:w-3/4 xl:mx-2 h-4 lg:mx-2 bg-slate-200'>

                </div>
            </div>
            <div className='mb-4 lg:flex'>
                <div className='w-1/2 lg:w-1/4 xl:mx-2 xl:w-1/4 h-4 lg:mx-2 bg-slate-200 mb-4'>

                </div>
                <div className='w-full lg:w-3/4 xl:mx-2 h-4 lg:mx-2 bg-slate-200'>

                </div>
            </div>
            <div className='mb-4 lg:flex'>
                <div className='w-1/2 lg:w-1/4 xl:mx-2 xl:w-1/4 h-4 lg:mx-2 bg-slate-200 mb-4'>

                </div>
                <div className='w-full lg:w-3/4 xl:mx-2 h-4 lg:mx-2 bg-slate-200'>

                </div>
            </div>
            <div className="button flex justify-end">
                <button className='mx-2 bg-slate-200 rounded-md hover:bg-slate-300 py-2 px-4 font-medium'>
                    Button A
                </button>
                <button className='mx-2 bg-slate-200 rounded-md hover:bg-slate-300 py-2 px-4 font-medium'>
                    Button B
                </button>
            </div>
        </div>
    )
}

export default BiodataDashboard