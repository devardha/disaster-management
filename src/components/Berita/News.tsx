import "./News.css";

const News = () => {

    return (
        <div className="container">
            <div className="warp-berita">
                <div className="news-title1">Gempa bumi mengguncang pesisir selatan Sumatra Barat</div>
                <div className="news-image">
                    <img src="/images/Gempa.png" alt="" />
                </div>
                <div className="warp-flex">
                    <div className="news-writer">Penulis</div>
                    <div className="news-dates">Senin, 6 Jumi 2022</div>
                    <div className="news-event">
                        <h4>Gempa Bumi</h4>
                    </div>
                </div>
                <div className="news-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mauris vitae nunc auctor efficitur in in lorem. Maecenas iaculis vulputate dolor non vulputate. Quisque a aliquam elit. Praesent in nisi nec mauris vestibulum posuere vitae eu magna. Integer feugiat semper urna maximus vestibulum. Duis dui tortor, lacinia efficitur diam sed, posuere accumsan neque. Nulla volutpat, mi at viverra interdum, ex est vulputate ante, ut aliquet neque odio sed lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed rutrum ipsum, fermentum eleifend turpis. Pellentesque vel lacinia odio. Nunc fringilla urna mi, vestibulum condimentum magna vestibulum dictum. Donec malesuada vestibulum odio eget fringilla. Curabitur ultrices, sapien vel congue fermentum, ipsum tellus convallis mi, vel porta arcu sem quis est.
                    </p>
                    <br />
                    <p>
                        In porttitor eget augue congue molestie. Maecenas vestibulum blandit sapien at mattis. Aliquam euismod pretium massa in pretium. Mauris non consequat nibh. Phasellus ipsum odio, scelerisque non pulvinar ut, convallis non velit. Donec auctor sagittis eros, id posuere turpis fermentum nec. Sed interdum tortor iaculis, ultricies metus eget, iaculis justo. Fusce elementum leo mi. Maecenas tempor a urna nec tincidunt.
                    </p>
                    <br />
                    <p>
                        Nullam volutpat semper velit imperdiet ornare. Aliquam auctor leo at faucibus fermentum. Sed finibus felis at orci maximus, vel scelerisque nulla dapibus. Cras malesuada rutrum tempor. Sed leo arcu, ornare a accumsan et, dignissim vel ligula. Pellentesque sodales id justo nec commodo. Sed condimentum ligula id interdum lobortis. Donec semper dapibus tellus ac sagittis. Maecenaslobortis dolor ac velit fermentum ornare. Proin consectetur cursus lectus et placerat. Nam non dui neque. Suspendisse consectetur mattis lectus, vitae tempus massa tincidunt sit amet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default News;