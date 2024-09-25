import React from "react"
import backward from "@/styles/svg/backward.svg"
import broadcast from "@/styles/svg/broadcast.svg"
import forward from "@/styles/svg/forward.svg"
import maximize from "@/styles/svg/maximize.svg"
import minimize from "@/styles/svg/minimize.svg"
import muted from "@/styles/svg/muted.svg"
import pause from "@/styles/svg/pause.svg"
import play from "@/styles/svg/solid-play.svg"
import speed from "@/styles/svg/speed.svg"
import volume from "@/styles/svg/volume-high.svg"

export interface SvgIconProps {
    width?: number
    height?: number
    className?: string
}

type SvgComponent = React.ComponentType<SvgIconProps>

export const ICONS: Record<string, SvgComponent> = {
    muted,
    volume,
    speed,
    play,
    pause,
    maximize,
    minimize,
    forward,
    backward,
    broadcast
}
