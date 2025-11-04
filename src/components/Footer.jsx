export default function Footer() {
    
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

                        {/* Colonna 4 (spesso contiene il logo DC grande di sfondo) */}
                        <div className="col-md-3 d-none d-md-block">
                            {/* Potresti inserire un grande logo DC qui se fa parte del design */}
                            {/* <img src="../src/assets/img/dc-logo-bg.png" alt="DC Logo" className="img-fluid"/> */}
                        </div>

                    </div>
                </div>

                <hr className="bg-secondary my-4" />

                {/* Sezione del bottone "SIGN-UP NOW!" */}
                <div className="container text-center">
                    <button className="btn btn-outline-primary btn-lg fw-bold px-5 py-2">
                        SIGN-UP NOW!
                    </button>
                </div>
            </footer>
        
        </>

    )

}
        
        
        
        
        
        