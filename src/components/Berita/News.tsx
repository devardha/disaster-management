import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseClient";
import { useEffect, useState } from "react";

interface iData {
	description: string;
	id: string;
	details: string;
	bencana: string;
	date: string;
}

const News = () => {

    const [data, setData] = useState<any>([]);
	
    const docId = '92d948bf-fdd4-48a3-904c-a738efb46617'

    useEffect(() => {
        (async () => {
            const docRef = doc(db, "laporan", docId);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setData(docSnap.data());
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })();
      }, []);

    return (
		<div className="container">
            
			<div className="warp-berita">
				<div className="news-title1">
					{data?.description}
				</div>
				<div className="news-image">
					<img src="/images/Gempa.png" alt="" />
				</div>
				<div className="warp-flex">
					<div className="news-writer">Penulis</div>
					<div className="news-dates">Senin, 6 Juni 2022</div>
					<div className="news-event">
						<h4>Gempa Bumi</h4>
					</div>
				</div>
				<div className="news-content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec eget mauris vitae nunc auctor efficitur in in
						lorem. Maecenas iaculis vulputate dolor non vulputate.
						Quisque a aliquam elit. Praesent in nisi nec mauris
						vestibulum posuere vitae eu magna. Integer feugiat
						semper urna maximus vestibulum. Duis dui tortor, lacinia
						efficitur diam sed, posuere accumsan neque. Nulla
						volutpat, mi at viverra interdum, ex est vulputate ante,
						ut aliquet neque odio sed lectus. Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Curabitur sed rutrum
						ipsum, fermentum eleifend turpis. Pellentesque vel
						lacinia odio. Nunc fringilla urna mi, vestibulum
						condimentum magna vestibulum dictum. Donec malesuada
						vestibulum odio eget fringilla. Curabitur ultrices,
						sapien vel congue fermentum, ipsum tellus convallis mi,
						vel porta arcu sem quis est.
					</p>
					<br />
					<p>
						In porttitor eget augue congue molestie. Maecenas
						vestibulum blandit sapien at mattis. Aliquam euismod
						pretium massa in pretium. Mauris non consequat nibh.
						Phasellus ipsum odio, scelerisque non pulvinar ut,
						convallis non velit. Donec auctor sagittis eros, id
						posuere turpis fermentum nec. Sed interdum tortor
						iaculis, ultricies metus eget, iaculis justo. Fusce
						elementum leo mi. Maecenas tempor a urna nec tincidunt.
					</p>
					<br />
					<p>
						Nullam volutpat semper velit imperdiet ornare. Aliquam
						auctor leo at faucibus fermentum. Sed finibus felis at
						orci maximus, vel scelerisque nulla dapibus. Cras
						malesuada rutrum tempor. Sed leo arcu, ornare a accumsan
						et, dignissim vel ligula. Pellentesque sodales id justo
						nec commodo. Sed condimentum ligula id interdum
						lobortis. Donec semper dapibus tellus ac sagittis.
						Maecenaslobortis dolor ac velit fermentum ornare. Proin
						consectetur cursus lectus et placerat. Nam non dui
						neque. Suspendisse consectetur mattis lectus, vitae
						tempus massa tincidunt sit amet.
					</p>
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
