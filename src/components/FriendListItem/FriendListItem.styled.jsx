import styled from '@emotion/styled';

export const Status = styled.span`
border-radius: 50%;
height: 20px;
margin-right: 20px;
width: 20px;
background-color: ${props => (props.isOnline ? 'green' : 'red')};

`;

export const Friend = styled.li`
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.04);
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
padding: 20px;
margin-top: 10px;
margin-bottom: 10px;
width: 350px;
border-radius: 5px;
`;

export const Avatar = styled.img`
margin-right: 10px;
`
export const UserName = styled.p`
font-weight: 600;
`