import { Heading, VStack, useToast, } from "@chakra-ui/react";
import TaskList from '../components/task';
import AddTask from '../components/Addtask';
import { useState, useEffect } from 'react'
// import {toast} from "react-toastify"


function Todo() {

    const toast = useToast();
    const [tasks, setTasks] = useState(
        () => {
            const tasks: any = JSON.parse(localStorage.getItem('tasks') || '[]')
            return tasks
        }
    );

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function deleteTask(id:Number){
        const newTasks = tasks.filter((task:any) => {
            return task.id !== id;
        });
        setTasks(newTasks);
    }

    function deleteTaskAll(){
        setTasks([]);
    }

    function checkTask(id:Number){
        
        const newTasksCheck = tasks.map((task:any, index:number, array:any) => {
            if (task.id === id){
               task.check = !task.check;
            }
            return task;
        });

        setTasks(newTasksCheck);
    }

    function updateTask(id:number, body:any, onClose:any){

        const info = body.trim();

        if (!info) {
            toast({
                title: 'Enter something here!',
                position: 'top',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            });
            // toast.success("Enter something here!")
            
            return;
        }

        const newTasksUpdate = tasks.map((task:any, index:number, array:[]) => {
            if (task.id === id){
               task.body = body;
               task.check = false
            }
            return task;
        });

        setTasks(newTasksUpdate);

        onClose();
    }

    function addTask(task:String){
        setTasks([...tasks, task]);
    }

    return(
        <VStack p={4} minH='100vh' pb={28}>

            <Heading
                p='5'
                fontWeight='extrabold'
                size='xl'
                bgGradient='linear(to-l, teal.300, blue.500)'
                bgClip='text'
            >
                Workout list
            </Heading>
            <AddTask addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} checkTask={checkTask}/>
        </VStack>
    );
}

export default Todo;
