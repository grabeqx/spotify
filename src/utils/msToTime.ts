export const msToTime = (duration: number): string => {
	const seconds = Math.floor((duration / 1000) % 60);
	const minutes = Math.floor((duration / (1000 * 60)) % 60);

	const pareseM = minutes < 10 ? '0' + minutes : minutes;
	const pareseS = seconds < 10 ? '0' + seconds : seconds;

	return pareseM + ':' + pareseS;
};
