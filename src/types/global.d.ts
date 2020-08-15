/// <reference types="react-scripts" />
declare global {
    type StringMapper<T> = {
        [key: string]: T
    }
}
export {}