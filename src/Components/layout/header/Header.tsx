import { useEffect, useState } from "react";
import imageButton from "./../../../assets/images/location-light.svg";
import { useWeather } from "../../../hooks/useWeather";
import { formatDatetime } from "../../../utils/formatDatetime";
export const Header = () => {
	const [nameCity, setNameCity] = useState<string>("");
	const { searchCity, weatherCurrent } = useWeather();

	function handleNameCity(value: string) {
		setNameCity(value);
	}

	//biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		searchCity("Balsas");
	}, []);

	return (
		<header className="flex justify-between">
			<div className="w-full max-w-[420px]">
				<h1 className="text-[2.5rem] text-white font-medium mb-[10px] leading-11">
					{weatherCurrent?.data[0].city_name}
				</h1>
				<h2 className="text-[0.875rem] text-white/80 font-normal">
					{formatDatetime(weatherCurrent?.data[0].ob_time, weatherCurrent?.data[0].timezone)}
				</h2>
			</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					searchCity(nameCity);
				}}
				className="flex gap-2"
			>
				<div className="relative w-[22.875rem]">
					<input
						onChange={(e) => handleNameCity(e.target.value)}
						type="text"
						placeholder="Digite uma cidade"
						className="h-11 px-[14px] w-[284px] rounded-[10px] text-[13px] font-normal bg-[#fffefef3] ring-4 ring-[#0d6efd40] outline-0"
					/>
					<button
						type="submit"
						className="absolute cursor-pointer left-[270px] z-10 h-11 rounded-[10px] bg-[#17249a] px-6 py-3 text-white text-[14px] font-medium hover:bg-[#1828b9]"
					>
						Buscar
					</button>
				</div>
				<button
					type="button"
					className="h-11 w-11 flex justify-center items-center cursor-pointer rounded-[10px] bg-[#17249a]  text-white text-[14px] font-medium hover:bg-[#1828b9]"
				>
					<img
						alt="imagem"
						src={imageButton}
						className="h-6 text-amber-50"
					/>
				</button>
			</form>
		</header>
	);
};
