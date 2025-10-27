import { v4 as uuidv4 } from "uuid";
import sensacaoTermicaIcon from "./../../../assets/icons/feels-like.svg";
import humidadeIcon from "./../../../assets/icons/humidity.svg";
import ventoIcon from "./../../../assets/icons/wind.svg";
import { useWeather } from "../../../hooks/useWeather";
import { selectIconWeather } from "../../../utils/selectIconWeather";
import { WeatherItem } from "../../ui/WeatherItem";


export const Main = () => {
	const { weatherCurrent } = useWeather();
	const { weatherForecast } = useWeather();

	return (
		<main className="flex w-full flex-col gap-9">
			<div className="flex h-[200px] w-full relative justify-between">
				<div className="flex items-center">
					{weatherCurrent && (
						<h3 className="text-[116px] font-light text-white">
							{Math.round(weatherCurrent.data[0].temp)}
						</h3>
					)}

					<div className="h-[84px] flex items-end ml-8">
						<ul className="h-14">
							<li className="text-[20px] font-medium text-white">
								°C | F°
							</li>
							<li className="text-[20px] font-medium text-white">
								{weatherCurrent?.data[0].weather.description}
							</li>
						</ul>
					</div>
				</div>

				<img
					alt="imagem icon"
					src={selectIconWeather(
						Number(weatherCurrent?.data[0].weather.code),
						weatherCurrent?.data[0].weather.icon,
					)}
					width={200}
					className="absolute bottom-[2.125rem] right-48"
				/>

				<div className="h-[12.5rem] flex items-center">
					<div className="h-[5.25rem] flex items-end">
						<ul className="leading-7">
							<li className="flex">
								<img
									alt="Sensação Térmica"
									src={sensacaoTermicaIcon}
									height={20}
									width={20}
									className="mr-2"
								/>
								{weatherCurrent && (
									<span className="text-[0.875rem] font-normal text-white">
										Sensação Termica:{" "}
										{Math.round(
											weatherCurrent?.data[0].app_temp,
										)}
										°C
									</span>
								)}
							</li>
							<li className="flex">
								<img
									alt="Umidade"
									src={humidadeIcon}
									height={20}
									width={20}
									className="mr-2"
								/>
								<span className="text-[0.875rem] font-normal text-white">
									Umidade: {weatherCurrent?.data[0].rh}%
								</span>
							</li>
							<li className="flex">
								<img
									alt="Vento"
									src={ventoIcon}
									height={20}
									width={20}
									className="mr-2"
								/>
								<span className="text-[0.875rem] font-normal text-white">
									Vento: {weatherCurrent?.data[0].wind_spd} km/h
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="h-48 w-full max-w-[864px] flex items-center justify-between bg-[#0d6efd40] px-[52px] rounded-4xl">
				{weatherForecast?.data.map((item) => (
					<WeatherItem
						key={uuidv4()}
						iconWeather={selectIconWeather(
							Number(item.weather.code),
							item.weather.icon,
						)}
						minTemp={item.min_temp}
						maxTemp={item.max_temp}
						description={item.weather.description}
						dataString={item.valid_date}
					/>
				))}
			</div>
		</main>
	);
};
