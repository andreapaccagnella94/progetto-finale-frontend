import { Link } from "react-router-dom";
import { useGlobal } from "../contexts/GlobalContext";


export default function HomePage() {

    // recupero caricamento dal context
    const { isLoading, teamMilan } = useGlobal();



    // caricamento 
    if (isLoading) {
        return (
            <div className="loading-spinner">
                <div className="text-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Caricamento...</span>
                    </div>
                    <p className="mt-2">Caricamento squadre...</p>
                </div>
            </div>
        );
    }

    // evita di accedere a teamMilan.logo quando teamMilan è ancora undefined
    if (!teamMilan) {
        console.log('teamMilan non ancora disponibile');
        return (
            <div className="loading-spinner">
                <div className="text-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Caricamento...</span>
                    </div>
                    <p className="mt-2">Caricamento squadre...</p>
                </div>
            </div>
        );
    }

    return (
        <>

            <div className="fade-in">
                <div className="text-center mb-5">
                    <img
                        src={`${import.meta.env.VITE_API_URL_IMG}/${teamMilan.logo}`}
                        alt="AC Milan Logo"
                        className="mb-4"
                        style={{ width: '150px', height: '200px' }}
                    />
                    <h1 className="display-4 fw-bold">Benvenuto nel Cuore del Milan Stagione 2025/2026!</h1>
                    <p className="lead">
                        Scopri le ultime partite e i tuoi giocatori preferiti.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-5 mb-4">
                        <div className="card card-milan h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Partite Recenti</h5>
                                <p className="card-text">
                                    Guarda i risultati delle ultime partite giocate dal Milan.
                                </p>
                                <Link
                                    to="/matches"
                                    className="btn btn-milan mt-auto align-self-start"
                                >
                                    Vedi Partite
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 mb-4">
                        <div className="card card-milan h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Elenco Giocatori</h5>
                                <p className="card-text">
                                    Esplora tutti i giocatori attuali del Milan con statistiche dettagliate.
                                </p>
                                <Link
                                    to="/players"
                                    className="btn btn-milan mt-auto align-self-start"
                                >
                                    Elenco Giocatori
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}