import React from 'react'

const Section1About = () => {
    return (
        <div className='pt-20 flex flex-col items-center justify-center mb-16'>

            {/* text section pertama */}
            <div className="first-text mb-12 flex flex-col items-center">
                <div className='h-16 w-60 md:w-80 lg:w-96 xl:96 bg-gray-400 mb-4'>

                </div>
                <div className='h-6 w-36 md:w-72 lg:w-80 xl:96 bg-gray-400'>

                </div>
            </div>

            {/* text section kedua */}
            <div className="second-text flex flex-col items-center">
                <div className='h-16 w-60 md:w-80 lg:w-96 xl:w-96 bg-gray-400 mb-4'>

                </div>
                <div className='h-6 w-36 md:w-72 lg:w-80 xl:w-96 bg-gray-400 mb-2'>

                </div>
                <div className='h-6 w-36 md:w-72 lg:w-80 xl:w-96 bg-gray-400 mb-2'>

                </div>
                <div className='h-6 w-36 md:w-72 lg:w-80 xl:w-96 bg-gray-400 mb-2'>

                </div>
            </div>
        </div>
    )
}

export default Section1About