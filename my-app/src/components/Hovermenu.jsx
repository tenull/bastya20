import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";

const HoverMenu =({ label, items, handleTopScroll })=> {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} placement="bottom-start">
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}
        color="white"
        fontWeight="medium"
        _hover={{ color: "yellow.400", bg: "transparent" }}
        _active={{ bg: "transparent" }}
        _focus={{ boxShadow: "none" }}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        fontSize={{base:'16',md:'14',lg:'14'}}
      >
        {label}
      </MenuButton>

      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        bg="rgba(0,0,0,0.55)"
        backdropFilter="blur(10px)"
        borderColor="whiteAlpha.300"
        boxShadow="xl"
        py={2}
        minW="260px"
      >
        {items.map((child) => (
          <MenuItem
            key={child.route}
            as={ReactLink}
            to={child.route}
            onClick={() => {
              handleTopScroll();
              onClose();
            }}
            bg="transparent"
            color="white"
            _hover={{ bg: "whiteAlpha.200", color: "yellow.400" }}
            _focus={{ bg: "whiteAlpha.200" }}
            py={2}
          >
            {child.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
export default HoverMenu;