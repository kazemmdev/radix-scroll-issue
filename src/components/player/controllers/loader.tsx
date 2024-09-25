import { Spinner } from "@vidstack/react"

export const BufferingIndicator = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 flex size-full items-center justify-center">
      <Spinner.Root
        className="mt-1 text-white opacity-0 transition-opacity duration-200 ease-linear media-buffering:animate-spin media-buffering:opacity-100"
        size={64}
      >
        <Spinner.Track className="opacity-25" width={8} />
        <Spinner.TrackFill className="opacity-75" width={8} />
      </Spinner.Root>
    </div>
  )
}
