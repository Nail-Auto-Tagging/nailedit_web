export type ColorClassType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type CategoryClassType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12


export type ColorType = {
    class: ColorClassType,
    confidence: number,
    bounding_box: {
        start_x: number,
        start_y: number,
        end_x: number,
        end_y: number
    }
}

export type resultType = {
    label: string,
    coord: number[]
}

export type CategoryType = {
    class: CategoryClassType,
    confidence: number,
    bounding_box: {
        start_x: number,
        start_y: number,
        end_x: number,
        end_y: number
    }
}