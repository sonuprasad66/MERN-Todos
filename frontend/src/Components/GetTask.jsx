import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodos,
  getCompletedStatus,
  getTodos,
  updateTodos,
} from "../Redux/Todos/action";
import {
  Button,
  Flex,
  Box,
  FormControl,
  Input,
  useToast,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { TiMediaRecordOutline, TiMediaRecord } from "react-icons/ti";

export const GetTask = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [edit, setEdit] = useState();
  const [closeEdit, setCloseEdit] = useState(false);
  const [updatedData, setUpdatedData] = useState("");
  const toast = useToast();

  const todos = useSelector((state) => state.TodosReducer.todos);

  useEffect(() => {
    dispatch(getTodos(token));
    dispatch(getCompletedStatus(token));
  }, []);

  const handleEdit = (id) => {
    setEdit(id);
    setCloseEdit(!closeEdit);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodos({ todoId: id, title: updatedData }))
      .then((res) => {
        if (res.payload.status === "success") {
          dispatch(getTodos(token));
          setCloseEdit(false);
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
  };

  const handleDelete = (id) => {
    dispatch(deleteTodos(id))
      .then((res) => {
        if (res.payload.status === "success") {
          dispatch(getTodos(token));
          dispatch(getCompletedStatus(token));
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
  };

  const handleStatus = (id, data) => {
    dispatch(updateTodos({ todoId: id, status: data }))
      .then((res) => {
        if (res.payload.status === "success") {
          dispatch(getTodos(token));
          dispatch(getCompletedStatus(token));
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
  };

  return (
    <>
      {todos.length > 0
        ? todos.map((res) => {
            return (
              <Box key={res._id}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Flex gap={4} alignItems={"center"}>
                    <Box>
                      {res.status === "pending" ? (
                        <TiMediaRecordOutline
                          fontSize={"40px"}
                          color="grey"
                          cursor={"pointer"}
                          onClick={() => handleStatus(res._id, "completed")}
                        />
                      ) : (
                        <TiMediaRecord
                          fontSize={"40px"}
                          color="green"
                          cursor={"pointer"}
                          onClick={() => handleStatus(res._id, "pending")}
                        />
                      )}
                    </Box>
                    <Box>{res.title}</Box>
                  </Flex>
                  <Flex gap={4} alignItems={"center"}>
                    <Box>
                      <EditIcon
                        color="blue"
                        cursor={"pointer"}
                        onClick={() => handleEdit(res._id)}
                      />
                    </Box>
                    <Box>
                      <DeleteIcon
                        color="red"
                        cursor={"pointer"}
                        onClick={() => handleDelete(res._id)}
                      />
                    </Box>
                  </Flex>
                </Flex>

                {res._id === edit && closeEdit ? (
                  <Flex gap={2}>
                    <FormControl isRequired>
                      <Input
                        type="text"
                        name="title"
                        placeholder="Enter Task Name"
                        onChange={(e) => setUpdatedData(e.target.value)}
                      />
                    </FormControl>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={() => handleUpdate(res._id)}
                    >
                      Update
                    </Button>
                  </Flex>
                ) : (
                  ""
                )}
              </Box>
            );
          })
        : "🤩 Your Todos List Is Empty! 🤩"}
    </>
  );
};
