import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        max-width: 1120px;
        margin: 0 auto;
        margin-top: -15rem;
        width: 100rem ;
        padding: 2rem 1rem 12rem;
        align-items: center;
        justify-content: space-between; 

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25;

            &:first-child{
                color: var(--text-title)
            }

            &.deposit{
                color: #33CC95
            }

            &.withdrawm{
                color: var(--red)
            }
        }
    }
`