import React from 'react';
import background from './assets/Resume_Background.png';
import avatar from './assets/Final.png';
import telegram from './assets/Telegram.svg';
import viber from './assets/Viber.svg';
import gmail from './assets/Gmail.svg';
import phone from './assets/Phone.svg';
import discord from './assets/Discord.svg';
import './App.css';

function App() {

    return (
        <body>
        <div className="app_container">
            <img className="background" src={background} alt="Background" />
            <div className="left_side">
                <img className="avatar" src={avatar} alt="Avatar" />
                <h1 className="text_first_left_side">Alexander Hlushko</h1>
                <button className="button_secondary_left_side">❯ Intro</button>
                <button className="button_secondary_left_side">❯ Education and courses</button>
                <button className="button_secondary_left_side">❯ Work Experience</button>
                <button className="button_secondary_left_side">❯ Skills</button>
                <button className="button_secondary_left_side">❯ Portfolio</button>
                <div className="images_bottom_left_side">
                    <img src={telegram} alt="Telegram"/>
                    <img src={viber} alt="Viber"/>
                    <img src={phone} alt="Phone"/>
                    <img src={gmail} alt="Gmail"/>
                    <img src={discord} alt="Discord"/>
                </div>
            </div>
            <div className="page_main">
                <div className="page_main_strip"></div>
                <div className="text_first_right_side">
                    <img className="avatar_page_main" src={avatar} alt="Avatar"/>
                    <div className="text_right_side_container">
                        <h1 className="text_right_side_container_top_text">Hi, I'm Alexander Hlushko<br /></h1>
                        Developer in seek of myself<br />
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}

export default App;