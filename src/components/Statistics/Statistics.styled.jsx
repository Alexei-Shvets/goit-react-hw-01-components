import styled from '@emotion/styled'

export const Section = styled.section`
margin-bottom: 20px;
width: 400px;
height: 100%;
border-radius: 2%;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, 
rgba(0, 0, 0, 0.23) 0px 3px 6px;
background-color:  	#B6D0E2; 
`;

export const List = styled.ul`
justify-content: center;
margin-bottom: 10px;
background-color:   rgba(0, 0, 0, 0, 0.4);
display: flex;
`;

export const Item = styled.li`
padding-top: 15px;
padding-bottom: 15px;
display: flex;
flex-direction: column;
text-align: center;
width: 75px;
height: 75px;

&:first-of-type {
border-bottom-left-radius: 5px;
}
&:last-of-type {
border-bottom-right-radius: 5px;
}

border: 1px solid rgba(0 0 0 / 20%);
background-color: ${props => props.backgroundColor}
`;

export const SectionTitle = styled.h2`
text-align: center;
`
export const LabelSpan = styled.span`
font-weight: 600;
margin-bottom: 5px;
`
