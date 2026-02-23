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

        axios.get(`${import.meta.env.VITE_API_URL}players/${id}`)
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
    console.log(partite_giocate);


    // conteggio delle partite in cui il giocatore ha minuti giocati > 0
    const partiteConMinuti = partite_giocate.filter(g => g?.pivot && Number(g.pivot.minuti_giocati) > 0).length;
    console.log(partiteConMinuti);

    // somma totale dei minuti giocati 
    const totaleMinuti = partite_giocate.reduce((sum, game) => {
        const minuti = game?.pivot?.minuti_giocati;
        const minuti_number = Number(minuti) || 0;
        return sum + minuti_number;
    }, 0);
    console.log(totaleMinuti);

    // somma dei gol fatti 
    const totaleGol = partite_giocate.reduce((sum, game) => {
        const gol = game?.pivot?.gol_segnati;
        const gol_number = Number(gol) || 0;
        return sum + gol_number;
    }, 0);
    console.log(totaleGol);

    // somma assist fatti 
    const totaleAssist = partite_giocate.reduce((sum, game) => {
        const assist = game?.pivot?.assist;
        const assist_number = Number(assist) || 0;
        return sum + assist_number;
    }, 0);
    console.log(totaleAssist);

    // somma cartellini gialli
    const totaleCartelliniGialli = partite_giocate.reduce((sum, game) => {
        const cartellini_gialli = game?.pivot?.cartellini_gialli;
        const cartellini_gialli_number = Number(cartellini_gialli) || 0;
        return sum + cartellini_gialli_number;
    }, 0);
    console.log(totaleCartelliniGialli);

    // somma cartellini rossi
    const totaleCartelliniRossi = partite_giocate.reduce((sum, game) => {
        const cartellini_rossi = game?.pivot?.cartellini_rossi;
        const cartellini_rossi_number = Number(cartellini_rossi) || 0;
        return sum + cartellini_rossi_number;
    }, 0);
    console.log(totaleCartelliniRossi);



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
            <h1>giocatore singolo</h1>

        </>

    )
}