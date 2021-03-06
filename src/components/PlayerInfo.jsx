import Styled from 'styled-components';

const Ul = Styled.ul`
    list-style-type: none;
    text-align: center;
    margin-top: 30px;
    margin-right: 70px;
`;

const Li = Styled.li`
margin-bottom: 5px;
color: #fff;
`;

const Label = Styled.label`
    font-weight: bold;
    font-style: italic;
    font-size: 1.1rem;
    color: #fff;
`;

const PlayerInfo = (props) => {
    const { player } = props;
    console.log('details are', player);

    return (
        <Ul>
            <Label>Name:</Label>
            <Li>{player.data[0].first_name} {player.data[0].last_name}</Li>
            <Label>Height:</Label>
            <Li>{player.data[0].height_feet}' {player.data[0].height_inches}''</Li>
            <Label>Position:</Label>
            <Li>{player.data[0].position}</Li>
            <Label>Plays For:</Label>
            <Li>{player.data[0].team.full_name}</Li>
        </Ul>
    )
}

export default PlayerInfo;