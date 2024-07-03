import styled from "@emotion/styled";

export const InfoPagesWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
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
    .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .content {
            background: rgba(108, 39, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5.3px);
            -webkit-backdrop-filter: blur(5.3px);
            border: 1px solid rgba(108, 39, 255, 0.23);
            padding: 30px;
            width: 50%;
            margin-top: 100px;
        }
    }
`;