import { Button, Flex, FormControl, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos, getTodos } from "../Redux/Todos/action";

export const AddTask = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const token = localStorage.getItem("token");

  const handleAdd = () => {
    if (!inputData) {
      return toast({
        title: "Task Title Must Have Some Value",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      dispatch(addTodos(inputData))
        .then((res) => {
          if (res.payload.status === "success") {
            dispatch(getTodos(token));
            setInputData("");
            toast({
              title: res.payload.message,
              status: "success",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          } else if (res.payload.status === "info") {
            toast({
              title: res.payload.message,
              status: "info",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          } else {
            toast({
              title: res.payload.message,
              status: "error",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Flex gap={2}>
        <FormControl isRequired>
          <Input
            type="text"
            name="title"
            value={inputData}
            placeholder="Enter Task Name"
            onChange={(e) => setInputData(e.target.value)}
          />
        </FormControl>
        <Button
          onClick={handleAdd}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Add
        </Button>
      </Flex>
    </>
  );
};
