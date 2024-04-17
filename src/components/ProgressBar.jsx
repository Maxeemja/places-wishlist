import { useState, useEffect } from 'react';

const TIMER = 3000;

export default function ProgressBar() {
	const [remainingTime, setRemainingTime] = useState(TIMER);

	useEffect(() => {
		const timer = setInterval(() => {
			setRemainingTime((prev) => prev - 10);
		}, 10);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return <progress value={remainingTime} max={TIMER} />;
}
