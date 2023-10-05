import React from 'react'

const allData = [
    {
        id: 1,
        judul: "Laporan 1",
        status: "Pending"
    },
    {
        id: 2,
        judul: "Laporan 2",
        status: "Reject"
    },
    {
        id: 3,
        judul: "Laporan 3",
        status: "Success"
    },
    {
        id: 4,
        judul: "Laporan 4",
        status: "Pending"
    },
    {
        id: 5,
        judul: "Laporan 5",
        status: "Reject"
    },
    {
        id: 6,
        judul: "Laporan 6",
        status: "Success"
    },
]

const CardPengaduan = () => {

    const renderCard = allData.map(data => (
        <div
            className="md:aspect-[12/16] p-5 h-auto shadow-xl xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">

            <div className="flex flex-col justify-between w-full items-center gap-4">
                <div className='flex justify-between w-full'>
                    <p className='text-sm w-1/2 font-medium'>{data.judul}</p>
                    <div className='flex gap-2 items-center'>

                        <div className='h-4 w-4 rounded-full bg-[#F7C873]'>

                        </div>

                        <p className='text-sm font-thin'>{data.status}</p>
                    </div>
                </div>
                <div className='flex w-full flex-wrap'>
                    <p className='mb-2 text-sm'>Pelapor</p>
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                            class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                            placeholder=" "
                        />
                    </div>
                </div>
                <div className='flex w-full flex-wrap'>
                    <p className='mb-2 text-sm'>Korban</p>
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                            class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                            placeholder=" "
                        />
                    </div>
                </div>
                <div className='flex w-full flex-wrap'>
                    <p className='mb-2 text-sm'>Kronologi</p>
                    <div class="relative h-32 w-full min-w-[200px]">
                        <textarea
                            class="peer h-full min-h-[100px] w-full resize-none rounded-[5px] border border-blue-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className=' w-full pt-32 flex flex-col items-center'>

            <p className='my-8 text-xl xl:text-4xl inline-block w-fit mx-auto font-medium leading-tight font-semibold border-b-4 pb-2.5 border-red-700 border-dashed'>Pengaduan</p>

            <div className="min-h-screen 2xl:max-w-[60%] xl:max-w-[75%] xl:mx-auto xl:flex xl:flex-wrap grid grid-cols-1 md:grid-cols-3 gap-8 p-2 pt-20 mb-24">

                {renderCard}

            </div>
        </div>
    )
}

export default CardPengaduan