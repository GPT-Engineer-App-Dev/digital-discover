import { Box, Container, Flex, Heading, HStack, Image, SimpleGrid, Text, VStack, Input, Select, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    image: "laptop.jpg",
    price: 999,
    category: "Electronics",
    brand: "BrandA",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with advanced features.",
    image: "smartphone.jpg",
    price: 799,
    category: "Electronics",
    brand: "BrandB",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet for work and play.",
    image: "tablet.jpg",
    price: 499,
    category: "Electronics",
    brand: "BrandA",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        const matchesBrand = selectedBrands.length ? selectedBrands.includes(product.brand) : true;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesSearchQuery && matchesCategory && matchesBrand && matchesPrice;
      })
    );
  }, [searchQuery]);
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

        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          mb={8}
        />

        <Select placeholder="Select category" onChange={(e) => setSelectedCategory(e.target.value)} mb={8}>
          <option value="Electronics">Electronics</option>
        </Select>

        <CheckboxGroup onChange={setSelectedBrands} mb={8}>
          <Stack spacing={5} direction="row">
            <Checkbox value="BrandA">BrandA</Checkbox>
            <Checkbox value="BrandB">BrandB</Checkbox>
          </Stack>
        </CheckboxGroup>

        <Flex mb={8}>
          <Input
            type="number"
            placeholder="Min price"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            mr={4}
          />
          <Input
            type="number"
            placeholder="Max price"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          />
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <VStack spacing={4} mt={4}>
                <Heading size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold">${product.price}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;