import { GameWrapper } from "./Game.styled";
import Header from '../../Components/Header';
import GameComment from "./Components/GameComment";
import TowersOfHanoi from "./Components/TowersOfHanoi";

const Game = () => {

  return (
    <GameWrapper>
      <div className='header'>
        <Header />
      </div>
      <div className='game-detail-wrapper'>
        <div className='game-container'>
          <TowersOfHanoi />
        </div>
        <GameComment />
      </div>
    </GameWrapper>
  )
}

export default Game