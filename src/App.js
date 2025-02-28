import React,{useState} from 'react';
import NavBars from './Navbars';

export default function App(){
  return <AppContainer/>
}

function AppContainer() {
  return (
    <div className='appContainer'>
      <ContainerLeft/>
      <ContainerRight/>
    </div>
  )
}

function ContainerLeft() {

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(prevState => !prevState);
  }


  return (
    <div className='containerLeft'>
      <div className='content'>
        <ContainerLeftTop onClick={handleClick} showDetails={showDetails}/>
        <ContainerLeftBody showDetails={showDetails}/>
      </div>
    </div>
  )
}

function ContainerLeftTop({ onClick, showDetails }) {
  return (
    <div className='containerLeftTop'>
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

function ContainerLeftBody({ showDetails }) {
  return (
    <div className={`containerLeftBody ${showDetails ? 'show' : ''}`}>
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
          <p>May 24, 2004</p>
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

function ContainerRight() {
  return (
    <div className='containerRight'>
        <NavBars />
    </div>
  )
}