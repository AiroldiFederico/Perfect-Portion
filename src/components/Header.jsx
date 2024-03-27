import styled from 'styled-components';


const StyledHeader = styled.header`
  color: black;
  width: 50rem;
  background: transparent;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 3.5rem;
  max-height: 6rem; 
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
    font-weight: 700;
    font-family: 'Dancing Script', cursive; 
    font-size: 3rem;
    margin: 0;
`;

const Subtitle = styled.span`
  // Aggiungi qui eventuali stili specifici per il sottotitolo
`;

export default function Header() {
	return (
		<StyledHeader>
			<Title>Perfect Portion</Title>
			<Subtitle>Cooking by guesswork? No thanks!</Subtitle>
		</StyledHeader>
	);
}
