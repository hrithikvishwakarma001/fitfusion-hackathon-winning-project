import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
	FormControl,
	useDisclosure,
	IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { FiEdit } from "react-icons/fi";

function UpdateTask({ task, updateTask }: any) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [body, setBody] = useState("");

	return (
		<>
			<IconButton
				aria-label=''
				icon={<FiEdit />}
				isRound={true}
				onClick={onOpen}
			/>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent w='90%'>
					<ModalHeader>Update Todo </ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<Input
								placeholder='Enter here'
								defaultValue={task.body}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setBody(e.target.value)}
								onFocus={(
									e: React.FocusEvent<HTMLInputElement>
								) => setBody(e.target.value)}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button
							colorScheme='blue'
							onClick={() => updateTask(task.id, body, onClose)}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default UpdateTask;
