import { DiaryEntry } from '../types'
import diarioData from './diarios.json'
const diaries: DiaryEntry[] = diarioData as DiaryEntry[] // Asercion de datos, solo utilizar cuando sea necesario!

export const getEntries = (): DiaryEntry[] => diaries
export const addEntries = (): null => null
