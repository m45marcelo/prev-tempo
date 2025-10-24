import type { WeatherCurrent } from "../types";

export function defineTheme(
	weather: WeatherCurrent | null
): string | undefined {

    if(!weather) return;
    const currentDate: string = weather.data[0].ob_time;
    const sunrise: string = weather.data[0].sunrise;
    const sunset: string = weather.data[0].sunset;

	const currentTime = currentDate.split(" ")[1].split(":");
	const currentHour = Number(currentTime[0] + currentTime[1]);
	const sunriseFormating = sunrise.split(":");
	const newSunrise = Number(sunriseFormating[0] + sunriseFormating[1]);
	const sunsetFormating = sunset.split(":");
	const newSunset = Number(sunsetFormating[0] + sunsetFormating[1]);

	if (currentHour >= newSunrise && currentHour < newSunset) {
		return "Day";
	}
    if (currentHour >= newSunset && currentHour < newSunrise) {
		return "Night";
	} 
}
