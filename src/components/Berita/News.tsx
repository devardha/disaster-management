import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseClient";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { format } from "date-fns";

interface iData {
	description: string;
	id: string;
	details: string;
	bencana: string;
	date: string;
}

const News = () => {
	const [data, setData] = useState<any>([]);
	const params = useParams();

	useEffect(() => {
		(async () => {
			if (params && params.id) {
				const docRef = doc(db, "laporan", params.id);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					console.log("Document data:", docSnap.data());
					setData(docSnap.data());
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			}
		})();
	}, [params]);

	if (!params.id) return <></>;
	if (!data) return <></>;

	console.log(data);

	return (
		<div className="container">
			<div className="warp-berita">
				<div className="news-title1">{data?.description}</div>
				{/* <div className="news-image">
					<img src="/images/Gempa.png" alt="" />
				</div> */}
				<div className="warp-flex">
					<div className="news-writer">{data.name}</div>
					<div className="news-dates">
						{data.date &&
							format(new Date(data.date), "dd MMMM yyyy")}
					</div>
					<div className="news-event">
						<h4>{data.bencana}</h4>
					</div>
				</div>
				<div className="news-content">
					<p>{data.details}</p>
				</div>
			</div>

			<style>{`
            @import url("https://fonts.googleapis.com/css?family=Poppins:400,700,900");

            .warp-berita {
                padding: 40px 20px 100px 20px;
                text-align: center;
            }
            
            .news-title1 {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 40px;
                line-height: 60px;
                text-align: center;
                margin-bottom: 30px;
            }
            
            .warp-flex {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 180px;
                margin-bottom: 15px;
            }
            
            .news-event h4 {
                text-align: center;
                font-family: "Poppins";
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 27px;
                color: #5c58b8;
                border-radius: 38px;
                background: #e0e7ff;
                width: 140px;
                padding: 1px;
            }
            
            .news-dates {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                color: #000000;
            }
            
            .news-writer {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                color: #000000;
            }
            
            .news-content {
                text-align: justify;
                line-height: 30px; 
                padding-bottom: 120px; 
            }
            
            .news-content p {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                color: #000000;
            }
            
            @media screen and (max-width: 576px){
                .news-title1{
                    font-size: 20px;
                    line-height: 30px;
                }
                .news-image img{
                    display: flex;
                    width: 310px;
                    height: 200px;
                }
                .warp-flex{
                    width: 50%;
                    gap: 10px;
                    margin-left: 25%;
                    margin-top: 10px;
                    display: flex;
                    flex-direction: column;
                }
                .news-dates{
                    font-size: medium;
                }
               .news-content p{
                font-size: 16px;
               }
            }
            `}</style>
		</div>
	);
};

export default News;
