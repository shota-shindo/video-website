import watch_video_style from "../../styles/watch_video/watch_video.module.css";

export default function WatchVideo() {
	return (
		<div>
			<div class={watch_video_style.main}>
				<div class={watch_video_style.videoScreen}>
					<video
						class={watch_video_style.video}
						// src=""
						controls
					></video>
				</div>
				<div class="chat-screen"></div>
			</div>
		</div>
	);
}
