import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";

function StoreBanner() {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Image className="banner-img" src={"bannerimg1.jpg"} />
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="banner-img" src={"logo_horizontal.png"} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="banner-img" src={"bannerimg2.png"} />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default StoreBanner;