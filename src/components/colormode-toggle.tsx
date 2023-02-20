import {
  useColorMode,
  IconButton,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorModeToggle = () => {
  const { colorMode } = useColorMode();
  const { toggleColorMode } = useColorMode();
  const icon = colorMode === "dark" ? <FiSun /> : <FiMoon />;

  return (
    <Tooltip
      label={useColorModeValue(`Activate Dark Mode`, `Activate Light Mode`)}
    >
      <IconButton
        size="sm"
        fontSize="md"
        aria-label={useColorModeValue(
          `Activate Dark Mode`,
          `Activate Light Mode`
        )}
        variant="ghost"
        color="current"
        ml={{ base: "0", md: "3" }}
        onClick={toggleColorMode}
        icon={icon}
        sx={{
          position: `relative`,
          borderRadius: `5px`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          outline: `none`,
          background: `none`,
          cursor: `pointer`,
          padding: 0,
          appearance: `none`,
          "&:hover, &:focus": { opacity: 1 },
          width: `24px`,
          height: `24px`,
          border: (t) =>
            useColorModeValue(`none`, `4px solid ${t.colors.toggleIcon}`),
          backgroundColor: useColorModeValue(`transparent`, `toggleIcon`),
          transition: `all 1s ease-in-out`,
          overflow: useColorModeValue(`hidden`, `visible`),
          boxShadow: (t) =>
            useColorModeValue(
              `inset 8px -8px 0px 0px ${t.colors.toggleIcon}`,
              `none`
            ),
          "&:before": {
            content: `""`,
            position: `absolute`,
            right: `-9px`,
            top: `-9px`,
            height: `24px`,
            width: `24px`,
            border: (t) =>
              useColorModeValue(`none`, `2px solid ${t.colors.toggleIcon}`),
            borderRadius: `50%`,
            transform: useColorModeValue(
              `translate(0, 0)`,
              `translate(14px, -14px)`,
            ),
            opacity: useColorModeValue(1, 0),
            transition: `transform 1s ease-in-out`,
          },
          "&:after": {
            content: `""`,
            width: `8px`,
            height: `8px`,
            borderRadius: `50%`,
            margin: `-4px 0 0 -4px`,
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            boxShadow: (t) =>
              `0 -23px 0 ${t.colors.toggleIcon}, 0 23px 0 ${t.colors.toggleIcon}, 23px 0 0 ${t.colors.toggleIcon}, -23px 0 0 ${t.colors.toggleIcon}, 15px 15px 0 ${t.colors.toggleIcon}, -15px 15px 0 ${t.colors.toggleIcon}, 15px -15px 0 ${t.colors.toggleIcon}, -15px -15px 0 ${t.colors.toggleIcon}`,
            transform: useColorModeValue(`scale(0)`, `scale(1)`),
            transition: `all 1s ease-in-out`,
          },
        }}
      >
      </IconButton>
    </Tooltip>
  );
};

export default ColorModeToggle;
