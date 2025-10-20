import { Container } from "./Components/layout/container/container";
import { Header } from "./Components/layout/header/Header";
import { Main } from "./Components/layout/main/Main";

function App() {
	return (
		<Container background="Day">
			<Header/>
            <Main/>
		</Container>
	);
}

export default App;
