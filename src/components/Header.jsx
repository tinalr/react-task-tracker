import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  return (
    <>
      <header className='header'>
        <h1 style={headingStyle}>
          Task Tracker: {title} List
        </h1>
        <Button color='green' text='Add Item' />
      </header>
    </>
  );
}

Header.defaultProps = {
  title: 'Unnamed'
}

Header.propTypes = {
  title: PropTypes.string,
}

// CSS in JS Styling Option:
const headingStyle = {
  // color: 'violet',
  // backgroundColor: 'gray'
}

export default Header;
