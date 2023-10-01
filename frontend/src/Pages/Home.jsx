import React, { useEffect } from "react";
import {
  Flex,
  Box,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetTask } from "../Components/GetTask";
import { AddTask } from "../Components/AddTask";
import { useNavigate } from "react-router";
import { getCompletedStatus, getTodos } from "../Redux/Todos/action";
import { useDispatch } from "react-redux";

export const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    dispatch(getTodos(token));
    dispatch(getCompletedStatus(token));
  }, []);

  return (
    <>
      <Flex
        minH={"100vh"}
        justify={"center"}
        marginTop={"100px"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Todos List</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Box>
                <AddTask />
              </Box>
              <Box>
                <GetTask />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
