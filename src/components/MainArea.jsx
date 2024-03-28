import styled from 'styled-components';
import MainUpper from "./MainUpper.jsx";

const MainSection = styled.header`

    width: 55rem; // Imposta la larghezza a 50rem
    background-color: #a0b469;
    border-radius: 0.5rem;
    padding: 0.5rem;
    height: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

`;

export default function MainArea({ food }) {


	return (
		<MainSection>
			<MainUpper food={food}></MainUpper>

		</MainSection>
	)
}