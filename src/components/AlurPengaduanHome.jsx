import React from 'react'

const alurPengaduanData = [
    {
        id: 1,
        number: 1,
        explanation: "Pengisian formulir pendaftaran"
    },
    {
        id: 2,
        number: 2,
        explanation: "Verifikasi dan konfirmasi"
    },
    {
        id: 3,
        number: 3,
        explanation: "Klarifikasi dan prioritasi"
    },
    {
        id: 4,
        number: 4,
        explanation: "Penyelidikan awal"
    },
    {
        id: 5,
        number: 5,
        explanation: "Keterlibatan pihak berwajib"
    },
    {
        id: 6,
        number: 6,
        explanation: "Pendampingan korban"
    },
    {
        id: 7,
        number: 7,
        explanation: "Penyelidikan mendalam"
    },
    {
        id: 8,
        number: 8,
        explanation: "Pengaduan dan pengadilan"
    },
    {
        id: 9,
        number: 9,
        explanation: "Informasi dan transparansi laporan"
    },
    {
        id: 10,
        number: 10,
        explanation: "Evaluasi dan perbaikan"
    }
]

function AlurPengaduanHome() {

    const alurMap = alurPengaduanData.map((alur) =>

        <div className="h-40 md:h-44 flex flex-row border-solid border-2 border-gray-700 rounded-md transition-all ease-in-out delay-150" key={alur.id}>
            <div className='p-3 flex absolute'>
                <div className='w-8 h-8 bg-slate-800 flex justify-center items-center rounded-md'>
                    <p className='text-sm text-white text-center '>{alur.id}</p>
                </div>
            </div>
            <div className='w-3/4 mx-auto p-3 flex items-center justify-center'>
                <p className='text-sm md:text-base xl:text-lg text-center'>{alur.explanation}</p>
            </div>
        </div>
    )

    return (
        <div className='min-h-fit flex justify-center bg-white py-24 items-center flex-col'>
            <div className="title">
                <h1 className='py-2 px-8 text-2xl text-slate-800 font-regular mb-8'>Alur Pengaduan</h1>
            </div>

            <div className="penjelasan md:p-8 grid grid-cols-2 gap-2 w-full lg:w-3/4 xl:w-1/2 p-2 md:grid-cols-2">

                {alurMap}

            </div>
        </div>
    )
}

export default AlurPengaduanHome