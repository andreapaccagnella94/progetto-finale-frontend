export default function BadgeTeam({ milanIsHome, homeTeam, awayTeam }) {

    if (milanIsHome) {
        return (
            <p><span className="badge bg-success">CASA</span> VS {awayTeam} </p>

        )
    }

    return (

        <>
            <p><span className="badge bg-info">TRASFERTA</span> VS {homeTeam} </p>

        </>
    )
}