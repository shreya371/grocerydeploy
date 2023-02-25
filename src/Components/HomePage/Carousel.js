
import gs1 from '../images/grocery -store1.jpg';
import gs2 from '../images/grocery-store2.png';
import M from "materialize-css/dist/js/materialize.min.js";
const Carousel = () => {



    setTimeout(() => {
        var elem = document.querySelector('.carousel');
        var instance = M.Carousel.init(elem, {});

        if (document.querySelector('.photos').classList) {
            document.querySelector('.photos').classList.remove("spinner")
        }


    }, 0)

    return (<div>
        <div >
            <div class="carousel carousel-slider center ">
                <div class="carousel-fixed-item center">
                    <a class="btn waves-effect orange red-text black-text-2">Order now</a>
                </div>
                <div class="carousel-item #ffffff white" href="#one!">
                    <p class="black-text"><img src={gs1} /></p>
                </div>
                <div class="carousel-item #ffffff white" href="#two!">

                    <p class="black-text"><img src={gs2} /></p>
                </div>

            </div>
        </div>
    </div>);
}

export default Carousel;