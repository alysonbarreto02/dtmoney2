import styled from "styled-components";

export const Container = styled.div`
        max-width: 1120px;
        margin: 0 auto;
        margin-top: -10rem;

        padding: 2rem 1rem 12rem;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        width: 20rem;

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    strong{
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
    
    &.total{
        background: #33CC95;
        color: #fff;
    }
}
`