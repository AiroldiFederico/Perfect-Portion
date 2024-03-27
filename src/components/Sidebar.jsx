// Importa styled da styled-components
import styled from 'styled-components';
import Food from "../database/Food.js";

// Definizione dei componenti stilizzati
const SidebarSection = styled.section`
    background-color: #7a8d47; 
    color: black;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem; // 3 tailwind unit
	
    // Aggiunta della larghezza fissa e max-width per responsività
    width: 500px; // Larghezza fissa per la sidebar
    max-width: 100%; // Assicurati che la sidebar non superi la larghezza del dispositivo
`;

const Input = styled.input`
  width: 100%;
  border-radius: 0.375rem; // rounded
  text-align: center;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.2);
`;

const Card = styled.div`
  background: wheat;
  border-radius: 0.5rem; // rounded-lg
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  width: 150px; // Larghezza fissa per le immagini
  height: 100px; // Altezza fissa per le immagini, assicurati che questo si adatti al design
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem; // rounded-l-lg
    object-fit: cover; // Per mantenere le proporzioni dell'immagine
  }
`;

const TextContainer = styled.div`
    padding: 1rem;
    position: relative; // Necessario per posizionare correttamente l'effetto di sfumatura
    max-height: 100px; // Imposta un'altezza massima per controllare l'overflow
    overflow: hidden; // Nasconde il contenuto che supera l'altezza massima

    div:first-child {
        font-size: 1.125rem; // text-lg
        font-weight: bold; // font-bold
    }

    div:last-child {
        font-size: 0.875rem; // text-sm
        position: relative;
        z-index: 1; // Assicura che il testo sia visibile sopra l'effetto di sfumatura
    }

    // Creazione dell'effetto di sfumatura alla fine del contenitore
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 20px; // Altezza dell'effetto di sfumatura
        background: linear-gradient(to bottom, transparent, wheat 90%); // Sfumatura che si fonde con il colore di sfondo del Card
        z-index: 2; // Sovrappone l'effetto di sfumatura al testo
        border-bottom-right-radius: 0.5rem;
    }
`;

// Componente Sidebar con styled-components
export default function Sidebar() {
	return (
		<SidebarSection>
			<Input type="text" placeholder="What do you want to cook?" />

			{Food.map((value) => (
				<Card key={value.nome}>
					<ImageContainer>
						<img src={value.immagine} alt={value.nome} />
					</ImageContainer>
					<TextContainer>
						<div>{value.nome}</div>
						<div>{value.descrizione}</div>
					</TextContainer>
				</Card>
			))}
		</SidebarSection>
	);
}
