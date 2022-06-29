import React, { useState } from "react";
import { db } from "../../firebase/firebaseClient";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

interface FormLapor {
  name: string;
  phone?: string;
  description: string;
  address: string;
  details: string;
  image?: string;
}

const FormLapor = () => {
  const [formData, setFormData] = useState<FormLapor>({
    name: "",
    phone: "",
    description: "",
    address: "",
    details: "",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setDoc(doc(db, "laporan", uuidv4()), formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
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
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
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
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
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
            value={formData.address}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: e.target.value,
              })
            }
          />
        </div>

        <div className="form-inputs">
          <label className="form-label">
            Kronologi Kejadian Bencana <span>*</span>
          </label>
          <textarea
            name="kronologiKejadianBencana"
            id="kronologiKejadianBencana"
            cols={30}
            rows={5}
            placeholder="Ceritakan kronologi kejadian bencana"
            className="form-input-ta"
            value={formData.details}
            onChange={(e) =>
              setFormData({
                ...formData,
                details: e.target.value,
              })
            }
          ></textarea>
        </div>

        {/* <div className="form-inputs">
					<label className="form-label">Foto / Gambar Kejadian</label>
					<div className="form-upload-button">
						<button className="upload-foto-btn" type="submit">
							Pilih Foto
						</button>
					</div>
				</div> */}

        <button className="form-input-btn" type="submit" onClick={handleSubmit}>
          Kirim
        </button>

        <h3>Terima Kasih, Kami akan segera merespon Laporan Anda</h3>
      </form>
      <style>{`
			.form-lapor-content {
				display: flex;
				flex-direction: column;
				position: relative;
				align-items: center;
				font-family: "Poppins", sans-serif;
			}
			
			.form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				/* align-items: center; */
			}
			
			.form-row {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				width: 100%;
			}
			
			.form h1 {
				text-align: center;
				width: 100%;
				margin-bottom: 1rem;
				padding: 20px;
			}
			
			.form-inputs {
				margin-bottom: 15px;
			}
			
			.form-label {
				display: inline-block;
				font-size: 15px;
				margin-bottom: 6px;
			}
			
			.form-input {
				display: flex;
				padding: 10px;
				margin: 10px 40px 10px 0;
				outline: none;
				border-radius: 5px;
				height: 40px;
				width: 100%;
				border: 1px solid #d9d9d9;
				font-family: "Poppins", sans-serif;
			}
			
			.form-input-ta {
				display: flex;
				padding: 10px;
				outline: none;
				border-radius: 5px;
				/* height: 50px; */
				width: 100%;
				border: 1px solid #d9d9d9;
				font-family: "Poppins", sans-serif;
			}
			
			.form-upload-button {
				display: flex;
				padding: 10px;
				outline: none;
				border-radius: 5px;
				height: 40px;
				width: 100%;
				border: 1px solid #d9d9d9;
			}
			
			.upload-foto-btn {
				/* display: flex; */
				background-color: #d9d9d9;
				border: none;
				border-radius: 5px;
				text-align: center;
				padding: 5px;
				cursor: pointer;
				margin: 5px;
				/* font-weight: bold; */
				font-family: "Poppins", sans-serif;
			}
			
			.form-input-btn {
				width: 25%;
				height: 50%;
				padding: 10px;
				border: none;
				background-color: #2fb18b;
				color: white;
				border-radius: 10px;
				font-weight: bold;
				font-size: 18px;
				margin: 15px auto;
				font-family: "Poppins", sans-serif;
			}
			
			.form-input-btn:hover {
				cursor: pointer;
				background-color: #2da984;
				transition: all 0.4s ease-out;
			}
			
			span {
				color: red;
				font-weight: bold;
			}
			
			h3 {
				text-align: center;
				padding-bottom: 20px;
			}
			
			@media screen and (max-width: 600px) {
				.form-lapor-content {
					width: 100%;
					padding: 0;
				}
			
				.form {
					padding: 0 20px;
				}
			
				/* h3 {
					text-align: center;
					padding-bottom: 20px;
				} */
			}
			
			`}</style>
    </div>
  );
};

export default FormLapor;
