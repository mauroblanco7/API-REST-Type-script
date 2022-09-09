// export type Weather = 'Sunny' | 'Rainy' | 'Cloudy' | 'Windy' | 'Stormy'
// export type Visibility = 'Great' | 'Good' | 'Ok' | 'Poor'
// Usamos el enum por el type weather por que esto hace que podamos utilizar este tipo en toda la app
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}
export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

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

export type newDiaryEntry = Omit<DiaryEntry, 'id'>
