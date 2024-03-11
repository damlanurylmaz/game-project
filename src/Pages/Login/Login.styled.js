import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
    .login-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        /* background-color: rgba(108, 39, 255, 0.75); */
        background: rgba(108, 39, 255, 0.1);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.3px);
        -webkit-backdrop-filter: blur(5.3px);
        border: 1px solid rgba(108, 39, 255, 0.23);
        border-radius: 15px;
        .header {
            padding: 20px 40px;
            font-weight: bold;
            font-size: 22px;
        }
        .input-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            padding: 10px 40px;
            .MuiInputBase-root  {
                background-color: #FFEFD0;
                width: 300px;
                border-radius: 15px;
            }
        }
        .button-container {
            display: flex;
            justify-content: center;
            padding: 15px;
            .login-button {
                padding: 10px 50px;
                border-radius: 10px;
                font-weight: bold;
                background-color: #6F7EFF;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
        }
    }
`;