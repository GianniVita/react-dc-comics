
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

export function Header() {
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