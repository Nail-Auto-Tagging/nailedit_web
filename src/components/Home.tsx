import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaArrowLeft } from 'react-icons/fa';
import { ResultPage } from "./ResultPage";
import { SelectStylePage } from "./SelectStylePage";
import { SelectUploadTypePage } from "./SelectUploadTypePage";
import { Colors, INITIAL_IMAGE_URL, STEP, STYLE, UPLOAD_TYPE } from "../utils/constants";


export const Home = () => {
    const [step, setStep] = useState<STEP>(STEP.SELECT_UPLOAD_TYPE);
    const [uploadType, setUploadType] = useState<UPLOAD_TYPE>(UPLOAD_TYPE.IMAGE_URL);
    const [style, setStyle] = useState<STYLE>(STYLE.COLOR);
    const [image, setImage] = useState<string>(INITIAL_IMAGE_URL);

    const setPrev = () => {
        if (step > STEP.SELECT_UPLOAD_TYPE)
            setStep(step - 1);
    }
    const initialize = () => {
        setStep(STEP.SELECT_UPLOAD_TYPE);
        setUploadType(UPLOAD_TYPE.IMAGE_URL);
        setStyle(STYLE.COLOR);
    }

    useEffect(() => {
        if (step === STEP.SELECT_UPLOAD_TYPE)
            setImage(INITIAL_IMAGE_URL);
    }, [step])

    return (
        <Container>
            <Header>
                {
                    step !== STEP.SELECT_UPLOAD_TYPE ?
                        <FaArrowLeft
                            size={20}
                            onClick={setPrev}
                            color={Colors.mainOrange}
                            style={{ marginLeft: 20, cursor: "pointer" }} />
                        : <div />
                }
                <HomeLogo
                    src={process.env.PUBLIC_URL + 'homelogo.png'}
                    onClick={initialize} />
            </Header>

            {
                step === STEP.SELECT_UPLOAD_TYPE ?
                    <SelectUploadTypePage
                        setStep={setStep}
                        setUploadType={setUploadType} /> :
                    step === STEP.SELECT_STYLE ?
                        <SelectStylePage
                            image={image}
                            setImage={setImage}
                            setStep={setStep}
                            setStyle={setStyle}
                            uploadType={uploadType} /> :
                        <ResultPage
                            image={image}
                            style={style}
                            uploadType={uploadType}
                            initialize={initialize} />
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    width: 100%;
    max-width: 400px;
    min-height: 40px;
    box-shadow: 1px 2px 9px ${Colors.lightgrey};
`

const HomeLogo = styled.img`
    margin-right: 20px;
    max-width: 22px;
    width: calc(0.8em + 1.8vw);
    cursor: pointer;
`