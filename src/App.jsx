
import styled from 'styled-components';
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MainArea from "./components/MainArea.jsx";

// Definizione dei componenti stilizzati
const AppSection = styled.section`
    display: flex;
    height: 100vh; // Utilizza vh per coprire l'altezza completa della viewport
    padding: 24px; // Equivalente di p-6 in Tailwind
    background-color: #ffeedb; // Un colore "grano pastello"
`;

const SidebarContainer = styled.div`
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
    return (
        <AppSection>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>

            <ContentContainer>
                <Header/>
                <MainArea></MainArea>
            </ContentContainer>
        </AppSection>
    );
}

export default App;
