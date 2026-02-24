import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useGlobal } from "../contexts/GlobalContext";

export default function PlayerPage() {

    // recupero caricamento dal context
    const { isLoading, setIsLoading } = useGlobal();

    // recupero l'id dall'url
    const { id } = useParams();

    // memorizzare il giocatore singolo
    const [player, setPlayer] = useState([]);

    // funzione che fetcha il giocatore singolo
    function fetchPlayer() {
        console.log("Ricevo il giocatore...");
        setIsLoading(true);

        axios.get(`${import.meta.env.VITE_API_URL}/players/${id}`)
            .then(res => {
                const { data } = res.data
                setPlayer(data)
            })
            .catch(error => { console.log(error) })
            .then(() => { setIsLoading(false) })
    }

    // effetto per recuperare il giocatore al montaggio del componente
    useEffect(fetchPlayer, []);

    // mi assicuro che sia sempre un array per usare i metodi degli array
    const partite_giocate = Array.isArray(player?.games) ? player.games : [];

    // conteggio delle partite in cui il giocatore ha minuti giocati > 0
    const partiteConMinuti = partite_giocate.filter(g => g?.pivot && Number(g.pivot.minuti_giocati) > 0).length;

    // somma totale dei minuti giocati 
    const totaleMinuti = partite_giocate.reduce((sum, game) => {
        const minuti = game?.pivot?.minuti_giocati;
        const minuti_number = Number(minuti) || 0;
        return sum + minuti_number;
    }, 0);

    // somma totale delle partite titolare 
    const totaleTitolare = partite_giocate.reduce((sum, game) => {
        const titolare = game?.pivot?.titolare;
        const titolare_number = Number(titolare) || 0;
        return sum + titolare_number;
    }, 0);

    // somma dei gol fatti 
    const totaleGol = partite_giocate.reduce((sum, game) => {
        const gol = game?.pivot?.gol_segnati;
        const gol_number = Number(gol) || 0;
        return sum + gol_number;
    }, 0);

    // somma assist fatti 
    const totaleAssist = partite_giocate.reduce((sum, game) => {
        const assist = game?.pivot?.assist;
        const assist_number = Number(assist) || 0;
        return sum + assist_number;
    }, 0);

    // somma cartellini gialli
    const totaleCartelliniGialli = partite_giocate.reduce((sum, game) => {
        const cartellini_gialli = game?.pivot?.cartellini_gialli;
        const cartellini_gialli_number = Number(cartellini_gialli) || 0;
        return sum + cartellini_gialli_number;
    }, 0);

    // somma cartellini rossi
    const totaleCartelliniRossi = partite_giocate.reduce((sum, game) => {
        const cartellini_rossi = game?.pivot?.cartellini_rossi;
        const cartellini_rossi_number = Number(cartellini_rossi) || 0;
        return sum + cartellini_rossi_number;
    }, 0);


    // caricamento 
    if (isLoading) {
        return (
            <div className="loading-spinner">
                <div className="text-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Caricamento...</span>
                    </div>
                    <p className="mt-2">Caricamento giocatore...</p>
                </div>
            </div>
        );
    }

    return (

        <>
            <div className="fade-in">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src={`${import.meta.env.VITE_API_URL_IMG}/${player.foto}` || 'https://placehold.co/300x300?text=Foto+Non+Disponibile'}
                                className="card-img-top"
                                alt={player.cognome}
                                style={{ objectFit: 'cover', height: '500px', objectPosition: 'top' }}
                            />
                            <div className="card-body text-center">
                                <h3 className="card-title">{player.nome} {player.cognome}</h3>
                                <p className="card-text">
                                    <span className="badge bg-danger">#{player.numero_maglia}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header bg-milan text-white">
                                <h4 className="mb-0">Informazioni</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <p><strong>Età:</strong> {player.eta} anni</p>
                                        <p><strong>Ruolo:</strong> {player.ruolo}</p>
                                        <p><strong>Presenze:</strong> {partiteConMinuti || 'N/A'}</p>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <p><strong>Titolare:</strong> {partiteConMinuti || 'N/A'}</p>
                                        <p><strong>Minuti giocati:</strong> {totaleMinuti || 'N/A'}</p>
                                        <p><strong>Gol:</strong> {totaleGol || 'N/A'}</p>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <p><strong>Assist:</strong> {totaleAssist || 'N/A'}</p>
                                        <p><strong>Cartellini Gialli:</strong> {totaleCartelliniGialli || 'N/A'}</p>
                                        <p><strong>Cartellini Rossi:</strong> {totaleCartelliniRossi || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}