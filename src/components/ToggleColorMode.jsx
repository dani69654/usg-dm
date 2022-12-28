import { useColorMode } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === 'dark' ? <SunIcon color="orange.200" /> : <MoonIcon color="blue.700" />}
      onClick={toggleColorMode}
    />
  );
};

export default ToggleColorMode;
