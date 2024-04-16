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
    .body-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        .game-images {
            position: relative;
            .game-image {
                width: 200px;
                height: 200px;
                border-radius: 10px;
                transition: .3s;
                :hover {
                    width:300px;
                    height: 300px;

                }
            }
            .hovered-game {
                display: none;
            }
            :hover {
                .game-image {
                    width: 300px;
                    height: 300px;
                }
                .hovered-game {
                    display: block;
                    background-color: rgb(1,1,1,0.5);
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    .hovered-header {
                        display: flex;
                        justify-content: flex-end;
                    }
            }
            }
        }
    }
`;
