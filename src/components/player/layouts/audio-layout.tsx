import React from "react"
import { Controls } from "@vidstack/react"

import * as Buttons from "@/components/player/controllers/buttons"
import * as Sliders from "@/components/player/controllers/sliders"
import { TimeGroup } from "@/components/player/controllers/time-group"

import "../styles/styles.css"

const AudioLayout = () => {
  return (
    <>
      <Controls.Root className="flex size-full h-14 w-full flex-col">
        <Controls.Group className="flex w-full items-center gap-1 px-3">
          <div className="flex items-center justify-between px-1">
            <Buttons.SeekBackward />
            <Buttons.Play />
            <Buttons.SeekForward />
          </div>
          <div className="flex flex-1 items-center justify-between gap-2">
            <Sliders.Time />
            <TimeGroup />
            <Buttons.Mute />
          </div>
        </Controls.Group>
      </Controls.Root>
    </>
  )
}

export default AudioLayout
