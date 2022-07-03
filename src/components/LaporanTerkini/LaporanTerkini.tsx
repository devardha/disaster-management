import { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseClient";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface iData {
  description?: string;
  id: string;
  details?: string;
  bencana?: string;
  date?: any;
}

const LaporanTerkini = () => {
  const [data, setData] = useState<iData[]>([]);

  useEffect(() => {
    (async () => {
      if (data.length === 0) {
        const q = query(collection(db, "laporan"));
        const querySnapshot = await getDocs(q);

        const results: iData[] = [];
        querySnapshot.forEach((doc) => {
          results.push({
            description: doc.data().description,
            id: doc.id,
            details: doc.data().details,
            bencana: doc.data().bencana,
            date: doc.data().date,
          });
        });

        setData(results);
      }
    })();
  }, [data]);

  return (
    <div className="container">
      <div className="all-berita">
        <div className="berita">Laporan Terkini</div>
        <div className="news-warp-grid">
          {data.map((item: iData, index: number) => (
            <div className="col-nw1" key={index}>
              <div className="news-grid">
                <div className="news-event-cuaca">
                  <h4>{item.bencana}</h4>
                </div>
                <div className="news-title">
                  <Link to={`/News/${item.id}`}>{item.description}</Link>
                </div>
                <div className="news-date">
                  {format(new Date(item.date), "dd MMMM yyyy")}
                </div>
                <div className="news-article">{item.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
			@import url("https://fonts.googleapis.com/css?family=Poppins:400,700,900");

			.all-berita {
				margin: 0px 0px 50px 0;
			}
			
			.berita {
				text-align: left;
				font-family: "Poppins";
				font-style: normal;
				font-weight: 700;
				font-size: 24px;
				padding: 10px 1px;
			}
			
			.news-warp-grid {
				display: grid;
				grid-template-columns: repeat(3, minmax(0, 1fr));
				gap: 40px;
			}
			
			.news-grid {
				text-align: left;
			}

			.news-event-cuaca{
				display:flex;
			}
			
			.news-event-cuaca h4 {
				text-align: center;
				font-family: "Poppins";
				font-style: normal;
				font-weight: 600;
				font-size: 14px;
				line-height: 27px;
				color: #5c58b8;
				border-radius: 38px;
				background: #e0e7ff;
				box-sizing: border-box;
				height: 30px;
				padding: 1px 12px;
			}
			
			.news-event-gempa h4 {
				text-align: center;
				font-family: "Poppins";
				font-style: normal;
				font-weight: 600;
				font-size: 14px;
				line-height: 27px;
				color: #a93261;
				border-radius: 38px;
				background: #fce7f3;
				box-sizing: border-box;
				width: 140px;
				height: 30px;
				padding: 1px;
			}
			
			.news-title a {
				font-family: "Poppins";
				font-style: normal;
				font-weight: 600;
				font-size: 18px;
				line-height: 27px;
				color: #000000;
				margin-bottom: 10px;
				margin-bottom: 10px;
				text-decoration: none;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			
			.news-title a :hover {
				color: #5c58b8;
			}
			
			.news-date {
				font-family: "Poppins";
				font-style: normal;
				font-weight: 400;
				font-size: 12px;
				line-height: 18px;
				color: #000000;
				margin-bottom: 10px;
			}
			
			.news-article {
				font-family: "Poppins";
				font-style: normal;
				font-weight: 400;
				font-size: 16px;
				line-height: 24px;
				color: #777e8b;
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			
			@media screen and (max-width: 768px) {
				.news-warp-grid {
					grid-template-columns: repeat(2, 1fr);
					gap: 10px;
				}
			}
			
			@media screen and (max-width: 576px) {
				.news-warp-grid {
					grid-template-columns: repeat(1, 1fr);
					gap: 10px;
				}
			}
			
			`}</style>
    </div>
  );
};

export default LaporanTerkini;
