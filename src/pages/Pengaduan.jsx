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
  }, [user, navigate]);

  return (
    <Layout>
      {/* <CardPengaduan /> */}
      <div className=" w-full pt-32 flex flex-col items-center">
        <p className="my-8 text-xl xl:text-4xl inline-block w-fit mx-auto font-medium leading-tight font-semibold border-b-4 pb-2.5 border-red-700 border-dashed">
          Pengaduan
        </p>

        <div className="min-h-fit 2xl:max-w-[60%] xl:max-w-[75%] xl:mx-auto xl:flex xl:flex-wrap grid grid-cols-1 md:grid-cols-2 gap-8 p-2 pt-20 mb-24">
          {/* Card data dummy */}

          <div className="md:aspect-[12/16] p-5 h-auto drop-shadow-lg xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col hover:shadow-xl hover:scale-105 duration-300">
            <Link to="#" className='cursor-not-allowed'>
              <div className="flex flex-col justify-between w-full items-center gap-4">
                <div className="flex justify-between w-full mb-2">
                  <p className="text-sm w-1/2 font-semibold">
                    Judul Dummy 1
                  </p>
                  <div className="flex gap-2 items-center">
                    <div className="h-4 w-4 rounded-full bg-[#F7C873]"></div>

                    <p className="text-sm font-thin">Pending</p>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-2 text-sm font-semibold">Pelapor</p>
                  <p className="mb-2 text-sm">Pelapor Dummy 1</p>
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-2 text-sm font-semibold">Korban</p>
                  <p className="mb-2 text-sm">Korban Dummy 1</p>
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-2 text-sm font-semibold">Kronologi</p>
                  <p className="mb-2 text-sm line-clamp-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro magnam doloremque pariatur accusantium quidem, doloribus inventore. Dolor amet, voluptates obcaecati tenetur odio dicta, beatae explicabo dolorem magni molestiae blanditiis laboriosam.</p>
                </div>
                <p className='w-full text-end pt-2 text-sm text-gray-400'>10 - 10 - 2023</p>
              </div>
            </Link>
          </div>

          <div className="md:aspect-[12/16] p-5 h-auto drop-shadow-lg xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col  hover:shadow-xl hover:scale-105 duration-300">
            <Link to="#" className='cursor-not-allowed'>
              <div className="flex flex-col justify-between w-full items-center gap-4">
                <div className="flex justify-between w-full mb-2">
                  <p className="text-sm w-1/2 font-semibold">
                    Judul Dummy 2
                  </p>
                  <div className="flex gap-2 items-center">
                    <div className="h-4 w-4 rounded-full bg-[#B91C1C]"></div>

                    <p className="text-sm font-thin">Reject</p>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-2 text-sm font-semibold">Pelapor</p>
                  <p className="mb-2 text-sm">Pelapor Dummy 2</p>
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-2 text-sm font-semibold">Korban</p>
                  <p className="mb-2 text-sm">Korban Dummy 2</p>
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-2 text-sm font-semibold">Kronologi</p>
                  <p className="mb-2 text-sm line-clamp-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro magnam doloremque pariatur accusantium quidem, doloribus inventore. Dolor amet, voluptates obcaecati tenetur odio dicta, beatae explicabo dolorem magni molestiae blanditiis laboriosam.</p>
                </div>
                <p className='w-full text-end pt-2 text-sm text-gray-400'>01 - 10 - 2023</p>
              </div>
            </Link>
          </div>

          <div className="md:aspect-[12/16] p-5 h-auto drop-shadow-lg xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col  hover:shadow-xl hover:scale-105 duration-300">
            <Link to="#" className='cursor-not-allowed'>
              <div className="flex flex-col justify-between w-full items-center gap-4">
                <div className="flex justify-between w-full mb-2">
                  <p className="text-sm w-1/2 font-semibold">
                    Judul Dummy 3
                  </p>
                  <div className="flex gap-2 items-center">
                    <div className="h-4 w-4 rounded-full bg-[#008435]"></div>

                    <p className="text-sm font-thin">Success</p>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-2 text-sm font-semibold">Pelapor</p>
                  <p className="mb-2 text-sm">Pelapor Dummy 3</p>
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-2 text-sm font-semibold">Korban</p>
                  <p className="mb-2 text-sm">Korban Dummy 3</p>
                </div>
                <div className="flex w-full flex-col">
                  <p className="mb-2 text-sm font-semibold">Kronologi</p>
                  <p className="mb-2 text-sm line-clamp-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro magnam doloremque pariatur accusantium quidem, doloribus inventore. Dolor amet, voluptates obcaecati tenetur odio dicta, beatae explicabo dolorem magni molestiae blanditiis laboriosam.</p>
                </div>
                <p className='w-full text-end pt-2 text-sm text-gray-400'>07 - 10 - 2023</p>
              </div>
            </Link>
          </div>

          {/* Card data dummy */}

          {/* Card data real laporan */}

          {reports.map((report, index) => (
            <div className="md:aspect-[12/16] p-5 h-auto drop-shadow-lg xl:my-6 lg:w-80 lg:mx-auto lg:my-auto md:my-auto bg-slate-50 rounded-lg shadow-sm flex flex-col  hover:shadow-xl hover:scale-105 duration-300">
              <Link to={`/report/info/${index}`}>
                <div className="flex flex-col justify-between w-full items-center gap-4">
                  <div className="flex justify-between w-full mb-2">
                    <p className="text-sm w-1/2 font-semibold">
                      {report.judulLaporan}
                    </p>
                    <div className="flex gap-2 items-center">
                      <div className="h-4 w-4 rounded-full bg-[#F7C873]"></div>

                      <p className="text-sm font-thin">Pending</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col">
                    <p className="mb-2 text-sm font-semibold">Pelapor</p>
                    <p className="mb-2 text-sm">{user[0].username}</p>
                  </div>
                  <div className="flex w-full flex-col">
                    <p className="mb-2 text-sm font-semibold">Korban</p>
                    <p className="mb-2 text-sm">{report.korban}</p>
                  </div>
                  <div className="flex w-full flex-col">
                    <p className="mb-2 text-sm font-semibold">Kronologi</p>
                    <p className="mb-2 text-sm line-clamp-6">{report.kronologi}</p>
                  </div>
                  <p className='w-full text-end pt-2 text-sm text-gray-400'>07 - 10 - 2023</p>
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
