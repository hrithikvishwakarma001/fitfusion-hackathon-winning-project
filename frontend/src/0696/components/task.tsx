import React from 'react'
import UpdateTask from './UpdateTask';
import { DeleteTask, DeleteAllTask } from './DeleteTask';
import { HStack, Box, VStack, Flex, Text, StackDivider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'


function TaskList({ tasks, updateTask, deleteTask, deleteTaskAll, checkTask }:any) {

    if (!tasks.length) {
        return (
            <>
            {/* <Tag mt='20' p='5' variant='outline' colorScheme='gray'>
                <TagLabel>Sem Tarefas</TagLabel>
                <TagRightIcon as={BiTaskX} />
            </Tag> */}
                <Box maxW='80%'>
                    <Image mt='20px' w='98%' maxW='350' src={"https://github.com/raminhuk/react-todo-list/blob/main/src/images/empty.png?raw=true"} alt='Sua lista está vazia :(' />
                </Box>
            </>
        );
    }
  return (
      <>
        <VStack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
            p='5'
            borderRadius='lg'
            w='100%'
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
            alignItems='stretch'
            >
            
            {tasks.map((task:any) =>(
                <HStack
                key={task.id}
                opacity={task.check === true ? '0.2' : '1'}
                >
                    <Text
                        w='100%' 
                        p='8px'
                        borderRadius='lg'
                        cursor='pointer'
                        onClick={() => checkTask(task.id)}>
                        {task.body}
                    </Text>
                    <DeleteTask task={task} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} />
                    <UpdateTask task={task} updateTask={updateTask} />
                </HStack>
            ))}    
        </VStack>

        <Flex>
            <DeleteAllTask deleteTaskAll={deleteTaskAll} />
        </Flex>
    </>
  );
}

export default TaskList;