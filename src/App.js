import React,{useState, useEffect} from 'react';
import NavBars from './Navbars';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function App(){
  return <AppContainer/>
}

function AppContainer() {
  const [theme, setTheme] = useState('light');
  const [selectedSection, setSelectedSection] = useState("about");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  }

  return (
    <div className='appContainer'>
      <ContainerLeft theme={theme} onThemeChange={handleThemeChange}/>
      <ContainerRight selectedSection={selectedSection} handleSectionClick={setSelectedSection} theme={theme}/>
    </div>
  )
}

function ContainerLeft({theme, onThemeChange}) {

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(prevState => !prevState);
  }


  return (
    <div className={`containerLeft ${theme}`}>
      <div className='content'>
        <ContainerLeftTop onClick={handleClick} showDetails={showDetails} theme={theme}/>
        <ContainerLeftBody showDetails={showDetails} theme={theme}/>
        <ContainerLeftBottom showDetails={showDetails} onThemeChange={onThemeChange} theme={theme}/>
      </div>
    </div>
  )
}

function ContainerLeftTop({ onClick, showDetails, theme }) {
  return (
    <div className={`containerLeftTop ${theme}`}>
      <div className='icon'>
        <button onClick={onClick}>
          <i className={`fa-solid ${showDetails? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>
      </div>

      <div className='details'>
        <img src='Neville.jpg'></img>

        <div className='name_profession'>
          <h3>NEVILLE KHABUCHI</h3>
          <p>Software Engineer</p>
        </div>
      </div>
    </div>
  )
}

function ContainerLeftBody({ showDetails, theme }) {
  return (
    <div className={`containerLeftBody ${showDetails ? 'show' : ''} ${theme}`}>
      <div className='contact'>
        <i class="fa-solid fa-envelope"></i>
        <div className='email'>
          <p><b>EMAIL:</b></p>
          <p>nevillekhabuchi@gmail.com</p>
        </div>
      </div>

      <div className='contact'>
        <i class="fa-solid fa-phone"></i>
        <div className='phone'>
          <p><b>PHONE:</b></p>
          <p>0792333663</p>
        </div>
      </div>

      <div className='contact'>
        <i class="fa-solid fa-calendar-days"></i>
        <div className='birthDate'>
          <p><b>BIRTHDAY:</b></p>
          <p>May 24</p>
        </div>
      </div>

      <div className='contact'>
        <i class="fa-solid fa-location-dot"></i>
        <div className='location'>
          <p><b>LOCATION:</b></p>
          <p>Kakamega, Kenya</p>
        </div>
      </div>

      <div className='socialMedia'>
        <a href='https://github.com/NEVILLEKHABUCHI' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-square-github"></i></a>
        <a href='https://www.linkedin.com/in/neville-khabuchi-b65478261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-linkedin"></i></a>
        <a href='https://x.com/NL_Khabuchi?s=09' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-square-x-twitter"></i></a>
        <a href='https://www.facebook.com/share/1A1jhzGiRi/' target='_blank' rel='noopener noreferrer'><i class="fa-brands fa-square-facebook"></i></a>
      </div>
    </div>
  )
}

function ContainerLeftBottom({showDetails, onThemeChange, theme }) {
  return (
    <div className={`containerLeftBottom ${showDetails ? 'show' : ''} ${theme}`}>
      <div>
        <p><i className="fa solid fa-palette" id='icon'></i><b>Themes</b></p>

      <section>
        <input type='radio' value='light' id='light' name='theme' onChange={onThemeChange} defaultChecked/>
        <label for='light'><b>Light</b></label><br/>
      </section>

      <section>
        <input type='radio' value='dark' id='dark' name='theme' onChange={onThemeChange}/>
        <label for='dark'><b>Dark</b></label><br/>
      </section>
      </div>
    </div>
  )
}

function ContainerRight({ selectedSection, handleSectionClick, theme }) {
  return (
    <div className={`containerRight ${theme}`}>
        <NavBars selectedSection={selectedSection} handleClick={handleSectionClick}/>
        <div className='contentSection'>
          {selectedSection === "about" && <About />}
          {selectedSection === "resume" && <Resume />}
          {selectedSection === "portfolio" && <Portfolio />}
          {selectedSection === "contact" && <Contact />}
        </div>
    </div>
  )
}