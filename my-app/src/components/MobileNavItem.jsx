import React from 'react';
import axios from 'axios';
import { TbTruckDelivery } from "react-icons/tb";
import {
    ChevronDownIcon,
    CloseIcon,
    HamburgerIcon,
    SearchIcon,
} from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { TbShoppingCart } from 'react-icons/tb';
import { logout } from '../redux/actions/userActions';
import {
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Popover,
    PopoverBody,
    PopoverTrigger,
    PopoverContent,
    Box,
    Flex,
    HStack,
    Icon,
    Stack,
    Text,
    useColorModeValue as mode,
    useDisclosure,
    AlertDescription,
    Alert,
    AlertIcon,
    AlertTitle,
    Divider,
    Image,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Spacer,
    useToast,
    Collapse
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsPhoneFlip } from 'react-icons/bs';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import NavLink from './NavLink';
import ColorModeToggle from './ColorModeToggle';
import { BiUserCheck, BiLogInCircle } from 'react-icons/bi';
import { toggleFavorites } from '../redux/actions/productActions';
import { googleLogout } from '@react-oauth/google';
import { FaBasketShopping } from "react-icons/fa6";
import { searchProducts } from '../redux/actions/searchActions';
import ScrollToTopButton from './ScrollToButton';
import ScrollToTopOnEnter from './ScrollToTopOnEnter';
import { categoryData } from '../categoryData';
import { Link } from 'react-router-dom';

// Links for navigation
const Links = [
    { name: 'Termékek', route: '/termekek' },
    { name: 'Akció', route: '/akciok' },
    { name: 'Kapcsolat', route: '/kapcsolat' },
];


const MobileNavItem = ({ label, children, onClose, handleClickToTop }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    // IconButton hover style colors
    const hoverBg = mode('gray.100', 'transparent');
    const hoverColor = mode('black', 'white');

    const hoverBg2 = mode('gray.100', 'transparent');
    const hoverColor2 = mode('black', 'white');
  
    return (
      <Stack spacing={0}>
        <Box
          px={4}
          py={2}
          as="button"
          onClick={onToggle}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: 'none',
            backgroundColor: hoverBg, // Apply similar background hover effect
            color:(mode('black','white')), // Change text color on hover
          }}
        >
          <Text fontWeight={600} color={mode('black', 'white')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              color={mode('black', 'white')}
            />
          )}
        </Box>
  
        {children &&
          children.map((child) => (
            <Collapse in={isOpen} animateOpacity key={child.name} style={{ marginTop: '0!important' }}>
              <Stack
                m={0}
                pl={4}
                borderLeft={1}
                borderStyle={'solid'}
                borderColor={mode('gray.200', 'gray.700')}
                align={'start'}
                as={Link}
                to={child.link}
                onClick={() => {
                  onClose();
                  handleClickToTop();
                }}
                backgroundColor="transparent"
                overflowY="auto"
                maxH="40vh"
                spacing={0}
               
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: hoverBg2, // Apply similar background hover effect
                    color:(mode('black','white')), // Change text color on hover
                  }}
              >
                <Box
                  color={mode('black', 'black')}
                 w='100%'
                  fontWeight="500"
                  py={2}
                  display="flex"
                  alignItems="center"
                  m={0}
                  _hover={{color:(mode('black','white'))}}
                  onClick={() => {
                    onClose();
                    handleClickToTop();
                  }}
                >
                  <Image
                    src={child.image}
                    alt={child.name}
                    boxSize="30px"
                    borderRadius="full"
                    mr="12px"
                  />
                  {child.name}
                </Box>
              </Stack>
            </Collapse>
          ))}
      </Stack>
    );
  };
  
  export default MobileNavItem;