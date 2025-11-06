export default function DigitalEl({ }) {

    return (
        // Elemento: Digital Comics
<div className="row justify-content-around align-items-center">

        <div className="col d-flex align-items-center justify-content-center justify-content-lg-start mb-3 mb-lg-0">
            <img
                src="../src/assets/img/buy-comics-digital-comics.png"
                alt="Digital Comics"
                className="img-fluid me-3"
                style={{ height: '50px' }} />
            <p className="text-white text-uppercase m-0 d-none d-md-block">Digital Comics</p>
        </div>
         {/* Elemento 2: DC Merchandise */ }
    <div className="col d-flex align-items-center justify-content-center mb-3 mb-lg-0">
        <img
            src="../src/assets/img/buy-comics-merchandise.png"
            alt="DC Merchandise"
            className="img-fluid me-3"
            style={{ height: '50px' }}
            />
        <p className="text-white text-uppercase m-0 d-none d-md-block">DC Merchandise</p>
    </div>

    {/* Elemento 3: Subscription */ }
    <div className="col d-flex align-items-center justify-content-center mb-3 mb-lg-0">
        <img
            src="../src/assets/img/buy-comics-subscriptions.png"
            alt="Subscription"
            className="img-fluid me-3"
            style={{ height: '50px' }}
            />
        <p className="text-white text-uppercase m-0 d-none d-md-block">Subscription</p>
    </div>

    {/* Elemento 4: Comic Shop Locator */ }
    <div className="col d-flex align-items-center justify-content-center mb-3 mb-lg-0">
        <img
            src="../src/assets/img/buy-comics-shop-locator.png"
            alt="Comic Shop Locator"
            className="img-fluid me-3"
            style={{ height: '50px' }}
            />
        <p className="text-white text-uppercase m-0 d-none d-md-block">Comic Shop Locator</p>
    </div>

    {/* Elemento 5: DC Power Visa */ }
    <div className="col d-flex align-items-center justify-content-center justify-content-lg-end">
        <img
            src="../src/assets/img/buy-dc-power-visa.svg"
            alt="DC Power Visa"
            className="img-fluid me-3"
            style={{ height: '45px' }}
            />
        <p className="text-white text-uppercase m-0 d-none d-md-block">DC Power Visa</p>
    </div>

</div>
    )
}










