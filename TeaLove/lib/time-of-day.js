export default function timeOfDay() {
  const hours = new Date().getHours();
  if (hours > 20 || hours < 5) {
    return 'night';
  }

  if (hours < 10) {
    return 'morning';
  }

  if (hours < 15) {
    return 'afternoon';
  }

  return 'evening';
}
