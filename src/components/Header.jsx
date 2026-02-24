import { Link, useLocation } from "react-router-dom"
import { useGlobal } from "../contexts/GlobalContext";

export default function Header() {

    const location = useLocation();

    function isActive(path) {
        return location.pathname === path
    }

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
            <header className="bg-milan text-white py-3">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <div className="d-flex align-items-center mb-3 mb-md-0">
                            <img
                                src={`${import.meta.env.VITE_API_URL_IMG}/${teamMilan.logo}`}
                                alt="Milan Logo"
                                width="30"
                                height="40"
                                className="me-2"
                            />
                            <h1 className="h4 mb-0">AC Milan Dashboard</h1>
                        </div>

                        <nav>
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${isActive('/') ? 'active bg-black' : ''} text-white`}
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${isActive('/matches') ? 'active bg-black' : ''} text-white `}
                                        to="/games"
                                    >
                                        Partite
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${isActive('/players') ? 'active bg-black' : ''} text-white`}
                                        to="/players"
                                    >
                                        Giocatori
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}