import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../images/carousel.png';
import Odisseia from '../../images/odisseia.png';
import BannerLivros from '../../images/banner-livros.png'
import './Carousel.css';

function BoostrapCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Odisseia}
                    alt="First slide"
                    height={600}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BannerLivros}
                    alt="Second slide"
                    height={600}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BoostrapCarousel;
