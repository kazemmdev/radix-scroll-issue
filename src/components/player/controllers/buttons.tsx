import {
  AirPlayButton,
  FullscreenButton,
  MuteButton,
  PlayButton,
  SeekButton,
  useMediaState
} from "@vidstack/react"

import { cn } from "@/lib/utils"
import Icon from "@/components/ui/icon"

export const buttonClass =
  "group ring-media-focus relative flex !size-8 min-w-8 cursor-pointer items-center justify-center rounded-[8px] outline-none ring-inset hover:bg-white/20 focus-visible:ring-4 aria-disabled:hidden"

export const tooltipClass =
  "animate-out fade-out slide-out-to-bottom-2 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in data-[state=delayed-open]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white parent-data-[open]:hidden"

export function Play() {
  const isPaused = useMediaState("paused")
  return (
    <PlayButton className={buttonClass}>
      {isPaused ? (
        <Icon name="play" className="size-8" />
      ) : (
        <Icon name="pause" className="size-8" />
      )}
    </PlayButton>
  )
}

export function BigPlay() {
  const isPaused = useMediaState("paused")
  return (
    <PlayButton className={cn(buttonClass, "!size-14")}>
      {isPaused ? (
        <Icon name="play" className="size-8" />
      ) : (
        <Icon name="pause" className="size-8" />
      )}
    </PlayButton>
  )
}

export function AirPlay() {
  return (
    <AirPlayButton className={cn(buttonClass)}>
      <Icon name="broadcast" className="size-6" />
    </AirPlayButton>
  )
}

export function SeekForward() {
  return (
    <SeekButton seconds={10} className={cn(buttonClass, "!size-10")}>
      <Icon name="forward" className="size-8" />
    </SeekButton>
  )
}

export function SeekBackward() {
  return (
    <SeekButton seconds={-10} className={cn(buttonClass, "!size-10")}>
      <Icon name="backward" className="size-8" />
    </SeekButton>
  )
}

export function Mute() {
  const volume = useMediaState("volume"),
    isMuted = useMediaState("muted")
  return (
    <MuteButton className={buttonClass}>
      {isMuted || volume == 0 ? (
        <Icon name="muted" className="size-6" />
      ) : volume < 0.5 ? (
        <Icon name="volume" className="size-6" />
      ) : (
        <Icon name="volume" className="size-6" />
      )}
    </MuteButton>
  )
}

export function Fullscreen() {
  const isActive = useMediaState("fullscreen")
  return (
    <FullscreenButton className={buttonClass}>
      {isActive ? (
        <Icon name="minimize" className="size-6" />
      ) : (
        <Icon name="maximize" className="size-6" />
      )}
    </FullscreenButton>
  )
}
