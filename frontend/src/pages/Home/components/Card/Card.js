import './Card.scss'

const Card = ( props ) => {

    const mouseDownHandler = ( event, url ) => {
        if( event.button === 0 || event.button === 1 ) {
          window.open(url)
        }
      }

    if (props.hasButtons) {
        return(
            <div className="card-wrapper">
                <header className="skill-header">{props.header}</header>
                <desc className="skill-desc">{props.desc}</desc>
                <div className="buttons-wrapper">
                    <div onMouseDown={(e) => {mouseDownHandler(e, 'https://linkedin.com/in/tkielarbb')}}>LinkedIn</div>
                    <div onMouseDown={(e) => {mouseDownHandler(e, 'https://github.com/tkielarbb')}}>Github</div>
                </div>
                
            </div>
        )

    }
    else {
        return(
            <div className="card-wrapper">
                <header className="skill-header">{props.header}</header>
                <desc className="skill-desc">{props.desc}</desc>
            </div>
        )
    }
    
}

export default Card;