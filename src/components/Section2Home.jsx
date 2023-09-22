import React from 'react'
import ImageSection2 from '../assets/img/undraw_family_vg76-removebg-preview.png'

function Section2Home() {
    return (
        <div className='min-h-fit flex flex-col pb-32 lg:flex lg:flex-row xl:pl-32 xl:pr-32 '>
            <div className='mx-auto lg:w-1/2 '>
                <img className='w-72 mx-auto lg:w-[300px] xl:w-[500px]' src={ImageSection2} alt="" />
            </div>
            <div className='p-5 mt-8 md:p-10 md:mt-0 lg:w-1/2 '>
                <h1 className='text-3xl font-medium xl:text-4xl text-gray-800'>Bapak Karpoli Berkata!</h1>
                <p className='mt-5 text-xl xl:text-2xl text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel beatae laudantium sunt alias non fuga odio dolorem, accusamus dolores in repellat! Eveniet facilis cum dolores culpa voluptate, architecto accusamus qui?</p>
            </div>
        </div>
    )
}

export default Section2Home