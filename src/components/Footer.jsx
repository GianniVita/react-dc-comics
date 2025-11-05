

export default function Footer() {
const socials = [

    { 
        img:"../src/assets/img/footer-facebook.png",
        text:"Facebook"
    },
    {
        img: "../src/assets/img/footer-twitter.png",
        text: "Twitter"
    },
    {
        img: "../src/assets/img/footer-youtube.png",
        text: "Youtube"
    },
    {
        img: "../src/assets/img/footer-pinterest.png",
        text: "Pinterest"
    },
    {
        img: "../src/assets/img/footer-periscope.png",
        text: "Periscope"
    }
]




   
 


return (
    <>
        <footer className="bg-dark text-white pt-5 pb-3 footer-with-background">
            {/* Contenitore per allineare le colonne e l'immagine di sfondo */}
            <div className="container position-relative">
                <div className="row">

                    {/* Colonna 1: DC COMICS / SHOP */}
                    <div className="col-6 col-md-3 mb-4">
                        {/* L'elemento IMG è stato rimosso da qui */}
                        <h5 className="text-white text-uppercase fw-bold mb-3">DC COMICS</h5>
                        <ul className="list-unstyled">
                            <li><a href="" className="text-white-50 text-decoration-none">Characters</a></li>
                            <li><a href="" className="text-white-50 text-decoration-none">Comics</a></li>
                            <li><a href="" className="text-white-50 text-decoration-none">Movies</a></li>
                            <li><a href="" className="text-white-50 text-decoration-none">TV</a></li>
                            <li><a href="" className="text-white-50 text-decoration-none">Games</a></li>
                            <li><a href="" className="text-white-50 text-decoration-none">Videos</a></li>
                            <li><a href="" className="text-white-50 text-decoration-none">News</a></li>
                        </ul>

                        <h5 className="text-white text-uppercase fw-bold mt-4 mb-3">SHOP</h5>
                        <ul className="list-unstyled">
                            <li><a href="/shop-dc" className="text-white-50 text-decoration-none">Shop DC</a></li>
                            <li><a href="/shop-collectibles" className="text-white-50 text-decoration-none">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                    {/* Colonna 2: DC */}
                    <div className="col-6 col-md-3 mb-4">
                        <h5 className="text-white text-uppercase fw-bold mb-3">DC</h5>
                        <ul className="list-unstyled">
                            <li><a href="/terms" className="text-white-50 text-decoration-none">Terms Of Use</a></li>
                            <li><a href="/privacy" className="text-white-50 text-decoration-none">Privacy Policy (New)</a></li>
                            <li><a href="/ad-choices" className="text-white-50 text-decoration-none">Ad Choices</a></li>
                            <li><a href="/advertising" className="text-white-50 text-decoration-none">Advertising</a></li>
                            <li><a href="/jobs" className="text-white-50 text-decoration-none">Jobs</a></li>
                            <li><a href="/subscriptions" className="text-white-50 text-decoration-none">Subscriptions</a></li>
                            <li><a href="/talent" className="text-white-50 text-decoration-none">Talent Workshops</a></li>
                            <li><a href="/cpsc" className="text-white-50 text-decoration-none">CPSC Certificates</a></li>
                            <li><a href="/ratings" className="text-white-50 text-decoration-none">Ratings</a></li>
                            <li><a href="/shop-help" className="text-white-50 text-decoration-none">Shop Help</a></li>
                            <li><a href="/contact" className="text-white-50 text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Colonna 3: SITES */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="text-white text-uppercase fw-bold mb-3">SITES</h5>
                        <ul className="list-unstyled">
                            <li><a href="/dc-site" className="text-white-50 text-decoration-none">DC</a></li>
                            <li><a href="/mad-magazine" className="text-white-50 text-decoration-none">MAD Magazine</a></li>
                            <li><a href="/dc-kids" className="text-white-50 text-decoration-none">DC Kids</a></li>
                            <li><a href="/dc-universe" className="text-white-50 text-decoration-none">DC Universe</a></li>
                            <li><a href="/dc-power-visa" className="text-white-50 text-decoration-none">DC Power Visa</a></li>
                        </ul>
                    </div>

                    
                    <div className="col-md-3 d-none d-md-block">
                        <img src="../src/assets/img/dc-logo-bg.png" alt="DC Logo" className="img-fluid" style={{ height: '500px', width:'500px' }} /> 
                    </div>

                </div>
            </div>

        </footer>
      

          
        <div className="bottom-footer bg-dark py-4">
            <div className="container">
                {/* d-flex e justify-content-between per allineare gli estremi */}
                <div className="d-flex justify-content-between align-items-center">

                    {/* ⬅️ Pulsante "SIGN-UP NOW!" (Sinistra) */}
                    <div>
                        <button className="btn btn-outline-primary btn-lg fw-bold px-4 py-2">
                            SIGN-UP NOW.
                        </button>
                    </div>

                    {/* ➡️ Social Media (Destra) */}
                    <div className="d-flex align-items-center">
                        <h5 className="text-primary text-uppercase fw-bold m-0 me-3">
                            FOLLOW US
                        </h5>
                        <ul className="list-unstyled d-flex m-0">
                        {
                            socials.map((social, index) => (
                                <li key={index} className="ms-3">
                                    <a href="#">
                                        <img src={social.img} alt={social.text} style={{ height: '24px' }} />
                                    </a>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>

)

}










                               
                               
                               





