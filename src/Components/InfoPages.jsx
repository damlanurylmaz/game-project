import Header from './Header'
import { InfoPagesWrapper } from '../Pages/HeaderPages/Style/About.styled'
import { useParams } from 'react-router';

const InfoPages = () => {
  const { page } = useParams();
  console.log(page);

  const getTitle = (page) => {
    switch (page) {
      case 'about':
        return 'About Us';
      case 'contact':
        return 'Contact Us';
      case 'privacy':
        return 'Privacy Policy';
      default:
        return 'Info Page';
    }
  };

  return (
    <InfoPagesWrapper>
        <div className='header'>
            <Header />
        </div>
        <div className='content-wrapper'>
            <div className="content">
                <h2>{getTitle(page)}</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis scelerisque fermentum dui faucibus in. In massa tempor nec feugiat nisl. Vitae semper quis lectus nulla at volutpat diam. Duis tristique sollicitudin nibh sit. Eu tincidunt tortor aliquam nulla facilisi cras. Gravida cum sociis natoque penatibus et magnis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Magna eget est lorem ipsum. Duis tristique sollicitudin nibh sit amet. Purus semper eget duis at tellus at urna condimentum. At augue eget arcu dictum varius duis at. Amet risus nullam eget felis eget. Nullam non nisi est sit amet facilisis. Viverra accumsan in nisl nisi. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Et tortor at risus viverra adipiscing at in tellus. Lorem donec massa sapien faucibus et molestie ac feugiat. Amet venenatis urna cursus eget.
                Velit dignissim sodales ut eu sem. Leo a diam sollicitudin tempor id eu nisl nunc. Bibendum neque egestas congue quisque. Nec ultrices dui sapien eget mi proin. Integer quis auctor elit sed vulputate mi sit. Quis eleifend quam adipiscing vitae proin. Nec sagittis aliquam malesuada bibendum. Ac felis donec et odio pellentesque diam. Malesuada nunc vel risus commodo viverra maecenas accumsan. Egestas quis ipsum suspendisse ultrices gravida dictum. Eu nisl nunc mi ipsum. Non odio euismod lacinia at quis risus sed. Tortor at auctor urna nunc id cursus metus. Non blandit massa enim nec dui nunc. Nunc faucibus a pellentesque sit amet. Viverra nam libero justo laoreet sit amet cursus sit. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Viverra suspendisse potenti nullam ac tortor vitae. Massa ultricies mi quis hendrerit dolor magna eget est lorem.
                </p>
            </div>
        </div>
    </InfoPagesWrapper>
  )
}

export default InfoPages