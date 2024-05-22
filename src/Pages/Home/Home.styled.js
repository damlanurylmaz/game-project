import styled from "@emotion/styled";
export const HomeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;

        .button-container {
            display: flex;
            gap: 15px;

            .MuiButtonBase-root {
                background-color: #6C27FF;
                padding: 10px;
                color: #FFFFFF;
                font-weight: bolder;
            }
        }
    }

    .body-container {
        flex: 1;
        display: flex;
        flex-direction: column;

        .filter-container {
            display: flex;
            justify-content: flex-end;
            padding: 10px;
            gap: 10px;
        }

        .game-part-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 20px;

            .game-images {
                position: relative;

                .game-image {
                    width: 200px;
                    height: 200px;
                    border-radius: 10px;
                    transition: 0.3s;

                    &:hover {
                        width: 300px;
                        height: 300px;
                    }
                }

                .hovered-game {
                    display: none;
                }

                &:hover {
                    .game-image {
                        width: 300px;
                        height: 300px;
                    }

                    .hovered-game {
                        display: block;
                        background-color: rgba(1, 1, 1, 0.5);
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;

                        .hovered-header {
                            display: flex;
                            justify-content: flex-end;
                            padding: 10px;
                        }

                        .game-content {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }

                        .play-button {
                            display: flex;
                            justify-content: center;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .game-part-container {
            .game-images {
                .game-image {
                    width: 150px;
                    height: 150px;

                    &:hover {
                        width: 200px;
                        height: 200px;
                    }
                }

                &:hover {
                    .game-image {
                        width: 200px;
                        height: 200px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .header {
            flex-direction: column;
            align-items: flex-start;

            .button-container {
                justify-content: center;
                gap: 10px;
            }
        }

        .body-container {
            .filter-container {
                justify-content: center;
                padding: 5px;
            }

            .game-part-container {
                .game-images {
                    .game-image {
                        width: 120px;
                        height: 120px;

                        &:hover {
                            width: 150px;
                            height: 150px;
                        }
                    }

                    &:hover {
                        .game-image {
                            width: 150px;
                            height: 150px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .header {
            .button-container {
                flex-direction: column;
                gap: 5px;
            }
        }

        .body-container {
            .game-part-container {
                .game-images {
                    .game-image {
                        width: 100px;
                        height: 100px;

                        &:hover {
                            width: 120px;
                            height: 120px;
                        }
                    }

                    &:hover {
                        .game-image {
                            width: 120px;
                            height: 120px;
                        }
                    }
                }
            }
        }
    }
`;
