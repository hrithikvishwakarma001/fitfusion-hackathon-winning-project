import React from "react";
import { useParams } from "react-router-dom";
import {
	getLIstByBodyPart,
	getEquipmentList,
	getListByEquipment,
	getMusculeTargetList,
	getListByMusculeTarget,
} from "../api/exercise.api";
import ExerciseCard from "./ExerciseCard";
import Skeleton from "../utils/Skeleton";
import DropDown from "../utils/DropDown";
import Pagination from "./Pagination";
const Exercise = () => {
	const { query } = useParams();
	const [exercise, setExercise] = React.useState<any>(null);
	const [equipment, setEquipment] = React.useState<any>(null);
	const [target, setTarget] = React.useState<any>(null);
	const [selected, setSelected] = React.useState<any>({});
	// const [page, setPage] = React.useState(1);
	const getData = async ({
		type,
		payload,
	}: {
		type: string;
		payload: string;
	}) => {
		let bodypart = await getLIstByBodyPart(query);
		let equip = await getEquipmentList();
		let targetList = await getMusculeTargetList();

		setEquipment(equip);
		setTarget(targetList);
		switch (type) {
			case "Equipment":
				let list = await getListByEquipment(payload);
				setExercise(list);
				break;
			case "Target Muscle":
				let list2 = await getListByMusculeTarget(payload);
				setExercise(list2);
				break;
			default:
				setExercise(bodypart);
				break;
		}
	};

	React.useEffect(() => {
		getData(selected);
	}, [selected]);
	// console.log("exercise", exercise);
	// console.log("equipment", equipment);
	// console.log("target", target);
	const handleClick = (value: any) => {
		setSelected(value);
	};
	return (
		<div className=' h-full'>
			<div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				
				<DropDown
					item={equipment}
					onClick={(item: string) => handleClick(item)}
					label='Equipment'
				/>
				<DropDown
					item={target}
					onClick={(item: string) => handleClick(item)}
					label='Target Muscle'
				/>
				{exercise ? (
					<>
						<div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
							{exercise &&
								exercise.map((item: any) => (
									<ExerciseCard {...item} key={item.id} />
								))}
						</div>
						{/* <Pagination
							setPage={setPage}
							totalPage={Math.ceil(exercise.length / 8)}
							page={page}
						/> */}
					</>
				) : (
					<Skeleton arrLength={8} />
				)}
			</div>
		</div>
	);
};

export default Exercise;
