import React from 'react'

const Section1About = () => {
    return (
        <div className='min-h-screen pt-32 xl:pt-0 flex flex-col items-center justify-center mb-16'>

            {/* text section pertama */}
            <div className="first-text mb-4 flex justify-center items-center">
                <p className='text-xl xl:text-4xl font-medium pb-2.5 leading-tight font-semibold border-b-4 border-red-700 border-dashed'>Tentang Kami</p>
            </div>

            {/* text section kedua */}
            <div className="second-text flex flex-col items-center p-4 md:w-3/4 xl:w-1/2 xl:mt-12">
                <p className='text-lg xl:text-2xl font-regular text-gray-800 indent-16 text-justify xl:leading-loose'>Kami adalah Invictus, <span className='border-b-4 border-red-700 pl-2'> sebuah wadah bagi mereka yang mencari keadilan dan dukungan dalam menghadapi pelecehan seksual. </span> Misi kami adalah melindungi, mendukung, dan mencerahkan individu yang telah mengalami pengalaman yang menyakitkan ini. Kami percaya bahwa setiap orang berhak hidup bebas dari ketakutan, dan kami berkomitmen untuk membantu menciptakan lingkungan yang aman dan adil bagi semua. Sebagai komunitas dukungan yang peduli, kami berusaha untuk menghapus stigma seputar pelecehan seksual dan membangun kesadaran tentang isu-isu ini. Di Invictus, kami mendengarkan cerita Anda, kami memberikan dukungan, dan kami bertindak bersama-sama untuk menuju perubahan positif. Bergabunglah dengan kami dalam perjuangan ini, karena bersama-sama kita dapat membawa perubahan yang lebih baik.</p>
            </div>
        </div>
    )
}

export default Section1About