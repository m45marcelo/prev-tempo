import axios from "axios";
import { createContext, type ReactNode, useState } from "react";
import type { WeatherCurrent, WeatherForecast } from "../types";

interface WeatherContextProps {
	weatherCurrent: WeatherCurrent | null;
	weatherForecast: WeatherForecast | null;
	searchCity: (city: string) => void;
}

export const WeatherContext = createContext<WeatherContextProps | undefined>(
	undefined,
);

export function WeatherProvider({ children }: { children: ReactNode }) {
	const [weatherCurrent, setWeatherCurrent] = useState<WeatherCurrent | null>(
		null,
	);
	const [weatherForecast, setWeatherForecast] =
		useState<WeatherForecast | null>(null);

	async function searchCity(city: string) {
		if (!city.trim()) return;

		async function searchCityCurrent(city: string) {
			try {
				const { data } = await axios.get<WeatherCurrent>(
					`${import.meta.env.VITE_BASE_URL}current`,
					{
						params: {
							city,
							lang: "pt",
							key: import.meta.env.VITE_API_KEY,
						},
					},
				);
				console.log(data)
				setWeatherCurrent(data);
			} catch (error) {
				console.error("Erro ao buscar cidade:", error);
			}
		}

		async function searchCityForecast(city: string) {
			// try {
			// 	const { data } = await axios.get<WeatherForecast>(
			// 		`${import.meta.env.VITE_BASE_URL}forecast/daily`,
			// 		{
			// 			params: {
			// 				city,
			// 				days: 7,
			// 				key: import.meta.env.VITE_API_KEY,
			// 			},
			// 		},
			// 	);

			// 	setWeatherForecast(data);
			// } catch (error) {
			// 	console.error("Erro ao buscar cidade:", error);
			// }
			console.log('.')
		}

		searchCityCurrent(city);
		searchCityForecast(city);
	}

	return (
		<WeatherContext.Provider
			value={{ weatherCurrent, weatherForecast, searchCity }}
		>
			{children}
		</WeatherContext.Provider>
	);
}
