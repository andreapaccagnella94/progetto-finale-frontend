export default function BadgeScore({ game, milanIsHome }) {

    return (

        <>
            <strong>{game.gol_casa} - {game.gol_trasferta} </strong>
            {milanIsHome && game.gol_casa > game.gol_trasferta &&

                <span class="badge bg-success">V</span>

            }
            {!milanIsHome && game.gol_casa < game.gol_trasferta &&

                <span class="badge bg-success">V</span>

            }
            {milanIsHome && game.gol_casa == game.gol_trasferta &&

                <span class="badge bg-warning">P</span>

            }
            {!milanIsHome && game.gol_casa == game.gol_trasferta &&

                <span class="badge bg-warning">P</span>

            }
            {milanIsHome && game.gol_casa < game.gol_trasferta &&

                <span class="badge bg-danger">S</span>

            }
            {!milanIsHome && game.gol_casa > game.gol_trasferta &&

                <span class="badge bg-danger">S</span>

            }

        </>
    )
}