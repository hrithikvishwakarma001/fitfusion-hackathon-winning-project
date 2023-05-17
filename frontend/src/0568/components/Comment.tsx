import { Button, Label, Modal} from "flowbite-react";
import React from "react";
import { createComment } from "../api/post.api";
import { HiArrowNarrowDown } from "react-icons/hi";
const Comment = ({ fetchPosts,postId,userId }:any) => {
	const [show, setShow] = React.useState(false);

	const onClick = () => {
		setShow(true);
	};

	const onClose = async () => {
		setShow(false);
	};
	const [comment, setComment] = React.useState<string>("");

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    const obj = { comment, postId, userId };
    console.log(obj)
    try {
      const res = await createComment(obj);
      console.log(res.data)
      setComment("");
      setShow(false);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };
	return (
		<React.Fragment>
			<Button
				onClick={onClick}
				color='gray'>
				Leave comment
				<HiArrowNarrowDown className='ml-2 h-3 w-3' />
			</Button>
			<Modal show={show} size='md' popup={true} onClose={onClose}>
				<Modal.Header />
				<Modal.Body>
					<div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='email'
									value='Leave a comment'
								/>
							</div>
							<div
								id='textarea'
								className='flex items-center mb-2'>
								<input type='hidden' name='remember' />
								<input
									type='text'
									value={comment}
									onChange={(e:any) => setComment(e.target.value)}
									className='w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm'
                  placeholder='Leave a comment'
                  autoFocus={true}
								/>
							</div>
						</div>
						<div className='w-full'>
							<Button
								color='success'
								onClick={handleSubmit}
								className='w-full'
                >
								comment
							</Button>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default Comment;
