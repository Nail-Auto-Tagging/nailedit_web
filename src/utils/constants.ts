export const INITIAL_IMAGE_URL = process.env.PUBLIC_URL + "noImage.png"

export const Colors = {
    mainOrange: '#FB786B',
    white: '#FFFFFF',
    black: '#000000',
    lightgrey: 'lightgrey',
}

export enum STEP {
    SELECT_UPLOAD_TYPE = 1,
    SELECT_STYLE = 2,
    RESULT = 3
}

export enum STYLE {
    COLOR,
    CATEGORY
}

export enum UPLOAD_TYPE {
    IMAGE_URL = 1,
    LOCAL_UPLOAD = 2
}

export enum COLOR_NUM {
    MULTI = 0,
    RED,
    ORANGE,
    YELLOW,
    NUDE,
    PINK,
    GREEN,
    SKYBLUE,
    NAVY,
    PURPLE,
    BLACK,
    WHITE,
    SILVER
}

export const COLOR_MAP = {
    [COLOR_NUM.MULTI]: "multi",
    [COLOR_NUM.RED]: "red",
    [COLOR_NUM.ORANGE]: "orange",
    [COLOR_NUM.YELLOW]: "yellow",
    [COLOR_NUM.NUDE]: "nude",
    [COLOR_NUM.PINK]: "pink",
    [COLOR_NUM.GREEN]: "green",
    [COLOR_NUM.SKYBLUE]: "skyblue",
    [COLOR_NUM.NAVY]: "navy",
    [COLOR_NUM.PURPLE]: "purple",
    [COLOR_NUM.BLACK]: "black",
    [COLOR_NUM.WHITE]: "white",
    [COLOR_NUM.SILVER]: "silver",
}


export enum CATEGORY_NUM {
    GLITTER = 0,
    FRENCH,
    GRADATION,
    PARTS,
    MARBLE,
    PATTERN,
    RESIN,
    CHECK,
    POWDER,
    ONETONE,
    CHEEK,
    SYRUP,
    CHARACTER
}

export const CATEGORY_MAP = {
    [CATEGORY_NUM.GLITTER]: "glitter",
    [CATEGORY_NUM.FRENCH]: "french",
    [CATEGORY_NUM.GRADATION]: "gradation",
    [CATEGORY_NUM.PARTS]: "parts",
    [CATEGORY_NUM.MARBLE]: "marble",
    [CATEGORY_NUM.PATTERN]: "pattern",
    [CATEGORY_NUM.RESIN]: "resin",
    [CATEGORY_NUM.CHECK]: "check",
    [CATEGORY_NUM.POWDER]: "powder",
    [CATEGORY_NUM.ONETONE]: "onetone",
    [CATEGORY_NUM.CHEEK]: "cheek",
    [CATEGORY_NUM.SYRUP]: "syrup",
    [CATEGORY_NUM.CHARACTER]: "character"
}