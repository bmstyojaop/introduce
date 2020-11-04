import React from 'react'
import HeaderList from './HeaderList';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Header = () => {
  return (
    <header className="HeaderBox">
        <div className="HeaderBox__left">
            <Link to="/">
                <img className="HeaderBox__left--logo"/>
            </Link>
        </div>
        <ul className="HeaderBox__links">
            <HeaderList url="/About" className="HeaderBox__links--element" string="About" />
            <HeaderList url="/Warks" className="HeaderBox__links--element" string="Works" />
            {/* <HeaderList url="#" className="HeaderBox__links--element" string="Contact" /> */}
            <a href="https://qiita.com/TasLearnProgram">
                <li className="HeaderBox__links--element">Qiita</li>
            </a>
            <a href="https://twitter.com/TasLearnProgram" className="Twitter">
                <li className="HeaderBox__links--icon">
                  <IconContext.Provider
                    value={{
                      style: {
                        fontSize:'30px',
                        color: 'rgb(0, 123, 255)',
                      },
                    }}
                  >
                    <FaTwitter />
                  </IconContext.Provider>
                </li>
            </a>
            <a href="https://github.com/bmstyojaop?tab=repositories">
                <li className="HeaderBox__links--icon">
                    <IconContext.Provider
                        value={{
                          style: {
                            fontSize:'30px',
                            color: '#000',
                          },
                        }}
                    >
                        <FaGithub />
                    </IconContext.Provider>
                </li>
            </a>
        </ul>
    </header>
  )
}
export default Header