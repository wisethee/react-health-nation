import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import Button from '../../components/button/button';
import './header.css'
const Header = () => {
  return (
    <header className=''>
      <div className='container mx-auto '>
        <nav className='' aria-label='Global'>
          <div className='header-logo'>
            <Link className='' to='/'>
              <span className='sr-only'>Health Nation</span>
              <img className='' src={logo} alt='Logo' />
            </Link>
          </div>

          <div className='button-div'>
            <Button buttonType={'transparent'}>
              Log in
              <span className='pl-2' aria-hidden='true'>
                &rarr;
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
