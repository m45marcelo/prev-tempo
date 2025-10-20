import { WeatherItem } from "../../ui/weatherItem"
import imageSolAbertoIcon from "./../../../assets/icons/01d.svg"
import imageChuvaIcon from "./../../../assets/icons/10n.svg"
import sensacaoTermicaIcon from "./../../../assets/icons/feels-like.svg"
import humidadeIcon from "./../../../assets/icons/humidity.svg"
import ventoIcon from "./../../../assets/icons/wind.svg"

export const Main = () => {
    
    return (
        <main className="flex w-full flex-col gap-9">
            <div className="flex h-[200px] w-full relative justify-between">
                <div className="flex items-center">
                    <h3 className="text-[116px] font-light text-white">20</h3>

                    <div className="h-[84px] flex items-end ml-8">
                    <ul className="h-14">
                        <li className="text-[20px] font-medium text-white">°C | F</li>
                        <li className="text-[20px] font-medium text-white">Clear Sky</li>
                    </ul>
                    </div>
                </div>

                <img alt="imagem icon" src={imageSolAbertoIcon} width={200} className="absolute bottom-[34px] right-32"/>

                <div className="h-[200px] flex items-center">
                    <div className="h-[84px] flex items-end">
                    <ul className="leading-7">
                        <li className="flex">
                            <img alt="Sensação Térmica" src={sensacaoTermicaIcon} height={20} width={20} className="mr-2"/>
                            <span className="text-[14px] font-normal text-white">Feels like: 25°C</span>
                        </li>
                        <li className="flex">
                            <img alt="Umidade" src={humidadeIcon} height={20} width={20} className="mr-2"/>
                            <span className="text-[14px] font-normal text-white">Humidity: 59%</span>
                        </li>
                        <li className="flex">
                            <img alt="Vento" src={ventoIcon} height={20} width={20} className="mr-2"/>
                            <span className="text-[14px] font-normal text-white">Wind: 2km/h</span>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="h-48 w-full max-w-[864px] flex items-center justify-between bg-[#0d6efd40] px-[52px] rounded-4xl">
                <WeatherItem iconWeather={imageSolAbertoIcon}/> 
                <WeatherItem iconWeather={imageChuvaIcon}/>
                <WeatherItem iconWeather={imageSolAbertoIcon}/>
                <WeatherItem iconWeather={imageSolAbertoIcon}/>
                <WeatherItem iconWeather={imageSolAbertoIcon}/>
            </div>
        </main>
    )
}