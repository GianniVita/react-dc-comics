import MenuItem from "./MenuItem"
// Destrutturiamo l'oggetto props per prendere solo 'nav'
export default function Header({ nav }) {

    // L'array 'nav' è stato rimosso da qui

    return (
        <>
            <header className="main-header navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    {/* Logo a sinistra */}
                    <a className="navbar-brand" href="#">
                        <img src="../src/assets/img/dc-logo.png" alt="DC Logo" style={{ height: '40px' }} />
                    </a>

                    {/* Pulsante Hamburger */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Contenitore del Menu */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                // Usiamo 'nav' che arriva dal prop
                                nav.map((item, index) => (                                    
                                    <MenuItem item={item} index={index}/>

                                ))
                            }
                        </ul>
                    </div>

                </div>
            </header>
        </>
    );
}

