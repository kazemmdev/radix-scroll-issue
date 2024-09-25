import React from "react"
import { Menu, usePlaybackRateOptions, type MenuPlacement } from "@vidstack/react"
import { CircleMinus, CirclePlus } from "lucide-react"

import Icon from "@/components/ui/icon"

import { buttonClass } from "./buttons"

export interface SettingsProps {
  placement: MenuPlacement
}

export const Settings = ({ placement }: SettingsProps) => {
  const options = usePlaybackRateOptions()
  const [index, setIndex] = React.useState<number>(3)

  const speedUp = (val: number) => {
    if (val < options.length) {
      options[val].select()
      setIndex(val)
    }
  }

  const speedDown = (val: number) => {
    if (val > 0) {
      options[val].select()
      setIndex(val)
    }
  }

  return (
    <Menu.Root>
      <Menu.Button>
        <div className={buttonClass}>
          <Icon name="speed" className="size-6" />
        </div>
      </Menu.Button>
      <Menu.Content
        offset={2}
        className="font-sans z-50 mx-2 flex h-full max-h-[40px] min-w-[110px] flex-col overflow-hidden rounded-md bg-[#333333] p-0 px-1 text-[15px] font-medium outline-none backdrop-blur-sm transition-[height] duration-300 will-change-[height] animate-out fade-out slide-out-to-bottom-2 data-[resizing]:overflow-hidden data-[open]:animate-in data-[open]:fade-in data-[open]:slide-in-from-bottom-4"
        placement={placement}
      >
        <div className="flex w-full items-center justify-center gap-2">
          <div
            className="ring-media-focus relative flex size-8 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 focus-visible:ring-4 aria-disabled:hidden"
            onClick={() => speedDown(index - 1)}
          >
            <CircleMinus className="size-[18px]" />
          </div>
          <div className="relative inline-flex size-10 items-center justify-center">
            {options[index].label == "Normal" ? "سرعت" : options[index].label}
          </div>
          <div
            className="ring-media-focus relative flex size-8 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 focus-visible:ring-4 aria-disabled:hidden"
            onClick={() => speedUp(index + 1)}
          >
            <CirclePlus className="size-[18px]" />
          </div>
        </div>
      </Menu.Content>
    </Menu.Root>
  )
}
