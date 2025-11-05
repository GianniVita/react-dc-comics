

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

const footListDcComics = [
    {
        item:"",
        text:"Characters"
    },
    {
        item: "",
        text: "Comics"
    },
    {
        item: "",
        text: "Movies"
    },
    {
        item: "",
        text: "TV"
    },
    {
        item: "",
        text: "Games"
    },
    {
        item: "",
        text: "Video"
    },
    {
        item: "",
        text: "News"
    },

]
const footListShop = [

     {
         item: "",
         text: "Shop DC"
     },
     {
         item: "",
         text: "Shop DC Collectibles"
     },
 ]
const footListDc = [
    {
        item: "",
        text: "Terms Of Use"
    },
    {
        item: "",
        text: "Privacy Policy (New)"
    },
    {
        item: "",
        text: "Ad Choices"
    },
    {
        item: "",
        text: "Advertising"
    },
    {
        item: "",
        text: "Jobs"
    },
    {
        item: "",
        text: "Subscriptions"
    },
    {
        item: "",
        text: "Talent Workshops"
    },
    {
        item: "",
        text: "CPSC Certificates"
    },
    {
        item: "",
        text: "Ratings"
    },
    {
        item: "",
        text: "Shop Help"
    },
    {
        item: "",
        text: "Contact Us"
    },
]
const footListSites = [
    {
        item: "",
        text: "DC"
    },
    {
        item: "",
        text: "MAD Magazine"
    },
    {
        item: "",
        text: "DC Kids"
    },
    {
        item: "",
        text: "DC Universe"
    },
    {
        item: "",
        text: "DC Power Visa"
    },
]
 


return (
    <>
        <footer className="bg-dark text-white pt-5 pb-3 footer-with-background">
            {/* Contenitore per allineare le colonne e l'immagine di sfondo */}
            <div className="container position-relative">
                <div className="row">

                    {/* Colonna 1: DC COMICS / SHOP */}
                    <div className="col-6 col-md-3 mb-4">


                        <h5 className="text-white text-uppercase fw-bold mb-3">DC COMICS</h5>
                        <ul className="list-unstyled" >
                        {
                            footListDcComics.map((footList, index) =>  (
                                <li key={index}>
                                        <a href="" className="text-white-50 text-decoration-none ">{footList.text}</a>
                                </li> 
                            ))
                            
                            
                            
                        }
                        </ul>

{/* ------------------------------------------------------------------------------- */}

                        <h5 className="text-white text-uppercase fw-bold mt-4 mb-3">SHOP</h5>
                        <ul className="list-unstyled">
                            {
                                footListShop.map((shopList, index) =>(
                                    <li key={index}>
                                        <a href="" className="text-white-50 text-decoration-none">{shopList.text}</a>
                                    </li>


                                ))
                            }
                              
                        </ul>
                    </div>

{/* ------------------------------------------------------------------------------- */}
                    {/* Colonna 2: DC */}
                    <div className="col-6 col-md-3 mb-4">
                        <h5 className="text-white text-uppercase fw-bold mb-3">DC</h5>
                        <ul className="list-unstyled">
                            {
                                footListDc.map((dcList, index) => (
                                    <li key={index}>
                                        <a href="" className="text-white-50 text-decoration-none">{dcList.text}</a>
                                    </li>


                                ))
                            }

                        </ul>
                    </div>
{/* ------------------------------------------------------------------------------- */}
                     

                    {/* Colonna 3: SITES */}
                    <div className="col-12 col-md-3 mb-4">
                        <h5 className="text-white text-uppercase fw-bold mb-3">SITES</h5>
                        <ul className="list-unstyled">
                            {
                                footListSites.map((siteList, index) => (
                                    <li key={index}>
                                        <a href="" className="text-white-50 text-decoration-none">{siteList.text}</a>
                                    </li>
                                ))
                            }
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