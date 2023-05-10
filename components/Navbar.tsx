import NextLink from "next/link";
import {
 Box,
 Flex,
 Text,
 IconButton,
 Button,
 Stack,
 Collapse,
 Icon,
 Link,
 Popover,
 PopoverTrigger,
 PopoverContent,
 useColorModeValue,
 useBreakpointValue,
 useDisclosure,
 LinkOverlay,
 Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function Navbar() {
 const { isOpen, onToggle } = useDisclosure();

 return (
  <Container>
   <Box>
    <Flex
     bg={useColorModeValue("white", "gray.800")}
     color={useColorModeValue("gray.600", "white")}
     minH={"60px"}
     py={{ base: 2 }}
     px={{ base: 4 }}
     borderBottom={1}
     borderStyle={"solid"}
     borderColor={useColorModeValue("gray.200", "gray.900")}
     align={"center"}
    >
     <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
      <IconButton
       onClick={onToggle}
       icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
       variant={"ghost"}
       aria-label={"Toggle Navigation"}
      />
     </Flex>
     <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
      <Text
       textAlign={useBreakpointValue({ base: "center", md: "left" })}
       fontFamily={"heading"}
       color={useColorModeValue("gray.800", "white")}
      >
       Logo
      </Text>

      <Flex display={{ base: "none", md: "flex" }} ml={10}>
       <DesktopNav />
      </Flex>
     </Flex>

     <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
      <Button
       as={"a"}
       display={{ base: "inline-flex", md: "inline-flex" }}
       fontSize={"sm"}
       fontWeight={600}
       color={"white"}
       bg={"#ef233c"}
       href={"#"}
       _hover={{
        bg: "red.600",
       }}
      >
       Free Quote
      </Button>
     </Stack>
    </Flex>

    <Collapse in={isOpen} animateOpacity>
     <MobileNav />
    </Collapse>
   </Box>
  </Container>
 );
}

const DesktopNav = () => {
 const linkColor = useColorModeValue("gray.600", "gray.200");
 const linkHoverColor = useColorModeValue("gray.800", "white");
 const popoverContentBgColor = useColorModeValue("white", "gray.800");
 const linkHoverBgColor = useColorModeValue("gray.100", "gray.700");

 return (
  <Stack direction={"row"} spacing={4}>
   {NAV_ITEMS.map((navItem) => (
    <Box key={navItem.label}>
     <Popover trigger={"hover"} placement={"bottom-start"}>
      <PopoverTrigger>
       <Box>
        <Link
         as={NextLink}
         href={navItem.href ?? "#"}
         fontSize={"sm"}
         fontWeight={500}
         color={linkColor}
         p={2}
         borderRadius={"md"}
         _hover={{
          textDecoration: "none",
          color: linkHoverColor,
          bg: linkHoverBgColor,
         }}
        >
         {navItem.label}
        </Link>
       </Box>
      </PopoverTrigger>

      {navItem.children && (
       <PopoverContent
        border={0}
        boxShadow={"xl"}
        bg={popoverContentBgColor}
        p={4}
        rounded={"xl"}
        minW={"sm"}
       >
        <Stack>
         {navItem.children.map((child) => (
          <DesktopSubNav key={child.label} {...child} />
         ))}
        </Stack>
       </PopoverContent>
      )}
     </Popover>
    </Box>
   ))}
  </Stack>
 );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
 return (
  <Link as={NextLink} href={href}>
   <Box
    role={"group"}
    display={"block"}
    p={2}
    rounded={"md"}
    _hover={{
     bg: useColorModeValue("blue.50", "gray.700"),
     textDecoration: "none",
     borderRadius: "5px",
    }}
   >
    <Stack direction={"row"} align={"center"}>
     <Box>
      <Text transition={"all .3s ease"} _groupHover={{ color: "blue.500" }} fontWeight={500}>
       {label}
      </Text>
      <Text fontSize={"sm"}>{subLabel}</Text>
     </Box>
     <Flex
      transition={"all .3s ease"}
      transform={"translateX(-10px)"}
      opacity={0}
      _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
      justify={"flex-end"}
      align={"center"}
      flex={1}
     >
      <Icon color={"blue.500"} w={5} h={5} as={ChevronRightIcon} />
     </Flex>
    </Stack>
   </Box>
  </Link>
 );
};

const MobileNav = () => {
 return (
  <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
   {NAV_ITEMS.map((navItem) => (
    <MobileNavItem key={navItem.label} {...navItem} />
   ))}
  </Stack>
 );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
 const { isOpen, onToggle } = useDisclosure();
 const hoverBgColor = useColorModeValue("gray.100", "gray.700");

 return (
  <Stack spacing={4} onClick={children && onToggle}>
   <Flex
    as={NextLink}
    href={href ?? "#"}
    py={2}
    justify={"space-between"}
    align={"center"}
    _hover={{
     textDecoration: "none",
     bg: hoverBgColor,
     borderRadius: "md",
    }}
   >
    <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
     {label}
    </Text>
    {children && (
     <Icon
      as={ChevronDownIcon}
      transition={"all .25s ease-in-out"}
      transform={isOpen ? "rotate(180deg)" : ""}
      w={6}
      h={6}
     />
    )}
   </Flex>

   <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
    <Stack
     mt={2}
     pl={4}
     borderLeft={1}
     borderStyle={"solid"}
     borderColor={useColorModeValue("gray.200", "gray.700")}
     align={"start"}
    >
     {children &&
      children.map((child) => (
       <NextLink href={child.href ?? "#"} key={child.label}>
        <Link py={2} _hover={{ textDecoration: "none", bg: hoverBgColor, borderRadius: "md" }}>
         {child.label}
        </Link>
       </NextLink>
      ))}
    </Stack>
   </Collapse>
  </Stack>
 );
};

interface NavItem {
 label: string;
 subLabel?: string;
 children?: Array<NavItem>;
 href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
 {
  label: "Home",
  href: "/",
 },
 {
  label: "Services",
  href: "/services/",
 },
 {
  label: "Gallery",
  href: "/gallery/",
 },
 {
  label: "Contact Us",
  href: "/contact/",
 },
];
