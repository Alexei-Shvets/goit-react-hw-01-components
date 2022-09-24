import styled from '@emotion/styled'

export const ProfileCard = styled.div`
margin-left: auto;
margin-right: auto;
margin-top: 32px;
margin-bottom: 20px;
text-align: center;
width: 400px;
height: 100%;
border-radius: 2%;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, 
rgba(0, 0, 0, 0.23) 0px 3px 6px;
background-color:  	#B6D0E2;
`;

export const Description = styled.div`
padding: 25px;
` 
export const Name = styled.p`
font-weight: 700;
font-size: 20px;
`
export const Avatar = styled.img`
width: 150px;
border-radius: 50%;
border: 6px solid rgb(0, 140, 255);
overflow: hidden;
&:hover {
    background-color: rgb(240, 255, 255);
`;

export const Stats = styled.ul`
display: flex;
justify-content: space-around;
`
export const StatsItem = styled.li`
width: 82px;
text-align: center;
border: 1px solid rgb(0, 140, 255);
border-radius: 4px;
color: rgb(0, 140, 255);
background-color: rgb(240, 255, 255);
margin-bottom: 10px;
padding: 5px;
`
export const LabelSpan = styled.span`
display: block;
font-weight: 600;
`
