import { Container } from "./Components/layout/container/container";
import { Header } from "./Components/layout/header/Header";
import { Main } from "./Components/layout/main/Main";
import { useWeather } from "./hooks/useWeather";
import { defineTheme } from "./utils/defineTheme";

function App() {
	const { weatherCurrent } = useWeather()
	return (
		<Container background={defineTheme(weatherCurrent)}>
			<Header/>
            <Main/>
		</Container>
	);
}

export default App;
