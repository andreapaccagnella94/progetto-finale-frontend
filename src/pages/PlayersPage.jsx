import axios from "axios";
import { useGlobal } from "../contexts/GlobalContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PlayerPage() {

    // recupero caricamento dal context
    const { isLoading, setIsLoading } = useGlobal();

    // memorizzare i giocatori 
    const [players, setPlayers] = useState([]);


    // funzione per recuperare i giocatori dell'API
    function fetchPlayers() {
        console.log("Ricevo i giocatori...");
        setIsLoading(true);

        axios.get(`${import.meta.env.VITE_API_URL}/players`)
            .then(res => {
                const { data } = res.data
                setPlayers(data);

            })
            .catch(error => { console.log(error); })
            .then(() => { setIsLoading(false) })

    }

    // effetto per recuperare i giocatori al montaggio del componente
    useEffect(fetchPlayers, []);

    const MilanPlyers = players.filter(player =>
        player.team.nome == "Milan"
    )

    // caricamento 
    if (isLoading) {
        return (
            <div className="loading-spinner">
                <div className="text-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Caricamento...</span>
                    </div>
                    <p className="mt-2">Caricamento giocatori...</p>
                </div>
            </div>
        );
    }

    return (

        <>
            <div className="row">
                {MilanPlyers.map((player) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={player.id}>
                        <div className="card player-card h-100">
                            <img
                                src={`${import.meta.env.VITE_API_URL_IMG}/${player.foto}` || 'https://placehold.co/300x300?text=Foto+Non+Disponibile'}
                                className="card-img-top"
                                alt={player.nome}
                                style={{ height: '400px', objectFit: 'cover', objectPosition: 'top' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{player.nome} {player.cognome}</h5>
                                <p className="card-text">
                                    <span className="badge bg-secondary me-2">{player.ruolo}</span>
                                    <span className="badge bg-danger">#{player.numero_maglia}</span>
                                </p>
                                <Link
                                    to={`/players/${player.id}`}
                                    className="btn btn-outline-danger mt-auto"
                                >
                                    Dettagli
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}