export type Weather = 'Sunny' | 'Rainy' | 'Cloudy' | 'Windy' | 'Stormy'
export type Visibility = 'Great' | 'Good' | 'Ok' | 'Poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
