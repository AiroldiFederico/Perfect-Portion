import styled from "styled-components";

// Stile per il contenitore principale di MainUpper
const MainUpperContainer = styled.div`
    background: wheat;
    color: black;
    display: flex;
    align-items: stretch; // Modificato per far sì che i figli occupino tutta l'altezza
	margin-top: 0.8rem;
    width: 98%; // Occupa l'intera larghezza della MainArea
    height: 40%; // Altezza modificabile in base alle necessità
    border-radius: 0.5rem; // Arrotondamento applicato solo al contenitore
    overflow: hidden; // Nasconde il contenuto che sporge fuori, mantenendo gli angoli arrotondati
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const ImageContainer = styled.div`
    flex: 1; // Regolato per permettere all'immagine di occupare lo spazio necessario
    display: flex;
    justify-content: flex-start; // Modificato per allineare l'immagine a sinistra
    align-items: stretch; // Fa sì che l'immagine occupi tutta l'altezza del contenitore
    padding-right: 1rem; // Spazio tra l'immagine e le informazioni
	

    img {
        width: 100%; // Larghezza dell'immagine regolata per occupare il contenitore
        height: auto; // Altezza auto per mantenere le proporzioni
        border-top-left-radius: 0.5rem; // Arrotonda l'angolo superiore sinistro
        border-bottom-left-radius: 0.5rem; // Arrotonda l'angolo inferiore sinistro
    }
`;

const InfoContainer = styled.div`
    flex: 2; // Occupa lo spazio rimanente più liberamente
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem; // Padding interno per distanziare il testo dai bordi


    h2, p {
        margin: 0 0 0.5rem; // Rimuove il margine superiore e aggiunge uno inferiore per separazione
    }

    h2 {
        font-size: 2rem; // Aumenta la dimensione del titolo per enfasi
    }

    p {
        font-size: 1.2rem; // Leggero aumento della dimensione del paragrafo per leggibilità
    }
`;

export default function MainUpper({ food }) {
	return (
		<MainUpperContainer>
			<ImageContainer>
				<img src={food.immagine} alt={food.nome}/>
			</ImageContainer>
			<InfoContainer>
				<h2>{food.nome}</h2>
				<p>{food.descrizione}</p>
				{/* Qui potrai aggiungere ulteriori informazioni o componenti */}
			</InfoContainer>
		</MainUpperContainer>
	);
}
