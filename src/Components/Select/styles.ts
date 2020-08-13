import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    height: 48px;
    width: 700px;

    border: 1px solid black;
    border-radius: 4px 4px 0 0;

    input {
        flex: 1;
        padding: 4px 12px;

        border: none;
    }

    ul {
        position: absolute;
        top: 100%;
        z-index: 100;

        width: calc(100% + 2px);
        border: 1px solid black;

        left: 50%;
        transform: translateX(-50%);

        

        li {
            width: 100%;
            padding: 8px 12px;

            list-style: none;
            
            &:hover {
                background: #ddd;
                cursor: pointer;
            }
        }
    }
`;