import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";

function StoreBanner() {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Image className="banner-img" src={"p1.png"} />
                    <Carousel.Caption>
                        <p>텍스트 삽입 가능</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="banner-img" src={"p2.png"} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="banner-img" src={"p3.png"} />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default StoreBanner;