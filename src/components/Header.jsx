// export default function Header() {
const nav = [

"CHARACTERS",
"COMICS",
"MOVIES",
"TV",
"GAMES",
"COLLECTTIBLES",
"VIDEOS",
"FANS",
"NEWS",
"SHOP"
]
//     return (

//         <>
//             <header className="main-header navbar navbar-expand-lg bg-light">
//                 <div className="container-fluid">

//                     {/* Logo a sinistra */}
//                     <a className="navbar-brand" href="#">
//                         <img src="../src/assets/img/dc-logo.png" alt="DC Logo" style={{ height: '40px' }} />
//                     </a>

//                     {/* Pulsante Hamburger (compare su schermi piccoli) */}
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarNav"
//                         aria-controls="navbarNav"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     {/* Contenitore del Menu (si allinea a destra e collassa) */}
//                     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                         <ul className="navbar-nav"> {/* Rimosso me-auto che sposta a sinistra */}
//                             {
//                                 nav.map((item, index) => (
//                                     <li key={index} className="nav-item">
//                                         <a className="nav-link" href="#">{item}</a>
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     </div>

//                 </div>
//             </header>

        
          
//         </>

//     )
// }

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
                                    <li key={index} className="nav-item">
                                        <a className="nav-link" href="#">{item}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </header>
        </>
    );
}

