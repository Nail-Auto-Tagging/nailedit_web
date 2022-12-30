import styled from "styled-components";
import { useEffect, useState } from "react";
import { CategoryApi, ColorApi } from "../api/api";
import { UPLOAD_TYPE, STYLE, Colors } from "../utils/constants";
import { resultType } from "../utils/types";
import { createCategoryBox, createColorBox } from "../utils/utils";
import { Loading } from "./Loading";
import Boundingbox from "./BoundingBox";


interface Props {
    image: string,
    style: STYLE,
    uploadType: UPLOAD_TYPE,
    initialize: () => void,
}

export const ResultPage = ({
    image,
    style,
    uploadType,
    initialize
}: Props) => {

    const [result, setResult] = useState<resultType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchColor = async () => {
        setLoading(true);

        const result = await ColorApi.getColors(uploadType, image);
        if (result) setResult(createColorBox(result));

        setLoading(false);
    }
    const fetchCategory = async () => {
        setLoading(true);

        const result = await CategoryApi.getCategories(uploadType, image);
        if (result) setResult(createCategoryBox(result));

        setLoading(false);
    }

    useEffect(() => {
        if (image)
            style === STYLE.COLOR ?
                fetchColor() :
                fetchCategory();
    }, [image, uploadType])

    return (
        <Body>
            {
                loading ?
                    <Loading /> :
                    <Wrapper>
                        <Boundingbox
                            image={image}
                            boxes={result}
                            options={{
                                colors: { normal: 'black' },
                                style: { maxWidth: '100%', maxHeight: '90vh' }
                            }} />

                        <Button onClick={initialize}>
                            다른 스타일 분류하기
                        </Button>
                    </Wrapper>
            }
        </Body>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 9;
    width: 100%;
    max-width: 400px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`

const Button = styled.button`
    border: none;
    border-radius: 20px;
    margin: 15px auto;
    color: ${Colors.white};
    padding: 10px;
    width: 92%;
    background-color: ${Colors.mainOrange};
    cursor: pointer;
`