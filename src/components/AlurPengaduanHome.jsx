import React from 'react'

function AlurPengaduanHome() {
    return (
        <div className='min-h-fit flex justify-center items-center flex-col'>
            <div className="title">
                <h1 className='text-2xl text-gray-800 font-semibold mb-8'>Alur Pengaduan</h1>
            </div>
            <div className="penjelasan">

                <div className=" flex flex-row">
                    <div className='w-1/4 p-3 flex justify-center items-center'>
                        <div className='w-24 h-24 bg-slate-800 flex justify-center items-center rounded-md'>
                            <p className='text-4xl text-white text-center '>1</p>
                        </div>
                    </div>
                    <div className='w-3/4 p-3 flex items-center'>
                        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur fuga .</p>
                    </div>
                </div>

                <div className=" flex flex-row">
                    <div className='w-1/4 p-3 flex justify-center items-center'>
                        <div className='w-24 h-24 bg-slate-800 flex justify-center items-center rounded-md'>
                            <p className='text-4xl text-white text-center '>2</p>
                        </div>
                    </div>
                    <div className='w-3/4 p-3 flex items-center'>
                        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AlurPengaduanHome