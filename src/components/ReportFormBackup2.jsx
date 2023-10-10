import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addReport } from './../redux/reportSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReportForm = () => {
  // const [judulLaporan, setJudulLaporan] = useState('');
  // const [pelapor, setPelapor] = useState('');
  // const [korban, setKorban] = useState('');

  // const [nomorHP, setNomorHP] = useState('');

  //korban
  const [provinsiKorban, setProvinsiKorban] = useState([]);
  const [provinsiKorbanSelected, setProvinsiKorbanSelected] = useState('');

  const [kabupatenKorban, setKabupatenKorban] = useState([]);
  const [kabupatenKorbanSelected, setKabupatenKorbanSelected] = useState('');

  const [kecamatanKorban, setKecamatanKorban] = useState([]);
  const [kecamatanKorbanSelected, setKecamatanKorbanSelected] = useState('');

  const [kelurahanKorban, setKelurahanKorban] = useState([]);
  const [kelurahanKorbanSelected, setKelurahanKorbanSelected] = useState('');

  //kejadian
  const [provinsiKejadian, setProvinsiKejadian] = useState([]);
  const [provinsiKejadianSelected, setProvinsiKejadianSelected] = useState('');

  const [kabupatenKejadian, setKabupatenKejadian] = useState([]);
  const [kabupatenKejadianSelected, setKabupatenKejadianSelected] =
    useState('');

  const [kecamatanKejadian, setKecamatanKejadian] = useState([]);
  const [kecamatanKejadianSelected, setKecamatanKejadianSelected] =
    useState('');

  const [kelurahanKejadian, setKelurahanKejadian] = useState([]);
  const [kelurahanKejadianSelected, setKelurahanKejadianSelected] =
    useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getAlamatKorban = useCallback(async () => {
    try {
      const getProvKorban = await axios.get(
        `https://api.binderbyte.com/wilayah/provinsi?api_key=6b15fe770615b0b20811cf5620b53274926e4ed04f8eea3bab43517e275110e9`
      );

      setProvinsiKorban(getProvKorban.data.value);

      const getKabKorban = await axios.get(
        `https://api.binderbyte.com/wilayah/kabupaten?api_key=6b15fe770615b0b20811cf5620b53274926e4ed04f8eea3bab43517e275110e9&id_provinsi=${provinsiKorbanSelected}`
      );

      setKabupatenKorban(getKabKorban.data.value);

      const getKecKorban = await axios.get(
        `https://api.binderbyte.com/wilayah/kecamatan?api_key=6b15fe770615b0b20811cf5620b53274926e4ed04f8eea3bab43517e275110e9&id_kabupaten=${kabupatenKorbanSelected}`
      );

      setKecamatanKorban(getKecKorban.data.value);

      const getKelKorban = await axios.get(
        `https://api.binderbyte.com/wilayah/kelurahan?api_key=6b15fe770615b0b20811cf5620b53274926e4ed04f8eea3bab43517e275110e9&id_kecamatan=${kecamatanKorbanSelected}`
      );

      setKelurahanKorban(getKelKorban.data.value);
    } catch (error) {
      console.log(error); // Menampilkan error pada konsol
    }
  }, [
    provinsiKorbanSelected,
    kabupatenKorbanSelected,
    kecamatanKorbanSelected,
  ]);

  const getAlamatKejadian = useCallback(async () => {
    try {
      const getProvKejadian = await axios.get(
        `https://api.binderbyte.com/wilayah/provinsi?api_key=6b15fe770615b0b20811cf5620b53274926e4ed04f8eea3bab43517e275110e9`
      );

      setProvinsiKejadian(getProvKejadian.data.value);

      const getKabKejadian = await axios.get(
        `https://api.binderbyte.com/wilayah/kabupaten?api_key=6b15fe770615b0b20811cf5620b53274926e4ed04f8eea3bab43517e275110e9&id_provinsi=${provinsiKejadianSelected}`
      );

      setKabupatenKejadian(getKabKejadian.data.value);

      const getKecKejadian = await axios.get(
        `https://api.binderbyte.com/wilayah/kecamatan?api_key=6b15fe770615b0b20811cf5620b53274926e4ed04f8eea3bab43517e275110e9&id_kabupaten=${kabupatenKejadianSelected}`
      );

      setKecamatanKejadian(getKecKejadian.data.value);

      const getKelKejadian = await axios.get(
        `https://api.binderbyte.com/wilayah/kelurahan?api_key=6b15fe770615b0b20811cf5620b53274926e4ed04f8eea3bab43517e275110e9&id_kecamatan=${kecamatanKejadianSelected}`
      );

      setKelurahanKejadian(getKelKejadian.data.value);
    } catch (error) {
      console.log(error); // Menampilkan error pada konsol
    }
  }, [
    provinsiKejadianSelected,
    kabupatenKejadianSelected,
    kecamatanKejadianSelected,
  ]);

  const [dataLaporan, setDataLaporan] = useState({
    judulLaporan: '',
    korban: '',
    jenisKelamin: '',
    tipeIdentitasKorban: '',
    nomerIdentitasKorban: '',
    identitasKorban: null,
    provinsiKorban: '',
    kabupatenKorban: '',
    kecamatanKorban: '',
    kelurahanKorban: '',
    rtKorban: '',
    rwKorban: '',
    nomerKorban: '',

    //kejadian
    kronologi: '',
    provinsiKejadian: '',
    kabupatenKejadian: '',
    kecamatanKejadian: '',
    kelurahanKejadian: '',
    rtKejadian: '',
    rwKejadian: '',
    dokumenPendukung: null,
    harapanPengadu: '',
  });

  // const getAlamatKorban = useCallback(async () => {
  //   // implementasi fungsi getAlamatKorban
  // }, [
  //   provinsiKorbanSelected,
  //   kabupatenKorbanSelected,
  //   kecamatanKorbanSelected,
  // ]);

  // const getAlamatKejadian = useCallback(async () => {
  //   // implementasi fungsi getAlamatKejadian
  // }, [
  //   provinsiKejadianSelected,
  //   kabupatenKejadianSelected,
  //   kecamatanKejadianSelected,
  // ]);

  useEffect(() => {


    // console.log(provinsi);
    console.log('Aprov' + provinsiKorbanSelected);
    console.log('Akab' + kabupatenKorbanSelected);
    console.log('Akec' + kecamatanKorbanSelected);
    console.log('Akel' + kelurahanKorbanSelected);

    console.log('Bprov' + provinsiKejadianSelected);
    console.log('Bkab' + kabupatenKejadianSelected);
    console.log('Bkec' + kecamatanKejadianSelected);
    console.log('Bkel' + kelurahanKejadianSelected);
    // console.log(provinsi);
  }, [

    provinsiKorbanSelected,
    kabupatenKorbanSelected,
    kecamatanKorbanSelected,
    kelurahanKorbanSelected,
    provinsiKejadianSelected,
    kabupatenKejadianSelected,
    kecamatanKejadianSelected,
    kelurahanKejadianSelected,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      judulLaporan: dataLaporan.judulLaporan,
      korban: dataLaporan.korban,
      jenisKelamin: dataLaporan.jenisKelamin,
      tipeIdentitasKorban: dataLaporan.tipeIdentitasKorban,
      nomerIdentitasKorban: dataLaporan.nomerIdentitasKorban,
      identitasKorban: dataLaporan.identitasKorban,
      provinsiKorban: dataLaporan.provinsiKorban,
      kabupatenKorban: dataLaporan.kabupatenKorban,
      kecamatanKorban: dataLaporan.kecamatanKorban,
      kelurahanKorban: dataLaporan.kelurahanKorban,
      rtKorban: dataLaporan.rtKorban,
      rwKorban: dataLaporan.rwKorban,
      nomerKorban: dataLaporan.nomerKorban,

      //kejadian

      kronologi: dataLaporan.kronologi,
      provinsiKejadian: dataLaporan.provinsiKejadian,
      kabupatenKejadian: dataLaporan.kabupatenKejadian,
      kecamatanKejadian: dataLaporan.kecamatanKejadian,
      kelurahanKejadian: dataLaporan.kelurahanKejadian,
      rtKejadian: dataLaporan.rtKejadian,
      rwKejadian: dataLaporan.rwKejadian,
      dokumenPendukung: dataLaporan.dokumenPendukung,
      harapanPengadu: dataLaporan.harapanPengadu,
    };
    dispatch(addReport(newReport));

    navigate('/reports');
  };

  return (
    <>
      <div className="mx-auto w-2/3">
        {/* <!--Title--> */}
        <h2 className="font-sans font-bold break-normal text-gray-900  py-4 text-2xl">
          Form Pengaduan
        </h2>
        {/* <!--Card--> */}
        <div
          id="section2"
          className="p-8 mt-6 lg:mt-0 rounded shadow bg-slate-200"
        >
          <h2 className="font-sans font-bold break-normal text-gray-900  py-4 text-2xl">
            Data Korban
          </h2>
          <form onSubmit={handleSubmit}>
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
                  value={dataLaporan.judulLaporan}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      judulLaporan: e.target.value,
                    })
                  }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                  placeholder="Judul Laporan"
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
                  value={dataLaporan.korban}
                  onChange={(e) =>
                    setDataLaporan({ ...dataLaporan, korban: e.target.value })
                  }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                  placeholder="Nama Korban"
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
              <span className=" flex md:w-2/3">
                {/* <div class="flex"> */}
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value="Laki-Laki"
                    // value={dataLaporan.korban}
                    onChange={(e) =>
                      setDataLaporan({
                        ...dataLaporan,
                        jenisKelamin: e.target.value,
                      })
                    }
                    name="inline-radio-group"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <label for="inline-radio" class="ml-2 text-sm font-medium">
                    Laki-Laki
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value="Perempuan"
                    onChange={(e) =>
                      setDataLaporan({
                        ...dataLaporan,
                        jenisKelamin: e.target.value,
                      })
                    }
                    name="inline-radio-group"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                  />
                  <label for="inline-2-radio" class="ml-2 text-sm font-medium">
                    Perempuan
                  </label>
                </div>
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
                  id="countries"
                  // value={dataLaporan.tipeIdentitasKorban}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      tipeIdentitasKorban: e.target.value,
                    })
                  }
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2"
                >
                  {/* <option selected>Pilih tipe identitas</option> */}
                  <option value="KTP">Kartu Tanda Penduduk (KTP)</option>
                  <option value="SIM">Surat Izin Mengemudi (SIM)</option>
                  <option value="KP">Kartu Pelajar</option>
                  {/* <option value="DE">Germany</option> */}
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
                  value={dataLaporan.nomerIdentitasKorban}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      nomerIdentitasKorban: e.target.value,
                    })
                  }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                  placeholder="Nomer Identitas"
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
                  value={dataLaporan.identitasKorban}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      identitasKorban: e.target.value,
                    })
                  }
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
                  id="provinsiKorban"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                  onChange={(e) => {
                    const selectedProvinsi = provinsiKorban.find(
                      (prov) => prov.id === parseInt(e.target.value)
                    );
                    setProvinsiKorbanSelected(parseInt(e.target.value));
                    setDataLaporan({
                      ...dataLaporan,
                      provinsiKorban: selectedProvinsi
                        ? selectedProvinsi.name
                        : '',
                    });
                  }}
                  // onChange={(e) => {
                  //   setProvinsiKorbanSelected(e.target.value.id);
                  //   setDataLaporan({
                  //     ...dataLaporan,
                  //     provinsiKorban: e.target.value.name,
                  //   });
                  // }}
                  // onChange={(e) => {
                  //   const selectedProvinsi = provinsiKorban.find((prov) => prov.id === e.target.value);
                  //   setProvinsiKorbanSelected(e.target.value);
                  //   setDataLaporan({
                  //     ...dataLaporan,
                  //     provinsiKorban: selectedProvinsi ? selectedProvinsi.name : '',
                  //   });
                  // }}
                >
                  <option value="">Pilih Provinsi</option>
                  {provinsiKorban.map((prov) => (
                    <option key={prov.id} value={prov.id}>
                      {prov.name}
                    </option>
                  ))}
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
                  onChange={(e) => setKabupatenKorbanSelected(e.target.value)}
                >
                  <option value="">Pilih Kota/Kabupaten</option>
                  {kabupatenKorban.map((kab) => (
                    <option key={kab.id} value={kab.id}>
                      {kab.name}
                    </option>
                  ))}
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
                  onChange={(e) => setKecamatanKorbanSelected(e.target.value)}
                >
                  <option value="">Pilih Kecamatan</option>
                  {kecamatanKorban.map((kec) => (
                    <option key={kec.id} value={kec.id}>
                      {kec.name}
                    </option>
                  ))}
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
                  onChange={(e) => setKelurahanKorbanSelected(e.target.value)}
                >
                  <option value="">Pilih Kelurahan</option>
                  {kelurahanKorban.map((kel) => (
                    <option key={kel.id} value={kel.id}>
                      {kel.name}
                    </option>
                  ))}
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
                  value={dataLaporan.rtKorban}
                  onChange={(e) =>
                    setDataLaporan({ ...dataLaporan, rtKorban: e.target.value })
                  }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                  placeholder="RT"
                  // required
                />
                <input
                  type="number"
                  value={dataLaporan.rwKorban}
                  onChange={(e) =>
                    setDataLaporan({ ...dataLaporan, rwKorban: e.target.value })
                  }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                  placeholder="RW"
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
                  value={dataLaporan.nomerKorban}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      nomerKorban: e.target.value,
                    })
                  }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                  placeholder="No. HP"
                  // required
                />
              </span>
            </div>

            <hr className="my-6 border-t border-gray-300" />
            <h2 className="font-sans font-bold break-normal text-gray-900  py-4 text-2xl">
              Deskripsi Kejadian
            </h2>

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
                  className="form-textarea block w-full focus:bg-white"
                  id="my-textarea"
                  value={dataLaporan.kronologi}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      kronologi: e.target.value,
                    })
                  }
                  rows="5"
                  placeholder="Kronologi"
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
                  onChange={(e) => setProvinsiKejadianSelected(e.target.value)}
                >
                  <option value="">Pilih Provinsi</option>
                  {provinsiKejadian.map((prov) => (
                    <option key={prov.id} value={prov.id}>
                      {prov.name}
                    </option>
                  ))}
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
                  onChange={(e) => setKabupatenKejadianSelected(e.target.value)}
                >
                  <option value="">Pilih Kota/Kabupaten</option>
                  {kabupatenKejadian.map((kab) => (
                    <option key={kab.id} value={kab.id}>
                      {kab.name}
                    </option>
                  ))}
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
                  onChange={(e) => setKecamatanKejadianSelected(e.target.value)}
                >
                  <option value="">Pilih Kecamatan</option>
                  {kecamatanKejadian.map((kec) => (
                    <option key={kec.id} value={kec.id}>
                      {kec.name}
                    </option>
                  ))}
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
                  onChange={(e) => setKelurahanKejadianSelected(e.target.value)}
                >
                  <option value="">Pilih Kelurahan</option>
                  {kelurahanKejadian.map((kel) => (
                    <option key={kel.id} value={kel.id}>
                      {kel.name}
                    </option>
                  ))}
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
                  value={dataLaporan.rtKejadian}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      rtKejadian: e.target.value,
                    })
                  }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                  placeholder="RT"
                  // required
                />
                <input
                  type="number"
                  value={dataLaporan.rwKejadian}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      rwKejadian: e.target.value,
                    })
                  }
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                  placeholder="RW"
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
                  multiple
                  value={dataLaporan.dokumenPendukung}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      dokumenPendukung: e.target.value,
                    })
                  }
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
                  className="form-textarea block w-full focus:bg-white"
                  id="my-textarea"
                  value={dataLaporan.harapanPengadu}
                  onChange={(e) =>
                    setDataLaporan({
                      ...dataLaporan,
                      harapanPengadu: e.target.value,
                    })
                  }
                  rows="5"
                  placeholder="Harapan Pengadu"
                  // required
                ></textarea>
              </span>
            </div>

            {/* checkbox */}
            <div className="flex mb-6">
              <span className="md:w-1/3"></span>
              <span className="md:w-2/3">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className="mr-2 focus:ring-0 rounded"
                  // required
                />
                <label className="mb-4 text-sm font-medium text-gray-900 ">
                  Saya bertanggung jawab atas pernyataan saya diatas
                </label>
              </span>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 flex justify-end">
                {/* button */}
                <button className="" type="submit">
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
                </button>
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

export default ReportForm;
