import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Heading,
  MenuGroup,
  Text,
} from "@chakra-ui/react";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { AiOutlinePoweroff } from "react-icons/ai";
import { MdOutlineWbSunny } from "react-icons/md";
import { getProfile } from "../Redux/Auth/action";
import { RiMoonClearLine } from "react-icons/ri";
import { getCompletedStatus, getTodos } from "../Redux/Todos/action";
import { BsHandbag } from "react-icons/bs";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const token = localStorage.getItem("token");
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUpdate(!update);
    navigate("/login");
  };
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const todos = useSelector((state) => state.TodosReducer.todos);
  const completedTodos = useSelector(
    (state) => state.TodosReducer.completedStatus
  );

  useEffect(() => {
    dispatch(getProfile(token));
    dispatch(getTodos(token));
    dispatch(getCompletedStatus(token));
  }, [dispatch, update]);

  const handleMyAccount = () => {
    alert("Your Account Details are comming soon!");
  };

  return (
    <>
      <Box
        top={0}
        w="100%"
        position="fixed"
        zIndex={500}
        h={"100px"}
        bg={colorMode === "light" ? "#14244B" : "#14244B"}
        color={"white"}
      >
        <Box
          h={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          w={["100%", "100%", "90%"]}
          m="auto"
          gap={5}
        >
          <Flex alignItems={"center"} justifyContent={"space-around"} gap={5}>
            <Link to={"/"}>
              <Heading size={["md", "md", "md", "xl"]}>TODO LIST</Heading>
            </Link>
          </Flex>

          <Box
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={["20px", "30px"]}
            display="flex"
          >
            <Menu>
              {token ? (
                <MenuButton>
                  <Flex alignItems={"center"} color="white" gap={2}>
                    <Avatar
                      display={{ base: "flex", md: "flex" }}
                      size={"sm"}
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    />
                    <Text fontSize={"18px"}>
                      {currentUser ? currentUser.firstname : "User"}
                    </Text>
                  </Flex>
                </MenuButton>
              ) : (
                <Link to={"/login"}>
                  <Flex alignItems={"center"} color="white">
                    <HiOutlineUser size={25} />
                    <Text fontSize={"18px"}>Login</Text>
                  </Flex>
                </Link>
              )}

              {token && (
                <MenuList color={colorMode === "light" ? "black" : "white"}>
                  <MenuGroup title={currentUser.name}></MenuGroup>
                  <MenuItem>
                    <HiOutlineUser size={25} />

                    <Text ml={2} onClick={handleMyAccount}>
                      My Account
                    </Text>
                  </MenuItem>
                  <MenuItem>
                    <BsHandbag size={25} />
                    <Link to={"/"}>
                      <Text ml={2}> My Todos</Text>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <AiOutlinePoweroff size={25} />
                    <Text ml={2} onClick={handleLogout}>
                      Log Out
                    </Text>
                  </MenuItem>
                </MenuList>
              )}
            </Menu>

            <Box position={"relative"}>
              <CheckCircleIcon
                size={25}
                cursor="pointer"
                color="green"
                fontSize={"30px"}
              />
              {isAuth || token ? (
                <Flex
                  height="20px"
                  width="15px"
                  borderRadius="25px"
                  padding="5px"
                  backgroundColor="red"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  top="-10px"
                  right="-8px"
                >
                  {completedTodos.length}
                </Flex>
              ) : (
                ""
              )}
            </Box>

            <Box position={"relative"}>
              <HiOutlineShoppingCart size={25} cursor="pointer" />
              {isAuth || token ? (
                <Flex
                  height="20px"
                  width="15px"
                  borderRadius="25px"
                  padding="5px"
                  backgroundColor="red"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  top="-10px"
                  right="-8px"
                >
                  {todos.length}
                </Flex>
              ) : (
                ""
              )}
            </Box>
            <Box>
              {colorMode === "light" ? (
                <RiMoonClearLine
                  cursor={"pointer"}
                  size={25}
                  onClick={toggleColorMode}
                />
              ) : (
                <MdOutlineWbSunny
                  cursor={"pointer"}
                  size={25}
                  onClick={toggleColorMode}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
