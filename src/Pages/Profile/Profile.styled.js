import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    .header {
        height: 10%;
    }
    .profile-container {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
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
            .profile-image {
                .image {
                    width: 200px;
                    border-radius: 50%;
                }
            }
        }
    }
`;