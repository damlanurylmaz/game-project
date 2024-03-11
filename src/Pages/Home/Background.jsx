import background from '../../assets/pngs/image.png';
import { BackgroundWrapper } from './Home.styled';

const Background = () => {
  return (
    <BackgroundWrapper>
        <img className='background' src={background} />
    </BackgroundWrapper>
  )
}

export default Background