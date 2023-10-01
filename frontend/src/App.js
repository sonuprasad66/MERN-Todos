import { AllRoutes } from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";

import "./App.css";
import { Navbar } from "./Components/Navbar";
function App() {
  return (
    <>
      <Box className="font-face-pt">
        <Navbar />
        <AllRoutes />
      </Box>
    </>
  );
}

export default App;
