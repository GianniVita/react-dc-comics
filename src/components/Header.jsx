export default function Hearder() {
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
    return (

        <>
        

        
            <header className="main-header navbar navbar-expand-lg bg-light">
                <img src="../src/assets/img/dc-logo.png" alt="" />
                <nav className="main-nav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            nav.map((item, index) => (
                               
                                    <li key={index} className="nav-item">
                                        <a className="nav-link" href="">{item}</a>
                                    </li>
                            ) 
                        )}
                
                    </ul>
                </nav>
            </header>
        </>

    )
}







