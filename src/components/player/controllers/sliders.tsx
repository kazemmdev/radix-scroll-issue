import { useEffect, useState } from "react"
import * as Slider from "@radix-ui/react-slider"
import { formatTime, useMediaRemote, useMediaState, useSliderPreview } from "@vidstack/react"

import { cn } from "@/lib/utils"

export function Volume() {
  const volume = useMediaState("volume"),
    canSetVolume = useMediaState("canSetVolume"),
    remote = useMediaRemote()

  if (!canSetVolume) return null

  return (
    <Slider.Root
      className="group relative inline-flex h-10 w-full max-w-[80px] cursor-pointer touch-none select-none items-center outline-none"
      value={[volume * 100]}
      onValueChange={([value]) => {
        remote.changeVolume(value / 100)
      }}
    >
      <Slider.Track className="relative h-[5px] w-full rounded-sm bg-white/30">
        <Slider.Range className="absolute h-full rounded-sm bg-white will-change-[width]" />
      </Slider.Track>
      <Slider.Thumb
        aria-label="Volume"
        className="group-hocus:opacity-100 block size-[15px] rounded-full border border-[#cacaca] bg-white opacity-0 outline-none ring-white/40 transition-opacity will-change-[left] focus:opacity-100 focus:ring-4"
      />
    </Slider.Root>
  )
}

export interface TimeSliderProps {
  className?: string
}

export function Time({ className }: TimeSliderProps) {
  const time = useMediaState("currentTime"),
    canSeek = useMediaState("canSeek"),
    duration = useMediaState("duration"),
    seeking = useMediaState("seeking"),
    remote = useMediaRemote(),
    step = (1 / duration) * 100,
    [value, setValue] = useState(0),
    { previewRootRef, previewRef, previewValue } = useSliderPreview({
      clamp: true,
      offset: 6,
      orientation: "horizontal"
    }),
    previewTime = (previewValue / 100) * duration

  useEffect(() => {
    if (seeking) return
    setValue((time / duration) * 100)
  }, [time, duration])

  return (
    <Slider.Root
      className={cn(
        "group relative inline-flex h-1 w-full cursor-pointer touch-none select-none items-center outline-none",
        className
      )}
      name={"video-time"}
      value={[value]}
      disabled={!canSeek}
      step={Number.isFinite(step) ? step : 1}
      ref={previewRootRef}
      onValueChange={([value]) => {
        setValue(value)
        remote.seeking((value / 100) * duration)
      }}
      onValueCommit={([value]) => {
        remote.seek((value / 100) * duration)
      }}
    >
      <Slider.Track className="relative h-1 w-full rounded-sm bg-white/30">
        <Slider.Range className="absolute h-full rounded-sm bg-white will-change-[width]" />
      </Slider.Track>
      <div
        className="pointer-events-none absolute flex flex-col items-center opacity-0 transition-opacity duration-200 will-change-[left] data-[visible]:opacity-100"
        ref={previewRef}
      >
        <span className="rounded-sm bg-[#333333] px-2 py-1 text-[13px]">
          {formatTime(previewTime)}
        </span>
      </div>
    </Slider.Root>
  )
}
