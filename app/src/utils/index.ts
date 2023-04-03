export function formatNumber(number: number): string {
  const nf = Intl.NumberFormat();
  return nf.format(number).replaceAll(",", " ");
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatPercentage(num: number): string {
  const split = String(num).split(".");
  if (split.length === 1) {
    return split[0] + ".00%";
  } else if (split.length === 2) {
    if (String(split[1]).length === 0) {
      return split[0] + ".00%";
    } else if (String(split[1]).length === 1) {
      return split[0] + "." + split[1] + "0%";
    } else if (String(split[1]).length === 2) {
      return split[0] + "." + split[1] + "%";
    } else {
      return split[0] + "." + split[1].slice(0, 2) + "%";
    }
  } else {
    return "Invalid input num!";
  }
}

export function formatTime(num: number): string {
  if (String(num).length < 2) return "0" + String(num);
  else if (String(num).length < 1) return "00";
  return String(num);
}

export function getDateTime(date: Date): string {
  const year = String(date.getFullYear());
  const month = "0" + (date.getMonth() + 1);
  const day = "0" + date.getDate();
  const hour = "00" + date.getHours();
  const minute = "00" + date.getMinutes();
  const second = "00" + date.getSeconds();
  return (
    year +
    "/" +
    month.slice(-2) +
    "/" +
    day.slice(-2) +
    " " +
    hour.slice(-2) +
    ":" +
    minute.slice(-2) +
    ":" +
    second.slice(-2)
  );
}

export function getDate() {
  const d = new Date();
  const year = formatTime(d.getUTCFullYear());
  const month = formatTime(d.getUTCMonth() + 1);
  const day = formatTime(d.getUTCDate());
  return `${year}-${month}-${day}`;
}

export function getTime() {
  const d = new Date();
  const hours = formatTime(d.getUTCHours());
  const minutes = formatTime(d.getMinutes());
  const seconds = formatTime(d.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

export function countDown() {
  const time: Array<string> = getTime().split(":");
  const hours = formatTime(23 - Number(time[0]));
  const minutes = formatTime(59 - Number(time[1]));
  const seconds = formatTime(59 - Number(time[2]));
  return `${hours}h ${minutes}m ${seconds}s`;
}
