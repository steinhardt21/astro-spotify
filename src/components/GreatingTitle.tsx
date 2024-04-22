export default function GreatingTitle() {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  let greetings = ""

  if(currentHour >= 5 && currentHour < 12) {
    greetings = "Good morning!"
  } else if(currentHour >= 12 && currentHour < 18) {
    greetings = "Good afternoon"
  } else {
    greetings = "Good night"
  }

  return (
    <h1 className="text-3xl font-bold">{greetings}</h1>
  )
}