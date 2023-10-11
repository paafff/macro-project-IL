import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addReport } from './../redux/reportSlice';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import axios from 'axios';

const DetailReportForm = () => {
  // const [judulLaporan, setJudulLaporan] = useState('');
  // const [pelapor, setPelapor] = useState('');
  // const [korban, setKorban] = useState('');

  // const [nomorHP, setNomorHP] = useState('');

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const params = useParams();

  const index = parseInt(params.index);

  const reports = useSelector((state) => state.report); // 'report' sesuai dengan nama slice yang Anda gunakan
  const dataReport = reports[index];

  console.log('Data Laporan:', reports);
  console.log('nilai params', params);
  console.log('nilai params', index);

  useEffect(() => {
    // Reports()
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newReport = {
  //     judul : dataLaporan.judulLaporan,
  //     korban : dataLaporan.korban,
  //     // korban,
  //   };
  //   dispatch(addReport(newReport));

  //   navigate('/reports');
  // };

  return (
    <>
      <div className="mx-auto w-2/4 py-32">
        {/* <!--Title--> */}
        {/* <h2 className="font-sans font-semibold break-normal text-gray-900  py-4 text-2xl text-center">
          Detail Pengaduan
        </h2> */}
        <div className="first-text mb-4 flex justify-center items-center">
          <p className="text-xl xl:text-4xl font-medium pb-2.5 leading-tight font-semibold border-b-4 border-red-700 border-dashed">
            Detail Pengaduan
          </p>
        </div>
        {/* <!--Card--> */}
        <div id="section2" className="p-8 mt-6 lg:mt-0 rounded  bg-none shadow-md">
          <h2 className="font-sans font-bold break-normal text-gray-900 py-1 text-2xl">
            Data Korban
          </h2>
          <hr className="bg-red-700 py-[1px] mb-5" />
          <form onSubmit="">
            {/* sample gunakan div */}
            {/* Judul Laporan */}
            {/* <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textfield"
              >
                Judul Laporan
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                placeholder="Judul Laporan"
                
              />

            </div>
          </div> */}

            {/* Judul Laporan */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Judul Laporan
                </label>
              </span>
              <span className="md:w-2/3">
                <input
                  type="text"
                  value={dataReport.judulLaporan}
                  // onChange={(e) =>
                  //   setDataLaporan({
                  //     ...dataLaporan,
                  //     judulLaporan: e.target.value,
                  //   })
                  // }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                  placeholder={dataReport.judulLaporan}
                // required
                />
              </span>
            </div>

            {/* Nama Korban */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Nama Korban
                </label>
              </span>
              <span className="md:w-2/3">
                <input
                  type="text"
                  value={dataReport.korban}
                  placeholder={dataReport.korban}
                  // onChange={(e) =>
                  //   setDataLaporan({ ...dataLaporan, korban: e.target.value })
                  // }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                // placeholder="Nama Korban"
                // required
                />
              </span>
            </div>

            {/* Jenis Kelamin */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Jenis Kelamin
                </label>
              </span>
              <span className="md:w-2/3">
                <input
                  type="text"
                  value={dataReport.jenisKelamin}
                  placeholder={dataReport.jenisKelamin}
                  // onChange={(e) =>
                  //   setDataLaporan({ ...dataLaporan, korban: e.target.value })
                  // }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                // placeholder="Nama Korban"
                // required
                />
              </span>
            </div>

            {/* Tipe Identitas */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Tipe Identitas
                </label>
              </span>
              <span className="md:w-2/3">
                <select
                  id="tipeIdentitas"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                // onChange={(e) => setKelurahanKorbanSelected(e.target.value)}
                >
                  <option value="">{dataReport.tipeIdentitasKorban}</option>
                  {/* {kelurahanKorban.map((kel) => (
                    <option key={kel.id} value={kel.id}>
                      {kel.name}
                    </option>
                  ))} */}
                </select>
              </span>
            </div>

            {/* Nomer Identitas */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Nomer Identitas
                </label>
              </span>
              <span className="md:w-2/3">
                <input
                  type="number"
                  value={dataReport.nomerIdentitasKorban}
                  placeholder={dataReport.nomerIdentitasKorban}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                // placeholder="Nomer Identitas"
                // required
                />
              </span>
            </div>

            {/* Unggah identitas korban */}
            <div className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-file"
                >
                  Unggah identitas korban
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="file"
                  multiple
                  // onChange={(e) => {
                  //   setImgFilesOne(e.target.files[0]);
                  // }}
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
            </div>

            {/* dddKorban */}
            {/* Provinsi */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Provinsi
                </label>
              </span>
              <span className="md:w-2/3">
                <select
                  id="kabupatenKorban"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                // onChange={(e) => setKabupatenKorbanSelected(e.target.value)}
                >
                  <option value="">{dataReport.provinsiKorban}</option>
                  {/* {kabupatenKorban.map((kab) => (
                    <option key={kab.id} value={kab.id}>
                      {kab.name}
                    </option>
                  ))} */}
                </select>
              </span>
            </div>

            {/* Kota/Kab */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Kota/Kabupaten
                </label>
              </span>
              <span className="md:w-2/3">
                <select
                  id="kabupatenKorban"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                // onChange={(e) => setKabupatenKorbanSelected(e.target.value)}
                >
                  <option value="">{dataReport.kabupatenKorban}</option>
                  {/* {kabupatenKorban.map((kab) => (
                    <option key={kab.id} value={kab.id}>
                      {kab.name}
                    </option>
                  ))} */}
                </select>
              </span>
            </div>

            {/* Kecamatan */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Kecamatan
                </label>
              </span>
              <span className="md:w-2/3">
                <select
                  id="kecamatanKorban"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                // onChange={(e) => setKecamatanKorbanSelected(e.target.value)}
                >
                  <option value="">{dataReport.kecamatanKorban}</option>
                  {/* {kecamatanKorban.map((kec) => (
                    <option key={kec.id} value={kec.id}>
                      {kec.name}
                    </option>
                  ))} */}
                </select>
              </span>
            </div>

            {/* Kelurahan */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Kelurahan
                </label>
              </span>
              <span className="md:w-2/3">
                <select
                  id="kelurahanKejadian"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                // onChange={(e) => setKelurahanKorbanSelected(e.target.value)}
                >
                  <option value="">{dataReport.kelurahanKorban}</option>
                  {/* {kelurahanKorban.map((kel) => (
                    <option key={kel.id} value={kel.id}>
                      {kel.name}
                    </option>
                  ))} */}
                </select>
              </span>
            </div>

            {/* RT/RW */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  RT/RW
                </label>
              </span>
              <span className="md:w-2/3 flex space-x-10">
                <input
                  type="number"
                  value={dataReport.rtKorban}
                  placeholder={dataReport.rtKorban}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                // placeholder="RT"
                // required
                />
                <input
                  type="number"
                  value={dataReport.rwKorban}
                  placeholder={dataReport.rwKorban}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                // placeholder="RW"
                // required
                />
              </span>
            </div>

            {/* No. HP */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  No. HP
                </label>
              </span>
              <span className="md:w-2/3">
                <input
                  type="number"
                  value={dataReport.nomerKorban}
                  placeholder={dataReport.nomerKorban}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                // placeholder="No. HP"
                // required
                />
              </span>
            </div>

            <hr className="my-6 border-t border-gray-300" />
            <h2 className="font-sans font-bold break-normal text-gray-900  py-1 text-2xl">
              Deskripsi Kejadian
            </h2>
            <hr className="bg-red-700 py-[1px] mb-5" />

            {/* Kronologi */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Kronologi
                </label>
              </span>
              <span className="md:w-2/3">
                <textarea
                  className="form-textarea block w-full focus:bg-white rounded-lg"
                  id="my-textarea"
                  value={dataReport.kronologi}
                  placeholder={dataReport.kronologi}
                  // onChange={(e) => setDescription(e.target.value)}
                  rows="5"
                // required
                ></textarea>
              </span>
            </div>

            {/* dddKejadian */}
            {/* Provinsi */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Provinsi
                </label>
              </span>
              <span className="md:w-2/3">
                <select
                  id="provinsiKejadian"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                // onChange={(e) => setProvinsiKejadianSelected(e.target.value)}
                >
                  <option value="">{dataReport.provinsiKejadian}</option>
                  {/* {provinsiKejadian.map((prov) => (
                    <option key={prov.id} value={prov.id}>
                      {prov.name}
                    </option>
                  ))} */}
                </select>
              </span>
            </div>

            {/* Kota/Kab */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Kota/Kabupaten
                </label>
              </span>
              <span className="md:w-2/3">
                <select
                  id="kabupatenKejadian"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                // onChange={(e) => setKabupatenKejadianSelected(e.target.value)}
                >
                  <option value="">{dataReport.kabupatenKejadian}</option>
                  {/* {kabupatenKejadian.map((kab) => (
                    <option key={kab.id} value={kab.id}>
                      {kab.name}
                    </option>
                  ))} */}
                </select>
              </span>
            </div>

            {/* Kecamatan */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Kecamatan
                </label>
              </span>
              <span className="md:w-2/3">
                <select
                  id="kecamatanKejadian"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                // onChange={(e) => setKecamatanKejadianSelected(e.target.value)}
                >
                  <option value="">{dataReport.kecamatanKejadian}</option>
                  {/* {kecamatanKejadian.map((kec) => (
                    <option key={kec.id} value={kec.id}>
                      {kec.name}
                    </option>
                  ))} */}
                </select>
              </span>
            </div>

            {/* Kelurahan */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Kelurahan
                </label>
              </span>
              <span className="md:w-2/3">
                <select
                  id="kelurahanKejadian"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                // onChange={(e) => setKelurahanKejadianSelected(e.target.value)}
                >
                  <option value="">{dataReport.kelurahanKejadian}</option>
                  {/* {kelurahanKejadian.map((kel) => (
                    <option key={kel.id} value={kel.id}>
                      {kel.name}
                    </option>
                  ))} */}
                </select>
              </span>
            </div>

            {/* RT/RW */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  RT/RW
                </label>
              </span>
              <span className="md:w-2/3 flex space-x-10">
                <input
                  type="number"
                  value={dataReport.rtKejadian}
                  placeholder={dataReport.rtKejadian}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                // placeholder="RT"
                // required
                />
                <input
                  type="number"
                  value={dataReport.rwKejadian}
                  placeholder={dataReport.rwKejadian}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                // placeholder="RW"
                // required
                />
              </span>
            </div>
            {/* Dokumen Pendukung */}
            <div className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-file"
                >
                  Dokumen Pendukung
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="file"
                  // value={dataReport.dokumenPendukung}
                  multiple
                  // onChange={(e) => {
                  //   setImgFilesOne(e.target.files[0]);
                  // }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2  "
                  id="my-file"
                  name="file"
                  accept=""
                // required
                />
                <p className="py-2 text-sm text-gray-600">
                  Mendukung file:
                  <b>
                    .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .jpg, .png,
                    .jpeg, .mp3, .wav, .mp4, .avi, .mov, .wmv
                  </b>
                </p>
                <p className=" text-sm text-gray-600">
                  <b>Ukuran maksimal file: 500MB</b>
                </p>
              </div>
            </div>

            {/* Harapan Pengadu */}
            <div className="flex mb-6">
              <span className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Harapan Pengadu
                </label>
              </span>
              <span className="md:w-2/3">
                <textarea
                  className="form-textarea block w-full focus:bg-white rounded-lg"
                  id="my-textarea"
                  rows="5"
                  value={dataReport.harapanPengadu}
                  placeholder={dataReport.harapanPengadu}
                // onChange={(e) => setDescription(e.target.value)}
                // required
                ></textarea>
              </span>
            </div>

            {/* checkbox */}
            {/* <input
              type="checkbox"
              name="remember_me"
              id="remember_me"
              className="mr-2 focus:ring-0 rounded"
              // required
            />
            <label className="mb-4 text-sm font-medium text-gray-900 ">
              checkbock tulisannya “saya bertanggung jawab atas data diatas
              benar dan valid blablablabla”
            </label> */}

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 flex justify-end">
                {/* button */}
                {/* <button className="" type="submit">
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-800 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                  >
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-800 group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                      Report !
                    </span>
                  </a>
                </button> */}
                {/* button */}
              </div>
            </div>
          </form>
        </div>
        {/* <!--/Card--> */}
      </div>
    </>
  );
};

export default DetailReportForm;
