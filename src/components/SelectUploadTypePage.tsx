import styled from "styled-components";
import { Colors, STEP, UPLOAD_TYPE } from "../utils/constants";


interface Props {
    setStep: (step: STEP) => void,
    setUploadType: (num: UPLOAD_TYPE) => void,
}

export const SelectUploadTypePage = ({
    setStep,
    setUploadType,
}: Props) => {

    const selectUploadType = (num: UPLOAD_TYPE) => {
        setUploadType(num);
        setStep(STEP.SELECT_STYLE);
    }

    return (
        <Body>
            <Title>당신의 네일아트 스타일은?</Title>
            <Description>원하는 이미지 업로드 방식을 선택해주세요</Description>
            <ButtonBody>
                <Button
                    onClick={() => selectUploadType(UPLOAD_TYPE.IMAGE_URL)}>
                    이미지 URL
                </Button>
                <Button
                    onClick={() => selectUploadType(UPLOAD_TYPE.LOCAL_UPLOAD)}>
                    로컬 이미지
                </Button>
            </ButtonBody>
        </Body>
    )
}


const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 9;
    max-width: 400px;
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    color: ${Colors.black};
    font-weight: 700;
    font-size: calc(1.2em + 0.6vw);
`

const Description = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: ${Colors.black};
    font-weight: 500;
    font-size: calc(0.6em + 0.6vw);
`

const ButtonBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 5;
    width: 100%;
`

const Button = styled.button`
    background-color:${Colors.mainOrange};
    border: none;
    border-radius: 20px;
    margin: 5px auto;
    color: white;
    padding: 10px;
    max-width: 550px;
    width: 100%;
    cursor: pointer;
    font-size: 14px;
`