import { Time } from "@vidstack/react"

export function TimeGroup() {
  return (
    <div className="flex items-center justify-between text-sm font-medium">
      <Time className="time" type="current" />
      <span className="time px-1">/</span>
      <Time className="time" type="duration" />
    </div>
  )
}
