const aFiles = import.meta.glob("../assets/location-a/*.jpg", {
  eager: true,
  import: "default",
})
const bFiles = import.meta.glob("../assets/location-b/*.jpg", {
  eager: true,
  import: "default",
})

function mapByFilename(glob) {
  const out = {}
  for (const path in glob) {
    const name = path.split("/").pop().replace(".jpg", "")
    out[name] = glob[path]
  }
  return out
}

export const locationAImages = mapByFilename(aFiles)
export const locationBImages = mapByFilename(bFiles)
