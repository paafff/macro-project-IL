import React from 'react'

import { useState, useEffect } from 'react'

const BiodataDashboardDisabled = () => {

    const [updateBioState, setUpdateBioState] = useState(false)

    return (
        <div className='min-h-screen pt-32 flex flex-col items-start mb-16 gap-16 p-4'>

            <p className='text-xl xl:text-4xl mx-auto w-fit font-medium pb-2.5 leading-tight font-semibold border-b-4 border-red-700 border-dashed'>Biodata</p>

            <div className='flex items-center gap-8 w-1/2 mx-auto'>
                <div className='h-32 w-32 xl:h-52 xl:w-52 border-2 border-dashed border-slate-500 flex justify-center items-center text-slate-400'>
                    <p className='font-thin text-xs'>no images</p>
                </div>
                <p className='px-8 py-2 rounded-md text-sm text-red-700 border border-red-700 font-medium hover:text-[#f7f7f7] hover:bg-red-700 hover:cursor-pointer'>Unggah Foto</p>
            </div>

            <div className='flex flex-col mx-auto gap-4 justify-between w-full md:w-3/4 xl:w-1/2'>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Email</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        <input disabled
                            className="hover:cursor-not-allowed peer h-full w-full rounded-[7px] border border-gray-200   px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-500 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 "
                            placeholder=" " value="my.second.email@gmail.com"
                        />
                    </div>

                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Nama Lengkap</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        <input disabled
                            className=" hover:cursor-not-allowed peer h-full w-full rounded-[7px] border border-gray-200    px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0"
                            placeholder=" " value="Dr. Radjiman Widjodiningrat"
                        />
                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Kata Sandi</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        <input disabled
                            className="hover:cursor-not-allowed  peer h-full w-full rounded-[7px] border border-gray-200    px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0"
                            placeholder=" " value="********"
                        />
                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>KTP</p>
                    <div className='w-96 h-64 bg-gray-500 transition duration-200 ease-in-out border-2 border-dashed hover:bg-gray-400 hover:cursor-pointer'>

                    </div>
                    {/* <div className="flex items-center justify-center w-3/4">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#1A1A1A] border-dashed rounded-lg cursor-pointer bg-[#F7F7F7] ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> */}

                    {/* <div className="w-3/4">
                        <div className="">
                            <input disabled
                                type="file"
                                multiple
                                // value={dataLaporan.identitasKorban} 
                                // onChange={(e) => 
                                //   setDataLaporan({ 
                                //     ...dataLaporan, 
                                //     identitasKorban: e.target.value, 
                                //   }) 
                                // } 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2  "
                                id="my-file"
                                name="file"
                                accept="image/*"
                            // required 
                            />
                            <p className="py-2 text-sm text-gray-600">
                                Mendukung file:
                                <b> .jpg, .png, .jpeg</b>
                            </p>
                            <p className="text-sm text-gray-600">
                                <b>Ukuran maksimal file: 10MB</b>
                            </p>
                        </div>
                    </div> */}

                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>NIK</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        <input disabled
                            className="hover:cursor-not-allowed  peer h-full w-full rounded-[7px] border border-gray-200    px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0"
                            placeholder=" " value="123123456456"
                        />
                    </div>
                </div>

                <div className='flex w-full items-center'>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Jenis Kelamin</p>
                    <div className="flex gap-10">

                        <div className="inline-flex items-center">
                            <label
                                className="relative flex cursor-pointer items-center rounded-full p-3"

                                data-ripple-dark="true"
                            >
                                <input checked disabled
                                    id="html"
                                    name="type"
                                    type="radio"
                                    className="hover:cursor-not-allowed before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                />
                                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                    >
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                    </svg>
                                </div>
                            </label>
                            <label
                                className="mt-px cursor-pointer select-none font-light text-gray-700"
                                for="html"
                            >
                                Pria
                            </label>
                        </div>

                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>No HP</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        <input disabled
                            className="hover:cursor-not-allowed peer h-full w-full rounded-[7px] border border-gray-200  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0"
                            placeholder=" " value="034171730328"
                        />
                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Provinsi</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        <select disabled className="hover:cursor-not-allowed peer h-full w-full rounded-[7px] border border-gray-200 pl-2">
                            <option value="" selected>Jawa Timur</option>
                        </select>
                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Kota / Kabupaten</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        <select disabled className="hover:cursor-not-allowed peer h-full w-full rounded-[7px] border border-gray-200 pl-2 ">
                            <option value="" selected>Kota Malang</option>

                        </select>
                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Kecamatan</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        <select disabled className="hover:cursor-not-allowed peer h-full w-full rounded-[7px] border border-gray-200 pl-2 ">
                            <option value="" selected>Kedungkandang</option>
                        </select>
                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Kelurahan</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        <select disabled className="hover:cursor-not-allowed peer h-full w-full rounded-[7px] border border-gray-200 pl-2 ">
                            <option value="" selected>Lesanpuro</option>
                        </select>
                    </div>
                </div>

                <div className='flex w-full items-center justify-start'>
                    <div className='w-1/4'>

                    </div>
                    <div className='flex w-3/4'>
                        <div className=''>
                            <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>RT</p>
                            <div className="relative h-10 w-1/2">
                                <input disabled
                                    className="hover:cursor-not-allowed peer h-full w-full rounded-[7px] border border-gray-200    px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0"
                                    placeholder=" " value="09"
                                />
                            </div>
                        </div>
                        <div>
                            <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>RW</p>
                            <div className="relative h-10 w-1/2">
                                <input disabled
                                    className="hover:cursor-not-allowed peer h-full w-full rounded-[7px] border border-gray-200    px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0"
                                    placeholder=" " value="01"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <p className='w-full mx-auto transition duration-200 ease-in-out text-center py-2 rounded-md bg-gray-500 hover:bg-gray-600 hover:cursor-pointer text-[#F7F7F7] md:w-3/4 lg:w-1/2'>Simpan Perubahan</p>
        </div>
    )
}

export default BiodataDashboardDisabled