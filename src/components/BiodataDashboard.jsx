
import React from 'react'

import { useState, useEffect } from 'react'

const BiodataDashboard = () => {

    // State tombol ubah biodata

    const [ubahBio, setUbahBio] = useState(false);
    console.log(ubahBio);

    // State Provinsi sampai Kelurahan

    const [allProvinsi, setProvinsi] = useState([])
    const [allKota, setKota] = useState([])
    const [allKecamatan, setKecamatan] = useState([])
    const [allKelurahan, setKelurahan] = useState([])

    // State Provinsi sampai Kelurahan

    // Fetch API Provinsi sampai kelurahan

    const fetchProvData = () => {
        fetch("https://api.binderbyte.com/wilayah/provinsi?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProvinsi(data.value)
            })

    }

    const fetchKotaData = (provID) => {
        fetch(`https://api.binderbyte.com/wilayah/kabupaten?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1&id_provinsi=${provID}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setKota(data.value)
            })
    }

    const fetchKecamatanData = (kotaID) => {
        fetch(`https://api.binderbyte.com/wilayah/kecamatan?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1&id_kabupaten=${kotaID}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setKecamatan(data.value)
            })
    }

    const fetchKelurahanData = (kecamatanID) => {
        fetch(`https://api.binderbyte.com/wilayah/kelurahan?api_key=7b397cea3811e3799ae20fd43ac78bcbc0dba2f5954d6fef4361e5fff3af76f1&id_kecamatan=${kecamatanID}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setKelurahan(data.value)
            })
    }

    // Fetch API Provinsi sampai kelurahan

    useEffect(() => {
        fetchProvData()
    }, [])

    // Function yg berjalan saat tag <select> onChange

    function provinsi(idProv) {
        console.log('sudah memilih provinsi' + idProv);

        fetchKotaData(idProv);
    }

    function kota(idKota) {
        console.log('sudah memilih Kota' + idKota);

        fetchKecamatanData(idKota);
    }

    function kecamatan(idKecamatan) {
        console.log('sudah memilih Kecamatan' + idKecamatan);

        fetchKelurahanData(idKecamatan);
    }

    // Function yg berjalan saat tag <select> onChange

    return (
        <div className='min-h-screen pt-32 flex flex-col items-start mb-16 gap-16 p-4'>

            <p className='text-xl xl:text-4xl mx-auto w-fit font-medium pb-2.5 leading-tight font-semibold border-b-4 border-red-700 border-dashed'>Biodata</p>

            <div className='flex items-center gap-8 mx-auto'>
                <div className='h-32 w-32 xl:h-52 xl:w-52 border-2 border-dashed border-slate-500 flex justify-center items-center text-slate-400'>
                    <p className='font-thin text-xs'>no images</p>
                </div>
                <p className='px-8 py-2 rounded-md text-sm text-red-700 border border-red-700 font-medium hover:text-[#f7f7f7] hover:bg-red-700 hover:cursor-pointer'>Unggah Foto</p>
            </div>

            <div className='flex flex-col mx-auto gap-4 justify-between w-full md:w-3/4 xl:w-1/2'>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Email</p>
                    <div class="relative h-10 w-3/4 min-w-[200px]">
                        {
                            ubahBio === false ? (
                                <input
                                    disabled
                                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder="" value="my.second.email@gmail.com"
                                />
                            ) : (
                                <input

                                    class="peer h-full w-full rounded-[7px] border border-gray-300 bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder="" value="my.second.email@gmail.com"
                                />
                            )
                        }

                    </div>

                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Nama Lengkap</p>
                    <div class="relative h-10 w-3/4 min-w-[200px]">
                        {
                            ubahBio === false ? (
                                <input
                                    disabled
                                    class="peer h-full w-full rounded-[7px] border border-gray-300  bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder=" " value="Dr. Radjiman Widjodiningrat"
                                />
                            ) : (
                                <input

                                    class="peer h-full w-full rounded-[7px] border border-gray-300  bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder=" " value="Dr. Radjiman Widjodiningrat"
                                />
                            )
                        }

                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Kata Sandi</p>
                    <div className="relative h-10 w-3/4 min-w-[200px]">
                        {
                            ubahBio === false ? (
                                <input
                                    disabled
                                    className="peer h-full w-full rounded-[7px] border border-gray-300  bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder=" " value="*********"
                                />
                            ) : (
                                <input

                                    className="peer h-full w-full rounded-[7px] border border-gray-300  bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder=" " value="*********"
                                />
                            )
                        }

                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>KTP</p>
                    {
                        ubahBio === false ? (
                            <div className='h-32 w-64 xl:h-52 xl:w-96 border-2 rounded-md border-slate-500 flex justify-center items-center text-slate-400'>
                                <p className='font-thin text-xs'>no images</p>
                            </div>
                            // <div className="flex items-center justify-center w-3/4">
                            //     <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#1A1A1A] border-dashed rounded-lg cursor-pointer bg-[#F7F7F7] ">
                            //         <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            //             <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            //             </svg>
                            //             <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            //             <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            //         </div>
                            //         <input id="dropzone-file" type="file" className="hidden" />
                            //     </label>
                            // </div>
                        ) : (
                            <div className="w-3/4">
                                <div className="">
                                    <input
                                        disabled
                                        type="file"
                                        multiple
                                        // value={dataLaporan.identitasKorban} 
                                        // onChange={(e) => 
                                        //   setDataLaporan({ 
                                        //     ...dataLaporan, 
                                        //     identitasKorban: e.target.value, 
                                        //   }) 
                                        // } 
                                        className="bg-gray-50 bg-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2  "
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
                            </div>
                        )
                    }
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>NIK</p>
                    <div class="relative h-10 w-3/4 min-w-[200px]">
                        {
                            ubahBio === false ? (
                                <input
                                    disabled
                                    class="peer h-full w-full rounded-[7px] border border-gray-300  bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder=" " value="121232343455657"
                                />
                            ) : (
                                <input

                                    class="peer h-full w-full rounded-[7px] border border-gray-300  bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder=" " value="121232343455657"
                                />
                            )
                        }

                    </div>
                </div>

                <div className='flex w-full items-center'>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Jenis Kelamin</p>

                    {
                        ubahBio === false ? (
                            <div class="flex gap-10">
                                <div class="inline-flex items-center">
                                    <label
                                        class="relative flex cursor-pointer items-center rounded-full p-3"
                                        for="html"
                                        data-ripple-dark="true"
                                    >
                                        <input
                                            checked
                                            disabled
                                            id="html"
                                            name="type"
                                            type="radio"
                                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        />
                                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-3.5 w-3.5"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                            >
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                                        for="html"
                                    >
                                        Pria
                                    </label>
                                </div>
                                <div class="inline-flex items-center">
                                    <label
                                        class="relative flex cursor-pointer items-center rounded-full p-3"
                                        for="react"
                                        data-ripple-dark="true"
                                    >
                                        <input
                                            disabled
                                            id="react"
                                            name="type"
                                            type="radio"
                                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        />
                                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-3.5 w-3.5"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                            >
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                                        for="react"
                                    >
                                        Wanita
                                    </label>
                                </div>
                            </div>
                        ) : (
                            <div class="flex gap-10">
                                <div class="inline-flex items-center">
                                    <label
                                        class="relative flex cursor-pointer items-center rounded-full p-3"
                                        for="html"
                                        data-ripple-dark="true"
                                    >
                                        <input
                                            id="html"
                                            name="type"
                                            type="radio"
                                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        />
                                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-3.5 w-3.5"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                            >
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                                        for="html"
                                    >
                                        Pria
                                    </label>
                                </div>
                                <div class="inline-flex items-center">
                                    <label
                                        class="relative flex cursor-pointer items-center rounded-full p-3"
                                        for="react"
                                        data-ripple-dark="true"
                                    >
                                        <input

                                            id="react"
                                            name="type"
                                            type="radio"
                                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        />
                                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-3.5 w-3.5"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                            >
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                                        for="react"
                                    >
                                        Wanita
                                    </label>
                                </div>
                            </div>
                        )
                    }

                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>No HP</p>
                    <div class="relative h-10 w-3/4 min-w-[200px]">
                        {
                            ubahBio === false ? (
                                <input
                                    disabled
                                    class="peer h-full w-full rounded-[7px] border border-gray-300  bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder=" " value="034171730328"
                                />
                            ) : (
                                <input

                                    class="peer h-full w-full rounded-[7px] border border-gray-300  bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                    placeholder=" " value="034171730328"
                                />
                            )
                        }

                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Provinsi</p>
                    <div class="relative h-10 w-3/4 min-w-[200px]">
                        {
                            ubahBio === false ? (
                                <select disabled onChange={(e) => provinsi(e.target.value)} class="peer h-full w-full rounded-[7px] border border-gray-300 pl-2">
                                    <option value="" selected>Pilih Provinsi</option>
                                    {allProvinsi.map(prov => (
                                        <option key={prov.id} value={prov.id}>{prov.name}</option>
                                    ))}
                                </select>
                            ) : (
                                <select onChange={(e) => provinsi(e.target.value)} class="peer h-full w-full rounded-[7px] border border-gray-300 pl-2">
                                    <option value="" selected>Pilih Provinsi</option>
                                    {allProvinsi.map(prov => (
                                        <option key={prov.id} value={prov.id}>{prov.name}</option>
                                    ))}
                                </select>
                            )
                        }

                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Kota / Kabupaten</p>
                    <div class="relative h-10 w-3/4 min-w-[200px]">
                        {
                            ubahBio === false ? (
                                <select disabled onChange={(e) => kota(e.target.value)} class="peer h-full w-full rounded-[7px] border border-gray-300 pl-2 ">
                                    <option value="" selected>Pilih Kota / Kabupaten</option>
                                    {allKota.map(kota => (
                                        <option key={kota.id} value={kota.id}>{kota.name}</option>
                                    ))}
                                </select>
                            ) : (
                                <select onChange={(e) => kota(e.target.value)} class="peer h-full w-full rounded-[7px] border border-gray-300 pl-2 ">
                                    <option value="" selected>Pilih Kota / Kabupaten</option>
                                    {allKota.map(kota => (
                                        <option key={kota.id} value={kota.id}>{kota.name}</option>
                                    ))}
                                </select>
                            )
                        }

                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Kecamatan</p>
                    <div class="relative h-10 w-3/4 min-w-[200px]">
                        {
                            ubahBio === false ? (
                                <select disabled onChange={(e) => kecamatan(e.target.value)} class="peer h-full w-full rounded-[7px] border border-gray-300 pl-2 ">
                                    <option value="" selected>Pilih Kecamatan</option>
                                    {allKecamatan.map(kecamatan => (
                                        <option key={kecamatan.id} value={kecamatan.id}>{kecamatan.name}</option>
                                    ))}
                                </select>
                            ) : (
                                <select onChange={(e) => kecamatan(e.target.value)} class="peer h-full w-full rounded-[7px] border border-gray-300 pl-2 ">
                                    <option value="" selected>Pilih Kecamatan</option>
                                    {allKecamatan.map(kecamatan => (
                                        <option key={kecamatan.id} value={kecamatan.id}>{kecamatan.name}</option>
                                    ))}
                                </select>
                            )
                        }

                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>Kelurahan</p>
                    <div class="relative h-10 w-3/4 min-w-[200px]">
                        {
                            ubahBio === false ? (
                                <select disabled class="peer h-full w-full rounded-[7px] border border-gray-300 pl-2 ">
                                    <option value="" selected>Pilih Kelurahan</option>
                                    {allKelurahan.map(kelurahan => (
                                        <option key={kelurahan.id} value={kelurahan.id}>{kelurahan.name}</option>
                                    ))}
                                </select>
                            ) : (
                                <select class="peer h-full w-full rounded-[7px] border border-gray-300 pl-2 ">
                                    <option value="" selected>Pilih Kelurahan</option>
                                    {allKelurahan.map(kelurahan => (
                                        <option key={kelurahan.id} value={kelurahan.id}>{kelurahan.name}</option>
                                    ))}
                                </select>
                            )
                        }

                    </div>
                </div>

                <div className='flex w-full items-center '>
                    <p className='w-1/4 md:text-lg text-sm font-normal pr-2'>RT / RW</p>
                    <div class="w-3/4 md:text-lg">
                        <div class="relative flex justify-between h-10 w-full">
                            {
                                ubahBio === false ? (
                                    <>
                                        <input
                                            disabled
                                            type='number'
                                            class="peer h-full w-[45%] rounded-[7px] border border-gray-300 bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                            placeholder=" " value="09"
                                        />
                                        <input
                                            disabled
                                            type='number'
                                            class="peer h-full w-[45%] rounded-[7px] border border-gray-300 bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                            placeholder=" " value="01"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <input

                                            type='number'
                                            class="peer h-full w-[45%] rounded-[7px] border border-gray-300 bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                            placeholder=" " value="09"
                                        />
                                        <input

                                            type='number'
                                            class="peer h-full w-[45%] rounded-[7px] border border-gray-300 bg-none px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border disabled:bg-none "
                                            placeholder=" " value="01"
                                        />
                                    </>
                                )
                            }

                        </div>
                    </div>
                </div>



            </div>

            <p onClick={() => setUbahBio(!ubahBio)} className={`w-full mx-auto transition duration-200 ease-in-out text-center py-2 rounded-md hover:cursor-pointer ${ubahBio === false ? "hover:bg-gray-400 bg-gray-300 text-white" : "hover:bg-red-800 bg-red-700 text-white"} md:w-3/4 lg:w-1/2`}>{ubahBio === false ? "Ubah Biodata" : "Simpan Perubahan"}</p>
        </div >
    )
}

export default BiodataDashboard