import styled from "@emotion/styled";

export const RegisterWrapper = styled.div`
    .register-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(108, 39, 255, 0.1);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.3px);
        -webkit-backdrop-filter: blur(5.3px);
        border: 1px solid rgba(108, 39, 255, 0.23);
        border-radius: 15px;
        width: 550px;
        .header {
            padding: 20px 40px;
            font-weight: bold;
            font-size: 22px;
            display: flex;
            gap: 20px;
            align-items: center;
            span {
                padding: 10px;
            }
        }
        .input-part {
            display: flex;
            flex-direction: column;
            gap: 60px;
            padding: 50px;
            .name-inputs {
                display: flex;
                justify-content: space-between;
            }
            .MuiInputBase-root  {
                background-color: #FFEFD0;
                border-radius: 15px;
            }
        }
        .button-container {
            display: flex;
            justify-content: center;
            padding: 15px;
            .register-button {
                padding: 10px 50px;
                border-radius: 10px;
                font-weight: bold;
                background-color: #6F7EFF;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }
        }
    }
`;