import axios from 'axios';
import { UPLOAD_TYPE } from "../utils/constants";
import { ColorType, CategoryType } from '../utils/types';


const api_host = "localhost:3000"

export const ColorApi = {
    getColors: async (uploadType: UPLOAD_TYPE, image: string): Promise<ColorType[]> => {
        let result: ColorType[] = [];

        uploadType === UPLOAD_TYPE.IMAGE_URL ?
            await axios.get(
                `${api_host}/color`,
                {
                    params: {
                        upload_type: uploadType,
                        image: image
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            ).then((res) => {
                console.log(res.data)
                result = res.data.results;
            }).catch((error) => {
                console.log(error.response.data);
                throw error;
            }) :
            await axios.post(
                `${api_host}/color`,
                {
                    upload_type: uploadType,
                    image: image
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            ).then((res) => {
                console.log(res.data)
                result = res.data.results;
            }).catch((error) => {
                console.log(error.response.data);
                throw error;
            })

        return result;
    }
}

export const CategoryApi = {
    getCategories: async (uploadType: UPLOAD_TYPE, image: string): Promise<CategoryType[]> => {
        let result: CategoryType[] = [];

        uploadType === UPLOAD_TYPE.IMAGE_URL ?
            await axios.get(
                `${api_host}/category`,
                {
                    params: {
                        upload_type: uploadType,
                        image: image
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            ).then((res) => {
                console.log(res.data)
                result = res.data.results;
            }).catch((error) => {
                console.log(error.response.data);
                throw error;
            }) :
            await axios.post(
                `${api_host}/category`,
                {
                    upload_type: uploadType,
                    image: image
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            ).then((res) => {
                console.log(res.data)
                result = res.data.results;
            }).catch((error) => {
                console.log(error.response.data);
                throw error;
            })

        return result;
    }
}