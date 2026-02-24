import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalProvider, useGlobal } from "./contexts/GlobalContext"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import GamesPage from "./pages/GamesPage"
import PlayersPage from "./pages/PlayersPage"
import PlayerPage from "./pages/PlayerPage"


function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/players" element={<PlayersPage />} />
              <Route path="/players/:id" element={<PlayerPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
