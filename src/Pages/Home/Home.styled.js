import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
    width: 100%;
    position: relative;
    .background {
        width: 100vw;
        height: 100vh;
        mix-blend-mode: soft-light;
    }
`;

export const HomeWrapper = styled.div`
    overflow: hidden;
    .header {
        position: absolute;
        top: 20px;
        right: 20px;
        .button-container {
            display: flex;
            gap: 30px;
            .MuiButtonBase-root {
                background-color: #6C27FF;
                padding: 15px;
                color: #FFFFFF;
                font-weight: bolder;
            }
        }
    }
`;
