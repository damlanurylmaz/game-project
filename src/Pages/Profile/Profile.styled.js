import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    .header {
        height: 10%;
    }
    .profile-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        .profile-form {
            width: 1000px;
            background: rgba(108, 39, 255, 0.1);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5.3px);
            -webkit-backdrop-filter: blur(5.3px);
            border: 1px solid rgba(108, 39, 255, 0.23);
            border-radius: 15px;
            padding: 50px;
            .form-top-part {
                display: flex;
                align-items: center;
                gap: 100px;
                margin-bottom: 50px;
                .profile-image {
                    .image {
                        width: 200px;
                        border-radius: 50%;
                    }
                }
            }
            .form-changeable-part {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 50px;
                .changeable-input-container {
                    display: flex;
                    gap: 50px;
                    .MuiInputBase-root  {
                        background-color: #FFEFD0;
                        width: 300px;
                        border-radius: 15px;
                        outline: none;
                        border: none;
                    }
                }
            }
            .update-button-container {
                display: flex;
                justify-content: center;
                margin-top: 50px;
                .MuiButtonBase-root {
                    background-color: #6C27FF;
                    padding: 15px 50px;
                    font-weight: bold;
                }
            }
        }
    }
`;