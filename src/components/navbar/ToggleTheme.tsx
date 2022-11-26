import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ToggleTheme = (): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
			onClick={toggleColorMode}
      variant="ghost"
      fontSize={{ base:'16px', lg:'18px' }}
      fontWeight="normal"
      width={{base:'120px', lg:'160px'}}>

			{colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
		
    </Button>
	)
}
