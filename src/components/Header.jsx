import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
    <>
      <header>
        <h1>Task Tracker: {title} List</h1>
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

export default Header;
