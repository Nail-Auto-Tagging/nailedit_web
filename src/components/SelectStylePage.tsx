import styled from "styled-components";
import { useRef } from "react";
import { Colors, INITIAL_IMAGE_URL, STEP, STYLE, UPLOAD_TYPE } from "../utils/constants";


interface Props {
    image: string,
    uploadType: UPLOAD_TYPE,
    setStep: (step: STEP) => void,
    setImage: (image: string) => void,
    setStyle: (style: STYLE) => void
}

export const SelectStylePage = ({
    uploadType, image, setImage, setStep, setStyle
}: Props) => {
    let inputRef = useRef<HTMLInputElement>(null);

    const saveImage = (e: any) => {
        if (e.target.files[0]) {
            let file = e.target.files[0]
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let result = reader.result;
                if (typeof result === 'string')
                    setImage(result);
            }
        }
    }

    const handleImageUrlChange = (url: string) => { setImage(url); }
    const initializeImage = () => { setImage(INITIAL_IMAGE_URL); }
    const handleClick = (style: STYLE) => {
        setStyle(style)
        setStep(STEP.RESULT);
    }

    return (
        <Body>
            <Image
                src={image}
                onError={initializeImage} />

            {
                uploadType === UPLOAD_TYPE.IMAGE_URL ?
                    <BottomWrapper>
                        <InputText
                            type="text"
                            placeholder="이미지 URL을 입력해주세요"
                            onChange={(e) => handleImageUrlChange(e.target.value)} />
                    </BottomWrapper> :
                    <BottomWrapper>
                        <InputLabel htmlFor="upload-image">
                            업로드할 파일을 선택해주세요
                        </InputLabel>
                        <InputFile
                            id="upload-image"
                            type="file"
                            accept="image/*"
                            ref={inputRef}
                            onChange={saveImage}
                        />
                    </BottomWrapper>
            }
            {
                image === INITIAL_IMAGE_URL ?
                    <Button className="inactive">컬러 분류하기</Button> :
                    <Button className="active" onClick={() => handleClick(STYLE.COLOR)}>컬러 분류하기</Button>
            }
            {
                image === INITIAL_IMAGE_URL ?
                    <Button className="inactive">카테고리 분류하기</Button> :
                    <Button className="active" onClick={() => handleClick(STYLE.CATEGORY)}>카테고리 분류하기</Button>
            }

        </Body >
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

const Image = styled.img`
    width: 100%;
    margin-bottom: 10px;
`

const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const InputText = styled.input`
    margin: 10px;
    width: 90%;
`

const InputLabel = styled.label`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${Colors.lightgrey};
    border: 1px solid ${Colors.black};
    cursor: pointer;
    margin: 10px auto;
    font-size: 15px;
    height: 25px;
`

const InputFile = styled.input`
    display: none;
`

const Button = styled.button`
    border: none;
    border-radius: 20px;
    margin: 5px auto;
    color: white;
    padding: 10px;
    width: 92%;

    &.active{
        background-color: ${Colors.mainOrange};
        cursor: pointer;
    }
    &.inactive{
        background-color: ${Colors.lightgrey};
    }
`