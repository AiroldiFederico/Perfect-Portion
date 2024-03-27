import styled from 'styled-components';

// Definizione dei componenti stilizzati per l'header
const StyledHeader = styled.header`
  color: white;
  width: 50rem; // Imposta la larghezza a 50rem
  background-color: #606d40;
  border-radius: 0.5rem; // Arrotondamento dei bordi come per la Sidebar
  padding: 0.5rem; // Imposta un padding di 2 (0.5rem) simile a p-2 in Tailwind
  max-height: 4rem; // Imposta un'altezza massima di 4rem
  display: flex; 
  flex-direction: column; 
  justify-content: center; // Centra il contenuto verticalmente all'interno dell'header
`;

const Title = styled.h1`
  font-weight: bold; // Rende il titolo grassetto
  margin: 0; // Rimuove il margine di default dell'h1 per un migliore controllo dello spazio
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
