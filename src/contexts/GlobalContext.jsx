import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// creo il contesto
const GlobalContext = createContext();

// definisco un custom Provider
function GlobalProvider({ children }) {
    // variabili di stato che voglio condividere
    const [isLoading, setIsLoading] = useState(false);

    // memorizzare le squadre
    const [teams, setTeams] = useState([]);


    // funzione per recuperare i giocatori dell'API
    function fetchTeams() {
        console.log("Ricevo le squadre...");
        setIsLoading(true);

        axios.get(`${import.meta.env.VITE_API_URL}/teams`)
            .then(res => {
                const { data } = res.data
                setTeams(data);

            })
            .catch(error => { console.log(error); })
            .then(() => { setIsLoading(false) })

    }

    // effetto per recuperare le squadre al montaggio del componente
    useEffect(fetchTeams, []);

    const teamMilan = teams.find(team => team.nome == "Milan")
    console.log(teamMilan);

    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading, teamMilan }}>
            {children}
        </GlobalContext.Provider>
    )
}

// definisco una hook personalizzata
function useGlobal() {
    return useContext(GlobalContext);
}

// esportiamo provider e hook
export { GlobalProvider, useGlobal }