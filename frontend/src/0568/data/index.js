export const data = {
		options: {
			colors: ["#E91E63", "#FF9800"],
			chart: {
				id: "basic-bar",
			},
			xaxis: {
				categories: [
					"day-1",
					"day-2",
					"day-3",
					"day-4",
					"day-5",
					"day-6",
					"day-7",
					"day-8",
				],
			},
		},
		series: [
			{
				name: "gain",
				data: [30, 40, 45, 50, 49, 60, 70, 91],
			},
			{
				name: "loss",
				data: [3, 60, 35, 80, 49, 70, 20, 81],
			},
		],
	}