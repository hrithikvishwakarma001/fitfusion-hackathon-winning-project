import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    useDisclosure,
    IconButton
  } from '@chakra-ui/react'
  import { FiTrash2 } from 'react-icons/fi'

  

  function DeleteAllTask({ deleteTaskAll }:any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                colorScheme='gray'
                px='8'
                h='45'
                color='gray.500'
                mt='8'
                onClick={onOpen}
                >
                Delete all todos
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w='90%'>
                <ModalHeader>
                    Want to delete all?
                </ModalHeader>
                <ModalFooter>
                <Button mr={3} onClick={onClose}>No</Button>
                <Button colorScheme='blue' onClick={() => deleteTaskAll()}>
                    Yes
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
  }

  function DeleteTask({ task, deleteTask}:any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <IconButton
            aria-label=""
            icon={<FiTrash2 />}
            isRound={true}
            onClick={onOpen}
        />

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w='90%'>
            <ModalHeader>
                Want to delete this todo?
            </ModalHeader>
            <ModalBody>
                <Text>{task.body}</Text>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onClose}>No</Button>
              <Button colorScheme='blue' onClick={() => deleteTask(task.id, onClose)}>
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export { DeleteTask, DeleteAllTask }