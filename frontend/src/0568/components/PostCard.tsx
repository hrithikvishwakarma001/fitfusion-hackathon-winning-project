import React, { useCallback, useState } from "react";
import { Button, Timeline, Tooltip } from "flowbite-react";
import {
	HiArrowNarrowDown,
	HiArrowNarrowRight,
	HiCalendar,
} from "react-icons/hi";
import { createComment } from "../api/post.api";
import { toast, ToastContainer, ToastContent } from "react-toastify";
export const PostCard = ({
	posts,
	loading,
	fetchPosts,
}: {
	posts: any[];
	loading?: boolean;
	fetchPosts: () => void;
}) => {
	const [showComment, setShowComment] = useState<boolean[]>(
		new Array(posts.length).fill(false)
	);

	const [comment, setComment] = useState<string[]>([]);

	/// use callback hook to prevent re-rendering
	const handleChange = useCallback(
		(index: number, value: string) => {
			setComment((prevComments) => {
				const updatedComments = [...prevComments];
				updatedComments[index] = value;
				return updatedComments;
			});
		},
		[setComment]
	);

	const handleHideShow = (index: number) => {
		setShowComment((prev) => {
			const updated = [...prev];
			updated[index] = !updated[index];
			return updated;
		});
		// console.log(showComment[index]);
	};

	const handleSubmit = async (index: number, postId: any, userId: any) => {
		const obj = { comment: comment[index], postId, userId };
		console.log(obj);
		if(!comment[index]) return toast.error("comment cannot be empty");
		try {
			const res = await createComment(obj);
			if (res.data.message === "comment added successfully") {
				toast.success(res.data.message);
			} else {
				toast.error("something went wrong");
			}
			setComment([]);
			fetchPosts();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4 bg-slate-50'>
			<ToastContainer />
			<div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
				{!loading ? "Discussions" : "loading..."}
			</div>
			<Timeline>
				{posts.map((post, index) => (
					<React.Fragment key={post._id}>
						<Timeline.Item>
							<Timeline.Point icon={HiCalendar} />
							<Timeline.Content>
								<Timeline.Time>{post.createdAt}</Timeline.Time>
							</Timeline.Content>
							<div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 my-5'>
								<p className='text-sm text-gray-900 bg-purple-200 px-1 mb-4'>
									#{post._id}
								</p>
								<div className='flex items-center justify-between mb-2'>
									<p className='text-lg font-bold leading-5'>
										<Timeline.Title>
											{post.title}
										</Timeline.Title>
									</p>

									<p className='flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50'>
										{/* {post.comments.length} */}
										<Tooltip
											content={"comments"}
											style='light'>
											{post.comments.length}
										</Tooltip>
									</p>
								</div>
								<p className='text-sm text-gray-900'>
									<Timeline.Body>
										{post.description}
									</Timeline.Body>
								</p>
							</div>
							<div className='flex items-center justify-between mb-2 w-full'>
								{/* <Comment
									fetchPosts={fetchPosts}
									postId={post._id}
									userId={post.userId}
								/> */}
								<Button
									onClick={() => handleHideShow(index)}
									color='gray'
									size={"sm"}
									className='mr-2 duration-300  hover:-translate-y-1'>
									{showComment[index]
										? "Hide comments"
										: "Show comments"}
								</Button>
								<Button
									onClick={() =>
										handleSubmit(
											index,
											post._id,
											post.userId
										)
									}
									className='duration-300  hover:-translate-y-1'
									color='gray'
									size={"sm"}>
									Leave comment
									<HiArrowNarrowDown className='ml-2 h-3 w-3' />
								</Button>
								<input
									type='text'
									className='w-2/3 px-4 duration-300  hover:-translate-y-1 py-2 border-none rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
									 bg-purple-200
									 '
									placeholder='write a comment...'
									onChange={(e) => {
										handleChange(index, e.target.value);
									}}
									value={comment[index] || ""}
								/>
							</div>
						</Timeline.Item>
						{showComment[index] && (
							<Timeline.Item>
								{post.comments.map(
									(comment: any, index: number) => (
										<React.Fragment key={comment._id}>
											<Timeline.Point />
											<Timeline.Content>
												<Timeline.Time>
													{" "}
													{comment.createdAt}
												</Timeline.Time>
												<Timeline.Title>
													{comment.comment}{" "}
													{index ===
														post.comments.length && (
														<span className='text-sm text-gray-900 bg-purple-200 px-1 mb-4'>
															new
														</span>
													)}
												</Timeline.Title>
											</Timeline.Content>
										</React.Fragment>
									)
								)}
							</Timeline.Item>
						)}
					</React.Fragment>
				))}
			</Timeline>
		</div>
	);
};
<Timeline.Item>
	<Timeline.Point icon={HiCalendar} />
	<Timeline.Content>
		<Timeline.Time>February 2022</Timeline.Time>
		<Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
		<Timeline.Body>
			Get access to over 20+ pages including a dashboard layout, charts,
			kanban board, calendar, and pre-order E-commerce & Marketing pages.
		</Timeline.Body>
		<Button color='gray'>
			Learn More
			<HiArrowNarrowRight className='ml-2 h-3 w-3' />
		</Button>
	</Timeline.Content>
</Timeline.Item>;
