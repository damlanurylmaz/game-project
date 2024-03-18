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
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .header {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px 30px;
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
    .body-container {
        flex: 6;
    }
`;
