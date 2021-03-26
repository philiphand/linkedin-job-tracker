import styled from "styled-components";

export const PageTitle = styled.h1`
    padding-bottom: 2px;
    color: white;
    border-bottom: 3px solid white;
    margin: 10px;
    text-align: center;
`

export const Description = styled.p`
    font-size: 16px;
    color: white;
    margin: 10px;
`

export const InfoText = styled.div`
    color: white;
    margin-left: 20px;
    font-size: 18px;
    line-height: 26px;
`

export const Transparent = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid silver;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 500px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
`

export const NavButtonsWrapper = styled.div`
    margin-top: 10px;
    display: flex;
`

export const Url = styled.a`
    color: white;
`

// SkillsToday and Category

export const SkillText = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
    color: white;
    width: 300px;

    @media only screen and (max-width: 480px) {
        width: 180px;
    }
`

export const SumText = styled.p`
    display: inline-block;
    color: white;
    font-size: 20px;
    margin: 10px;
`