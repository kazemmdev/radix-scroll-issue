"use client"

import React from "react"
import { ICONS, SvgIconProps } from "@/configs/icons"

interface Props extends SvgIconProps {
  name: string
}

const Icon = ({ name, height = 20, width = 20, className }: Props) => {
  const SvgIcon = ICONS[name]

  if (!SvgIcon) {
    return <div>Icon {name} not found</div>
  }

  return <SvgIcon width={width} height={height} className={className} />
}

export default Icon
