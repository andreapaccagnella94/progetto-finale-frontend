import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
// importo solo una volta la hook del Loading
import { useGlobal } from "../contexts/GlobalContext";
import Loading from "../components/Loading"

export default function DefaultLayout() {

    // destrutturo la hook
    const { isLoading } = useGlobal();

    return (
        <>
            <Header />
            {isLoading && <Loading />}
            <main>
                <div className="container mt-4">
                    <Outlet />
                </div>
            </main>
            <Footer />

        </>
    )
}