export const getFormattedDate = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export const getDateMinusDays = (days: number, date: Date = new Date()): Date => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}