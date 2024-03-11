import Background from "../Home/Background"
import { BackgroundWrapper } from "../Home/Home.styled"
import { GameWrapper } from "./Game.style"

const Game = () => {
  return (
    <GameWrapper>
        <BackgroundWrapper>
            <Background />
        </BackgroundWrapper>
        
    </GameWrapper>
  )
}

export default Game