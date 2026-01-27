import { IconButton } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const handleTopScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const NavLink = ({ children, route }) => (
  <IconButton
    fontSize='md'
    as={ReactLink}
    px="2"
    py="1"
    rounded="md"
    to={route}
    onClick={handleTopScroll}
    color='white'
    bg="transparent"
    position="relative"  
    _after={{
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '0px',
      left: '0',
      backgroundColor: 'yellow.400',
      transition: 'width 0.3s ease-in-out',
    }}
    _hover={{
      _after: {
        width: '100%',  
      },
      color: 'yellow.400',  
    }}
    _focus={{
      boxShadow: 'none',
      backgroundColor: 'transparent',
    }}
  >
    {children}
  </IconButton>
);

export default NavLink;
