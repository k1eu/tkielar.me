import Navbar from '../../components/Navbar/Navbar';
import Landing from './components/Landing/Landing'
import Card from './components/Card/Card'
import './Home.scss';


const Home = ( props ) => {
  let headers = [
    "Skills",
    "Multilingual",
    "Additional Info"
  ]

  let descriptions = [
    "I started my journey with coding apps for iOS with Swift. Currently I'm learning React for frontend applications and Python for backend ones",
    "I'm native polish speaker but I also speak English. To prove my skills I've acquired C2 Certificate from LanguageCert  in their LTE Exam. I do also have basic knowledge of German",
    "I'm daily user of Github so I'm used to working with git when I work on web app I do designs myself"
  ]
  
  return (
    <div className="main">
      <Navbar />
      <Landing />
      <div className="cards-wrapper"> 
        <Card header={headers[0]} desc={descriptions[0]} hasButtons={false} />
        <Card header={headers[1]} desc={descriptions[1]} hasButtons={false} />
        <Card header={headers[2]} desc={descriptions[2]} hasButtons={true} />
      </div>
    </div>
  );
}

export default Home;
