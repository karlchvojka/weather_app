// Checks to see if its currently night based on system date.

export const IsNight = () => {
  const date = new Date()
  
  return (
    date.getHours() > 19 || date.getHours() < 6
  )
}
