import {
  Box,
  Center,
  CheckboxIcon,
  Flex,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
const Chat = () => {
  return (
    <>
      <VStack w="100%" h="100vh" bg="#fdfdfd" justify={"center"}>
        <Text
          fontSize={"2xl"}
          fontWeight={800}
          w="100%"
          h="100px"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          color="#fff"
          textAlign={"center"}
          lineHeight={"100px"}
        >
          HEADER
        </Text>
        <Box w="60%" h="calc(100vh - 200px)" bg="red"></Box>
        <InputGroup w="60%" h="50px">
          <Input placeholder="Enter amount" h="100%" />
          <InputRightElement
            h="100%"
            children={
              <Button
                bg={"none"}
                _hover={{ background: "none" }}
                leftIcon={
                  <Icon
                    as={BsFillSendFill}
                    color="gray.600"
                    boxSize={25}
                    h="100%"
                    mx="20px"
                  />
                }
              />
            }
          />
        </InputGroup>
      </VStack>
    </>
  );
};

export default Chat;
