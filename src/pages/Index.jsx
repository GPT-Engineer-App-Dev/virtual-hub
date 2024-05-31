import { Container, VStack, Box, Text, Heading, Image, IconButton, Link, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="200px">
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1712847331947-9460dd2f264b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTcxNDE2OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Full Stack Developer | JavaScript Enthusiast | Open Source Contributor
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
        </HStack>
        <HStack spacing={4}>
          <Link href="https://facebook.com/johndoe" isExternal>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          </Link>
          <Link href="https://instagram.com/johndoe" isExternal>
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </Link>
          <Link href="https://youtube.com/johndoe" isExternal>
            <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" />
          </Link>
          <Link href="https://tiktok.com/@johndoe" isExternal>
            <IconButton aria-label="TikTok" icon={<FaTiktok />} size="lg" />
          </Link>
          <Link href="https://pinterest.com/johndoe" isExternal>
            <IconButton aria-label="Pinterest" icon={<FaPinterest />} size="lg" />
          </Link>
        </HStack>
        <Box textAlign="center">
          <Text fontSize="lg" mt={4}>
            Hi, I'm John! I specialize in building high-quality web applications. Feel free to connect with me on social media or check out my work on GitHub.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
