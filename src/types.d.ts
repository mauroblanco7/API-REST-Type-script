export type Weather = 'Sunny' | 'Rainy' | 'Cloudy' | 'Windy' | 'Stormy'
export type Visibility = 'Great' | 'Good' | 'Ok' | 'Poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// PARA REUTILIZAR DATOS USAR LO SEGUIENTE
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
// Pick nos permite elegir una interface, guardarla en una variable y elegir los datos que nos interesan
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
// Omit hace que omita un dato
