import { Dropdown } from "flowbite-react";
import React from "react";
const DropDown = ({
	item,
	onClick,
	label,
}: {
	item: string[];
	onClick: any;
	label: string;
}) => {
	return (
		<div
			{...(label === "Equipment"
				? { className: "absolute top-0 right-0 mt-4 mr-4" }
				: { className: "absolute top-0 right-[10rem] mt-4 ml-4" })}>
			<Dropdown label={label}>
				<Dropdown.Header>
					<span className='block truncate text-sm font-medium'>
						Select {label} Type
					</span>
				</Dropdown.Header>
				<div className='w-64 h-64 overflow-y-auto '>
					{item &&
						item.map((item: any) => (
							<Dropdown.Item
								key={item}
								onClick={() => onClick({ type: label, payload:item })}>
								{item}
							</Dropdown.Item>
						))}
				</div>
			</Dropdown>
		</div>
	);
};

export default DropDown;
