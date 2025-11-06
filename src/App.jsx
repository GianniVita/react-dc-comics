
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Cards from "./components/Cards"
import Nav from "./components/Nav"

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



export default App

function App() {


  return (
    <>
      <Header nav={mainNavLinks} />

      <Nav />

      <Main />

      <Cards />

      <Footer />

    </>
  )
}



