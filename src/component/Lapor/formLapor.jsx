import "./formLapor.css";

const FormLapor = () => {
  return (
    <div className="form-lapor-content">
      <form className="form">
        <h1>LAPOR BENCANA TERKINI</h1>
        <div className="form-row">
          <div className="form-inputs left">
            <label className="form-label">
              Nama Lengkap <span>*</span>
            </label>
            <input
              id="namaLengkap"
              type="text"
              name="namaLengkap"
              className="form-input"
              placeholder="Masukan nama anda"
            />
          </div>

          <div className="form-inputs">
            <label className="form-label">
              Nomor Handphone <span>*</span>
            </label>
            <input
              id="nomorHandphone"
              type="text"
              name="nomorHandphone"
              className="form-input"
              placeholder="Masukan nomor handphone anda"
            />
          </div>
        </div>

        <div className="form-inputs">
          <label className="form-label">
            Keterangan Bencana <span>*</span>
          </label>
          <input
            id="keteranganBencana"
            type="text"
            name="keteranganBencana"
            className="form-input"
            placeholder="contoh : kebakaran , banjir , tanah longsor"
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">
            Alamat Kejadian Bencana <span>*</span>
          </label>
          <input
            id="alamatKejadianBencana"
            type="text"
            name="alamatKejadianBencana"
            className="form-input"
            placeholder="Masukan alamat kejadian bencana"
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">
            Kronologi Kejadian Bencana <span>*</span>
          </label>
          <textarea
            name="kronologiKejadianBencana"
            id="kronologiKejadianBencana"
            cols="30"
            rows="5"
            placeholder="Ceritakan kronologi kejadian bencana"
            className="form-input-ta"
          ></textarea>

          {/* <input
            id="kronologiKejadianBencana"
            type="text"
            name="kronologiKejadianBencana"
            className="form-input"
            placeholder="Ceritakan kronologi kejadian bencana"
          /> */}
        </div>

        <div className="form-inputs">
          <label className="form-label">Foto / Gambar Kejadian</label>
          <div className="form-upload-button">
            <button className="upload-foto-btn" type="submit">
              Pilih Foto
            </button>
          </div>
        </div>

        <button className="form-input-btn" type="submit">
          Kirim
        </button>

        <h3>Terima Kasih, Kami akan segera merespon Laporan Anda</h3>
      </form>
    </div>
  );
};

export default FormLapor;
