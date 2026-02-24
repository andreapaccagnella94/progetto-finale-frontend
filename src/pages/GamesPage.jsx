import { useEffect, useState } from "react";
import { useGlobal } from "../contexts/GlobalContext";
import axios from "axios";
import BadgeTeam from "../components/BadgeTeam";
import BadgeScore from "../components/BadgeScore";

export default function GamesPage() {

    // recupero caricamento dal context
    const { isLoading, setIsLoading } = useGlobal();

    // memorizzo le partite
    const [games, setGames] = useState([]);

    // funzione per recuperare le partite dall'API
    function fetchGames() {
        console.log("Ricevo le partite...");
        setIsLoading(true);

        axios.get(`${import.meta.env.VITE_API_URL}/games`)
            .then(res => {
                const { data } = res.data
                setGames(data);
            })
            .catch(error => { console.log(error) })
            .then(() => { setIsLoading(false) })
    }

    // effetto per recuperare le partite al montaggio del componente
    useEffect(fetchGames, []);



    // recupero solo le partite del Milan
    const gamesMilan = games.filter(game => game.team_home.nome == "Milan" || game.team_away.nome == "Milan");


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


    return (

        <>
            <div className="fade-in">
                <h2 className="mb-4">Partite Recenti</h2>

                <div className="table-responsive">
                    <table className="table table-striped table-hover table-milan">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Avversario</th>
                                <th>Risultato</th>
                                <th>Competizione</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gamesMilan.map((game) => (
                                <tr key={game.id}>
                                    <td>{game.data}</td>
                                    <td>
                                        {game.team_home.nome === "Milan" ?
                                            (
                                                <BadgeTeam milanIsHome={true} homeTeam={game.team_home.nome} awayTeam={game.team_away.nome} />
                                            )
                                            :
                                            (
                                                <BadgeTeam milanIsHome={false} homeTeam={game.team_home.nome} awayTeam={game.team_away.nome} />
                                            )
                                        }
                                    </td>
                                    <td>
                                        {game.team_home.nome === "Milan" ?
                                            (
                                                <BadgeScore milanIsHome={true} game={game} />
                                            )
                                            :
                                            (
                                                <BadgeScore milanIsHome={false} game={game} />
                                            )
                                        }
                                    </td>
                                    <td>{game.competizione}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}