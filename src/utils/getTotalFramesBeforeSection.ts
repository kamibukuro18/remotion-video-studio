import {VideoConfig} from '../character/characterVideoConfig';

export function getTotalFramesBeforeSection(
	videoConfig: VideoConfig,
	sectionIndex: number
) {
	let cumulateFrames = 0;
	for (let i = 0; i < sectionIndex; i++) {
		cumulateFrames += videoConfig.sections[i].totalFrames;
	}

	return cumulateFrames;
}
