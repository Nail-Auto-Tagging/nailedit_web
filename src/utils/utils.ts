import { CATEGORY_MAP, COLOR_MAP } from "./constants";
import { CategoryType, ColorType, resultType } from "./types";

export const createColorBox = (result: ColorType[]) => {
    let colorList: resultType[] = [];

    result.map((res) => {
        const color_name = COLOR_MAP[res.class];
        const confidence = fixCoordination(res.confidence);
        const coord = [
            res.bounding_box.start_x,
            res.bounding_box.start_y,
            res.bounding_box.end_x - res.bounding_box.start_x,
            res.bounding_box.end_y - res.bounding_box.start_y
        ];
        if (confidence > 0.7) {
            colorList.push({ label: `${color_name} ${confidence}`, coord: coord });
        }
    })
    return colorList
}

export const createCategoryBox = (result: CategoryType[]) => {
    let categoryList: resultType[] = [];

    result.map((res) => {
        const category_name = CATEGORY_MAP[res.class];
        const confidence = fixCoordination(res.confidence);
        const coord = [
            res.bounding_box.start_x,
            res.bounding_box.start_y,
            res.bounding_box.end_x - res.bounding_box.start_x,
            res.bounding_box.end_y - res.bounding_box.start_y
        ];
        if (confidence > 0.6) {
            categoryList.push({ label: `${category_name} ${confidence}`, coord: coord });
        }
    })
    return categoryList
}

export const fixCoordination = (num: number) => {
    let fixedNumber = num.toFixed(2);
    return Number(fixedNumber);
}