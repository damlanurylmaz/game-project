import styled from "@emotion/styled";

export const GameWrapper = styled.div`
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
    .game-detail-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .game-container {
            background: rgba(108, 39, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5.3px);
            -webkit-backdrop-filter: blur(5.3px);
            border: 1px solid rgba(108, 39, 255, 0.23);
            padding: 30px;
            margin: 50px 0 50px 0;
            border-radius: 15px;
        }
    }   
`;

export const GameContentWrapper = styled.div`
    padding: 100px;
    border-radius: 15px;
    .towers-container {
        display: flex;
        gap: 150px;
        border-bottom: 20px solid #6C27FF;
        .towers {
            width: 20px;
            .tower {
                background-color: #6C27FF;
                height: 200px;
                cursor: pointer;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                align-items: center;
                :hover {
                    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
                    transition: 300ms;
                }
                .disk {
                  padding: 15px;
                  background-color: orange;
                  display: flex;
                  gap: 20px;
                  outline: none;
                }
            }
        }
    }
`;

export const CommentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .game-comment-container {
        padding: 30px;
        background: rgba(108, 39, 255, 0.1);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.3px);
        -webkit-backdrop-filter: blur(5.3px);
        border: 1px solid rgba(108, 39, 255, 0.23);
        border-radius: 15px;
        width: 50%;
        .add-comment-part {
            display: flex;
            align-items: center;
            gap: 30px;
            .comment {
                border: 1px solid #FFEFD0;
                border-radius: 10px;
                width: 100%;
                .MuiInputBase-input {
                    color: #FFEFD0;
                    outline: none;
                }
                label {
                    color: #FFEFD0;
                }
            }
            .send-comment-icon {
                border: none;
                outline: none;
                background-color: transparent;
            }
        }
        .comment-part {
            border: 1px solid #FFEFD0;
            border-radius: 15px;
            padding: 20px;
            margin-top: 20px;
            display: flex;
            align-items: center;
            .show-comment {
                flex: 1;
                margin-left: 30px;
                .commentEditInput {
                    .MuiInputBase-input {
                        color: #FFFFFF;
                        border: #FFFFFF;
                    }
                }
            }
            .comment-button-container {
                display: flex;
                justify-content: flex-end;
                .button-wrapper {
                    display: flex;
                }
            }
        }
    }
`;