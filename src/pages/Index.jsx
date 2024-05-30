import { Box, Container, Flex, Heading, HStack, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: "laptop.jpg",
    price: "$999",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with advanced features.",
    image: "smartphone.jpg",
    price: "$799",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet for work and play.",
    image: "tablet.jpg",
    price: "$499",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Heading>Welcome to ElectroShop</Heading>
        <Text fontSize="lg" textAlign="center">
          Your one-stop shop for the latest electronics. Browse our collection of high-quality products.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <VStack spacing={4} mt={4}>
                <Heading size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;