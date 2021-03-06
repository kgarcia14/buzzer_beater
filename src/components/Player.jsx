import PlayerInfo from'./PlayerInfo';

const Player = (props) => {
    const { playerArray } = props;
    console.log(playerArray)

    return (
        <ul>
            {playerArray.map((player, index) => {
                    return (
                        <PlayerInfo player={player} key={index} />
                    )
                })}
        </ul>
    )
}

export default Player;