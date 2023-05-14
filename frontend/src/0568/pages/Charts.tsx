import React, { useState } from "react";
import { data } from "../data";
import BarChart from "../utils/BarChart";
import LineChatu from "../utils/LineChatu";
import AreaChart from "../utils/AreaChart";
export default function Charts() {
	const [state] = useState(data);
	return (
		<>
		  <AreaChart state={state} />
			<LineChatu state={state} />
			<BarChart state={state} />
		</>
	);
}

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap
