import {
 Badge,
 Box,
 Button,
 Heading,
 HStack,
 Img,
 Stack,
 Text,
 useColorMode,
 useColorModeValue as mode,
 useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export const Hero = () => {
 return (
  <Box
   as='section'
   bg={mode("gray.50", "gray.800")}
   pb='24'
   pos='relative'
   px={{ base: "6", lg: "12" }}
  >
   <Box maxW='7xl' mx='auto'>
    <Box maxW={{ lg: "md", xl: "xl" }} pt={{ base: "20", lg: "40" }} pb={{ base: "16", lg: "24" }}>
     <Heading
      as='h1'
      color={mode("red.500", "red.300")}
      size='3xl'
      lineHeight='1'
      fontWeight='extrabold'
      letterSpacing='tight'
     >
      SMS Laser & Fabrication.{" "}
      <Box as='mark' color={mode("gray.700", "red.300")} bg='transparent'>
       customized metalwork solutions.
       <Text as='span' color={mode("red.500", "red.300")}>
        &nbsp;for you.
       </Text>
      </Box>
     </Heading>
     <Text mt={4} fontSize='xl' fontWeight='medium' color={mode("gray.600", "gray.400")}>
      SMS Laser and Fabrication specializes in providing precision metal fabrication and laser
      cutting services, crafting exceptional products tailored to your needs. Discover unparalleled
      quality and expertise as we turn your visions into reality, elevating your projects to the
      next level.
     </Text>
     <Stack direction={{ base: "column", sm: "row" }} spacing='4' mt='8'>
      <Button
       size='lg'
       colorScheme='red'
       bg={mode("red.500", "red.300")}
       height='14'
       px='8'
       shadow='base'
       fontSize='md'
      >
       Get in Touch
      </Button>
      <Button
       size='lg'
       bg='white'
       color='gray.800'
       _hover={{ bg: "gray.50" }}
       height='14'
       px='8'
       shadow='base'
       fontSize='md'
      >
       Learn More
      </Button>
     </Stack>
    </Box>
   </Box>
   <Box
    pos={{ lg: "absolute" }}
    insetY={{ lg: "-6" }}
    insetEnd={{ lg: "0" }}
    bg='transparent'
    w={{ base: "full", lg: "50%" }}
    height={{ base: "full", lg: "full" }}
    sx={{
     clipPath: { lg: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
    }}
   >
    <Img
     height='90%'
     width='90%'
     objectFit='contain'
     src='/heroLaser.png'
     alt='Laser machine vector illustration'
    />
   </Box>
  </Box>
 );
};

export default Hero;
