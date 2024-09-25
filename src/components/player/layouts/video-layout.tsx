import React from "react"
import { Controls, Gesture } from "@vidstack/react"

import * as Buttons from "@/components/player/controllers/buttons"
import { BufferingIndicator } from "@/components/player/controllers/loader"
import * as Menus from "@/components/player/controllers/settings"
import * as Sliders from "@/components/player/controllers/sliders"
import { TimeGroup } from "@/components/player/controllers/time-group"
import { Title } from "@/components/player/controllers/title"

import "../styles/styles.css"

export interface VideoLayoutProps {
  thumbnails?: string
}

const VideoLayout = ({ thumbnails }: VideoLayoutProps) => {
  return (
    <>
      <Gestures />
      <Controls.Root className="absolute inset-0 z-10 flex size-full flex-col opacity-0 shadow-[inset_0_0_180px_72px_#00000080] transition-opacity data-[visible]:opacity-100">
        <BufferingIndicator />
        <Controls.Group className="flex w-full items-center gap-4 p-3">
          <Buttons.Mute />
          <Buttons.AirPlay />
        </Controls.Group>
        <Controls.Group className="flex size-full items-center justify-center gap-2">
          <Buttons.SeekBackward />
          <Buttons.BigPlay />
          <Buttons.SeekForward />
        </Controls.Group>
        <Controls.Group className="flex w-full flex-col items-center px-3">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-between gap-2">
              <TimeGroup />
              <Title />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Menus.Settings placement="top end" />
              <Buttons.Fullscreen />
            </div>
          </div>
          <Sliders.Time className="pb-3 pt-2" />
        </Controls.Group>
      </Controls.Root>
    </>
  )
}

const Gestures = () => {
  return (
    <>
      <Gesture
        className="absolute inset-0 z-0 block size-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block size-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className="absolute left-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className="absolute right-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </>
  )
}

export default VideoLayout
