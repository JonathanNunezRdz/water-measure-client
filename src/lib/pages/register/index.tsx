import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	useBreakpointValue,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useBoxBg } from 'lib/hooks';
import { type RegisterCisternDto, registerCisternSchema } from 'lib/types';

const Register: FC = () => {
	const bg = useBoxBg(0);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const label = useBreakpointValue({ base: 'form', md: 'form' });
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<RegisterCisternDto>({
		resolver: zodResolver(registerCisternSchema),
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = (values: any) => {
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				// eslint-disable-next-line no-alert
				alert(JSON.stringify(values, null, 2));
				resolve();
			}, 3000);
		});
	};

	const parse = (val: string) => val.replace(/m/, '');
	const format = (val: number) => `${val} m`;
	return (
		<Box bg={bg} borderRadius='md'>
			<Box py='2' px='4'>
				<Flex alignItems='center' my='2'>
					<Heading size='lg'>Register new cistern.</Heading>
				</Flex>
				<Box my='2'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl isInvalid={!!errors.name}>
							<FormLabel htmlFor='name'>Name</FormLabel>
							<Input
								id='name'
								placeholder='Casa XX'
								{...register('name')}
							/>
							<FormErrorMessage>
								{errors.name && errors.name.message}
							</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={!!errors.length}>
							<FormLabel htmlFor='length'>Length</FormLabel>
							<Controller
								control={control}
								name='length'
								render={({ field: { ref, ...restField } }) => (
									<NumberInput
										{...restField}
										step={0.01}
										onChange={(e) =>
											restField.onChange(
												Number.isNaN(
													parseFloat(parse(e))
												)
													? 0
													: parseFloat(parse(e))
											)
										}
										value={format(restField.value)}
									>
										<NumberInputField
											ref={ref}
											name={restField.name}
										/>
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
								)}
							/>
							<FormErrorMessage>
								{errors.length && errors.length.message}
							</FormErrorMessage>
						</FormControl>
						<Button mt='4' isLoading={isSubmitting} type='submit'>
							Submit
						</Button>
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default Register;
