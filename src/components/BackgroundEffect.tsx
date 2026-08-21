function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        className="absolute -left-24 -top-24 h-96 w-96 animate-[float-blob_18s_ease-in-out_infinite] rounded-full bg-wine/25 blur-3xl dark:bg-wine-dark/25 oled:hidden"
      />
      <div
        className="absolute -right-16 top-1/3 h-[28rem] w-[28rem] animate-[float-blob_22s_ease-in-out_infinite_reverse] rounded-full bg-wine-hover/20 blur-3xl dark:bg-wine-dark-hover/20 oled:hidden"
      />
      <div
        className="absolute -bottom-24 left-1/3 h-80 w-80 animate-[float-blob_25s_ease-in-out_infinite] rounded-full bg-wine/15 blur-3xl dark:bg-wine-dark/20 oled:hidden"
      />
    </div>
  )
}

export default BackgroundEffect
