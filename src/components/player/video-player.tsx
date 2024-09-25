import "@vidstack/react/player/styles/base.css"

import React from "react"
import { MediaPlayer, MediaPlayerInstance, MediaProvider, Poster } from "@vidstack/react"

import AudioLayout from "@/components/player/layouts/audio-layout"
import VideoLayout from "@/components/player/layouts/video-layout"

interface VideoPlayerProps {
  src: string
  poster?: string
  autoplay?: boolean
  type?: "video" | "audio"
}

const VideoPlayer = ({ src, poster, autoplay = true, type = "video" }: VideoPlayerProps) => {
  const player = React.useRef<MediaPlayerInstance>(null)

  React.useEffect(() => {
    return player.current!.subscribe(({ paused }) => {
      console.log("is paused?", paused)
      // console.log("is audio view?", viewType === "audio")
    })
  }, [])

  return (
    <MediaPlayer
      dir={"ltr"}
      src={src}
      ref={player}
      crossOrigin
      playsInline
      viewType={type}
      autoPlay={autoplay}
      className="aspect-video w-full overflow-hidden bg-slate-900 text-white data-[focus]:ring-4 md:rounded-md"
      streamType="on-demand"
    >
      <MediaProvider>
        <Poster
          className="absolute inset-0 block size-full rounded-md object-cover opacity-0 transition-opacity data-[visible]:opacity-100"
          src={poster}
          alt="poster"
        />
      </MediaProvider>
      {type == "video" && <VideoLayout />}
      {type == "audio" && <AudioLayout />}
    </MediaPlayer>
  )
}

export default VideoPlayer
