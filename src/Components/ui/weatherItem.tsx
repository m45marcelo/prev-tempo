interface WeatherItemProps {
    iconWeather: string;
}

export const WeatherItem: React.FC<WeatherItemProps> = ({iconWeather}) => {
    return(
        <div className="flex flex-col text-center relative">
            <span className="text-[13px] text-white/80 font-light mb-[72px]">Thursday</span>
            <img alt="imagem icone clima" src={iconWeather} width={80} className="absolute top-6 left-4"/>
            <span className="text-base text-white font-medium">26° - 36°</span>
            <span className="text-[13px] text-white/80 font-light">Overcast clounds</span>
        </div>
    )
}