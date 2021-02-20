import { render } from '@testing-library/react';
import './Memoji.scss'
import laptopEmoji from './assets/laptop_emoji.png'

const Memoji = () => {

    return(
        <div className="img-wrapper">
            <img src={laptopEmoji}/>
        </div>
    );
}

export default Memoji;