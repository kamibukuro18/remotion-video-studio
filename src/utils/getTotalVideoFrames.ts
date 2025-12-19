import {VideoConfig} from '../character/characterVideoConfig';

export function getTotalVideoFrames(videoConfig: VideoConfig) {
	return videoConfig.sections.reduce((prev, current) => {
		return prev + current.totalFrames;
	}, 0);
}
