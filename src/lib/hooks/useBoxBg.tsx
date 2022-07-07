import { useColorModeValue } from '@chakra-ui/react';

export const useBoxBg = (level: number) => {
	const lightShade = 200 + level * 100;
	const darkShade = 700 - level * 100;
	return useColorModeValue(`gray.${lightShade}`, `gray.${darkShade}`);
};
