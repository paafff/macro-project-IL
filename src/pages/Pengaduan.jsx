import React, { useEffect } from 'react';
import Layout from './Layout';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

// import CardPengaduan from '../components/CardPengaduan';

const Pengaduan = () => {
  const reports = useSelector((state) => state.report); // 'report' sesuai dengan nama slice yang Anda gunakan
  const user = useSelector((state) => state.login);

  console.log('Data Laporan:', reports);
  console.log('Data user:', user);

  const navigate = useNavigate();

  // const user = useSelector((state) => state.login);

  useEffect(() => {
    if (!user[0]) {
      // Perubahan disini, gunakan === untuk perbandingan
      alert('maaf login dulu yah');
      navigate('/auth');
    }
  }, [user]);

  return (
    <Layout>
      {/* <CardPengaduan /> */}
      <div className=" w-full pt-32 flex flex-col items-center">
        <p className="my-8 text-xl xl:text-4xl inline-block w-fit mx-auto font-medium leading-tight font-semibold border-b-4 pb-2.5 border-red-700 border-dashed">
          Pengaduan
        </p>

        <div className="min-h-fit 2xl:max-w-[60%] xl:max-w-[75%] xl:mx-auto xl:flex xl:flex-wrap grid grid-cols-1 md:grid-cols-2 gap-8 p-2 pt-20 mb-24">
          {/* Card data dummy */}

          <div className="md:aspect-[12/16] p-5 h-auto drop-shadow-lg xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
            <div className="flex flex-col justify-between w-full items-center gap-4">
              <div className="flex justify-between w-full">
                <p className="text-sm w-1/2 font-medium">Laporan 1</p>
                <div className="flex gap-2 items-center">
                  <div className="h-4 w-4 rounded-full bg-[#F7C873]"></div>

                  <p className="text-sm font-thin">Pending</p>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <p className="mb-2 text-sm">Pelapor</p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                    placeholder=" "
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <p className="mb-2 text-sm">Korban</p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                    placeholder=" "
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <p className="mb-2 text-sm">Kronologi</p>
                <div class="relative h-32 w-full min-w-[200px]">
                  <textarea
                    class="peer h-full min-h-[100px] w-full resize-none rounded-[5px] border border-blue-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="md:aspect-[12/16] p-5 h-auto drop-shadow-lg xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
            <div className="flex flex-col justify-between w-full items-center gap-4">
              <div className="flex justify-between w-full">
                <p className="text-sm w-1/2 font-medium">Laporan 2</p>
                <div className="flex gap-2 items-center">
                  <div className="h-4 w-4 rounded-full bg-[#F7C873]"></div>

                  <p className="text-sm font-thin">Reject</p>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <p className="mb-2 text-sm">Pelapor</p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                    placeholder=" "
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <p className="mb-2 text-sm">Korban</p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                    placeholder=" "
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <p className="mb-2 text-sm">Kronologi</p>
                <div class="relative h-32 w-full min-w-[200px]">
                  <textarea
                    class="peer h-full min-h-[100px] w-full resize-none rounded-[5px] border border-blue-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="md:aspect-[12/16] p-5 h-auto drop-shadow-lg xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
            <div className="flex flex-col justify-between w-full items-center gap-4">
              <div className="flex justify-between w-full">
                <p className="text-sm w-1/2 font-medium">Laporan 3</p>
                <div className="flex gap-2 items-center">
                  <div className="h-4 w-4 rounded-full bg-[#F7C873]"></div>

                  <p className="text-sm font-thin">Success</p>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <p className="mb-2 text-sm">Pelapor</p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                    placeholder=" "
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <p className="mb-2 text-sm">Korban</p>
                <div class="relative h-10 w-full min-w-[200px]">
                  <input
                    class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                    placeholder=" "
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <p className="mb-2 text-sm">Kronologi</p>
                <div class="relative h-32 w-full min-w-[200px]">
                  <textarea
                    class="peer h-full min-h-[100px] w-full resize-none rounded-[5px] border border-blue-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Card data dummy */}

          {/* Card data real laporan */}

          {reports.map((report, index) => (
            <div className="md:aspect-[12/16] p-5 h-auto drop-shadow-lg xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col ">
              <Link to={`/report/info/${index}`}>
                <div className="flex flex-col justify-between w-full items-center gap-4">
                  <div className="flex justify-between w-full">
                    <p className="text-sm w-1/2 font-medium">
                      {report.judulLaporan}
                    </p>
                    <div className="flex gap-2 items-center">
                      <div className="h-4 w-4 rounded-full bg-[#F7C873]"></div>

                      <p className="text-sm font-thin">Pending</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap">
                    <p className="mb-2 text-sm">Pelapor</p>
                    <div class="relative h-10 w-full min-w-[200px]">
                      <input
                        class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                        placeholder=" "
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap">
                    <p className="mb-2 text-sm">Korban</p>
                    <div class="relative h-10 w-full min-w-[200px]">
                      <input
                        class="peer w-full rounded-[5px] border border-gray-300 px-3 py-2.5 text-sm font-normal text-blue-gray-300 outline outline-0 transition-all "
                        placeholder=" "
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap">
                    <p className="mb-2 text-sm">Kronologi</p>
                    <div class="relative h-32 w-full min-w-[200px]">
                      <textarea
                        class="peer h-full min-h-[100px] w-full resize-none rounded-[5px] border border-blue-gray-200 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                      ></textarea>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Card data real laporan */}
        </div>
      </div>
    </Layout>
  );
};

export default Pengaduan;
