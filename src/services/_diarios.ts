/* eslint-disable @typescript-eslint/indent */
import { DiaryEntry, NonSensitiveInfoDiaryEntry, newDiaryEntry } from '../types'
import diarioData from './diarios.json'

const diaries: DiaryEntry[] = diarioData as DiaryEntry[] // Asercion de datos, solo utilizar cuando sea necesario!
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    if (entry != null) {
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return undefined
}
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const getEntries = (): DiaryEntry[] => diaries
export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}
