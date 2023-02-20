import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        animate={{ y: 0, opacity: 1 }}
        transition={"all 1.5s ease-in-out"}
      >
        <IconButton
          aria-label="Switch theme"
          variant="ghost"
          icon={useColorModeValue(<FiMoon />, <FiSun />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
