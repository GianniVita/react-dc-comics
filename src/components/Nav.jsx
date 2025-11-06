

export default function Nav() {
    return (
        <div>
            {/* Passiamo l'array come prop al componente Hearder */}
            <Header nav={mainNavLinks} />

            <main>
                <h1>Contenuto Principale</h1>
            </main>
        </div>
    );
}