import './Landing.scss'
import Memoji from './components/Memoji/Memoji'

const Landing = () => {
    return(
        <div className="landing-wrapper">
            <Memoji className="memoji"/>
            <div className="headers">
                <header className="header" >TOMASZ KIELAR</header>
                <desc className="description">Aspiring Web & Mobile Developer</desc>
            </div>
        </div>
    )
}

export default Landing;