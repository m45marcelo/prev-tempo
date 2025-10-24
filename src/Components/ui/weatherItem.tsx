import { useWeather } from "../../hooks/useWeather";
import { formatDatetime } from "../../utils/formatDatetime";
import { getDayOfWeek } from "../../utils/getDayofWeek";

interface WeatherItemProps {
	iconWeather: string | undefined;
	maxTemp: number;
	minTemp: number;
	description: string;
	dataString: string;
}

export const WeatherItem: React.FC<WeatherItemProps> = ({ ...props }) => {
	return (
		<div className="flex flex-col text-center ">
			<span className="text-[13px] text-white/80 font-light">
				{getDayOfWeek(props.dataString)}
			</span>
			<div className="h-[80px] flex items-center justify-center ">
				<img
					alt="imagem icone clima"
					src={props.iconWeather}
					width={80}
				/>
			</div>
			<div className="flex justify-center gap-2">
				<span className="text-base text-white font-medium">{`${Math.round(props.minTemp)}°`}</span>
				<span className="text-base text-white/60 font-medium">{`${Math.round(props.maxTemp)}°`}</span>
			</div>
			<span className="text-[13px] text-white/80 font-light">
				{props.description}
			</span>
		</div>
	);
};
