import React from "react";
import { getBodyPartList } from "../api/exercise.api";

import Card from "./Card";
import Skeleton from "../utils/Skeleton";

const IMG = [
	"https://i.pinimg.com/originals/6f/8e/de/6f8ede4dab23b0518f0efc61e5810d71.gif",
	"https://i.pinimg.com/originals/44/96/dd/4496dd7bcca41328bdc88aca13f848c8.gif",
	"https://i.pinimg.com/originals/d2/42/22/d242228e9ad2fa6abd187fc55c192248.gif",
	"https://i.pinimg.com/originals/37/1a/d4/371ad4137ee381e717e5e65113ffe4b9.gif",
	"https://i.pinimg.com/originals/2a/71/d8/2a71d8e92b4b140356e3eb8b88ec457a.gif",
	"https://mir-s3-cdn-cf.behance.net/project_modules/fs/294d6b51295485.58e8c1fd69876.gif",
	"https://i.pinimg.com/originals/76/92/a3/7692a31b4596ffa39b2a0b6430392870.gif",
	"https://i.pinimg.com/originals/16/02/46/1602465cbb925d006a15dae6fdd1e34a.gif",
	"https://i.pinimg.com/originals/31/fb/d7/31fbd7aabdf5fb2795d2673553b1dd43.gif",
	"https://mir-s3-cdn-cf.behance.net/project_modules/disp/f4864757570907.59e5e7ce6339d.gif",
];

export default function Content() {
	const [bodyPartList, setBodyPartList] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const Exerxise = async () => {
		try {
			let res = await getBodyPartList();
			setBodyPartList(res);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	React.useEffect(() => {
		Exerxise();
	}, []);

	return (
		<div className=' h-full'>
			<div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0'>
					<svg
						viewBox='0 0 88 88'
						className='w-full max-w-screen-xl text-indigo-100'>
						<circle fill='currentColor' cx='44' cy='44' r='15.5' />
						<circle
							fillOpacity='0.2'
							fill='currentColor'
							cx='44'
							cy='44'
							r='44'
						/>
						<circle
							fillOpacity='0.2'
							fill='currentColor'
							cx='44'
							cy='44'
							r='37.5'
						/>
						<circle
							fillOpacity='0.3'
							fill='currentColor'
							cx='44'
							cy='44'
							r='29.5'
						/>
						<circle
							fillOpacity='0.3'
							fill='currentColor'
							cx='44'
							cy='44'
							r='22.5'
						/>
					</svg>
				</div>
				{!loading ? (
					<div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
						{bodyPartList &&
							bodyPartList.map((item, index) => (
								<Card
									key={index}
									item={item}
									image={IMG[index]}
								/>
							))}
					</div>
				) : (
					<Skeleton arrLength={8} />
				)}
			</div>
		</div>
	);
}
