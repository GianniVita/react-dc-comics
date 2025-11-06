
import Footer from "./components/Footer"
import Hearder from "./components/Header"
import Main from "./components/Main"
import Cards from "./components/Cards"

function App() {


  return (
    <>
      <Header />

      <Main />

      <Footer />

    </>
  )
}

export default App



// Definiamo l'array nav qui
const mainNavLinks = [
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
];

export default function Header() {
  return (
    <div>
      {/* Passiamo l'array come prop al componente Hearder */}
      <Header nav={mainNavLinks} />

      {/* Il resto del tuo contenuto */}
      <main>
        <h1>Contenuto Principale</h1>
      </main>
    </div>
  );
}