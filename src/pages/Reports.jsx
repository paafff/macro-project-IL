import React from 'react';
import Layout from './Layout';
import { useNavigate, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Reports = () => {
  const reports = useSelector((state) => state.report); // 'report' sesuai dengan nama slice yang Anda gunakan
  const user = useSelector((state) => state.login);

  console.log('Data Laporan:', reports);
  console.log('Data user:', user);
  // console.log('email:', user[0].email);
  return (
    <Layout>
      {/* <div>Reports</div> */}

      <div className="flex flex-col justify-center">
        <div className="h-fit mx-auto max-w-6xl grid grid-cols-2 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {reports.map((report, index) => (
            <div
              // key={produk.uuid}
              className=" max-w-xs rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 duration-300"
            >
              <Link to={`/report/info/${index}`}>
                <div className="h-full flex flex-col justify-between">
                  <div className="h-56 relative max-w-xs flex items-center overflow-hidden rounded-xl">
                    <img
                      // src={produk.image || blankProductImage}
                      alt=" photo"
                    />
                  </div>

                  <div className="mt-1 p-2 ">
                    <h2 className="text-slate-900 font-bold text-md">
                      {report.judulLaporan}
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                      {/* {produk.userDB.address || 'Indonesia'} */}
                      {report.korban}
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-md font-bold text-slate-700">
                      {/* {user[0].email} */}
                      </p>

                      {/* <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                        <span className="text-sm">View details</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
