import React from "react";
import { useParams } from "react-router-dom";
import { getLIstByBodyPart } from "../api/exercise.api";
import ExerciseCard from "./ExerciseCard";
import Skeleton from "../utils/Skeleton";
const Exercise = () => {
	const { query } = useParams();
	const [exercise, setExercise] = React.useState<any>(null);

	const getData = async () => {
		let res = await getLIstByBodyPart(query);
		setExercise(res);
	};

	React.useEffect(() => {
		getData();
	}, []);
	console.log("exercise", exercise);
	return (
		<div className=' h-full'>
			<div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				{exercise ? (
					<div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
						{exercise &&
							exercise.map((item: any) => (
								<ExerciseCard {...item} key={item.id} />
							))}
					</div>
				) : <Skeleton arrLength={8}/>}
			</div>
		</div>
	);
};

export default Exercise;
