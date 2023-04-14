import {
 Box,
 Container,
 Heading,
 Icon,
 Image,
 Square,
 Stack,
 Text,
 useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { features } from "./FeatureData";

export const Feature = () => (
 <Box as='section' bg='bg-surface'>
  <Container py={{ base: "12", md: "16" }} maxW={{ base: "100%", md: "90%" }}>
   <Stack spacing={{ base: "12", md: "16" }} maxW='full' mx='auto'>
    <Stack spacing={{ base: "4", md: "5" }} maxW={{ base: "xl", md: "3xl" }} mx='auto'>
     <Stack spacing='3'>
      <Heading size={useBreakpointValue({ base: "3xl", md: "2xl" })} textAlign='center'>
       Who We Are
      </Heading>
     </Stack>
     <Text color='muted' fontSize={{ base: "lg", md: "xl" }} textAlign='center'>
      Experience the unique approach of SMS Laser & Fabrication, where cutting-edge solutions and
      unmatched customer service set us apart.
     </Text>
    </Stack>
    <Stack
     direction={{ base: "column", md: "row" }}
     spacing={{ base: "12", lg: "16" }}
     maxW={{ base: "xl", md: "3xl" }}
     mx={{ base: "auto", md: "0" }}
     justifyContent='center'
    >
     <Stack spacing={{ base: "10", md: "12" }} maxW='xl' justify='center' width='full'>
      {features.map((feature) => (
       <Stack key={feature.name} spacing='4' direction='row'>
        <Square size={{ base: "10", md: "12" }} bg='red.400' color='grey.400' borderRadius='lg'>
         <Icon as={feature.icon} boxSize={{ base: "5", md: "5" }} />
        </Square>
        <Stack spacing={{ base: "4", md: "5" }} pt={{ base: "1.5", md: "2.5" }}>
         <Stack spacing={{ base: "1", md: "2" }}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight='medium'>
           {feature.name}
          </Text>
          <Text color='muted'>{feature.description}</Text>
         </Stack>
        </Stack>
       </Stack>
      ))}
     </Stack>
     <Box width='full' overflow='hidden'>
      <Image
       maxW='100%'
       borderRadius={"md"}
       minH={{ base: "100%", lg: "560px" }}
       objectFit='cover'
       src='https://images.unsplash.com/photo-1596552571892-2dda2c594670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
       alt='Laser metal engraving machine'
      />
     </Box>
    </Stack>
   </Stack>
  </Container>
 </Box>
);
