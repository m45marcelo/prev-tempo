import { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

export function useWeather() {
	const context = useContext(WeatherContext);
	if (!context)
		throw new Error("useWeather de ser usado dentro de WeatherProvider");
	return context;
}
