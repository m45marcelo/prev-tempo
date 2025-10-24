import ceuClaroDiaIcon from "./../../src/assets/icons/01d.svg"
import ceuClaroNoiteIcon from "./../../src/assets/icons/01n.svg"
import poucasNuvensDiaIcon from "./../../src/assets/icons/02d.svg"
import poucasNuvensNoiteIcon from "./../../src/assets/icons/02n.svg"
import precipitacaoDesconhecidaDiaIcon from "./../../src/assets/icons/03d.svg"
import precipitacaoDesconhecidaNoiteIcon from "./../../src/assets/icons/03n.svg"
import nuvensNubladasDiaIcon from "./../../src/assets/icons/04d.svg"
import nuvensNubladasNoiteIcon from "./../../src/assets/icons/04n.svg"
import chuvaForteDiaIcon from "./../../src/assets/icons/09d.svg"
import chuvaForteNoiteIcon from "./../../src/assets/icons/09n.svg"
import chuvaFracaDiaIcon from "./../../src/assets/icons/10d.svg"
import chuvaFracaNoiteIcon from "./../../src/assets/icons/10n.svg"
import trovoadaGaroaDiaIcon from "./../../src/assets/icons/11d.svg"
import trovoadaGaroaNoiteIcon from "./../../src/assets/icons/11n.svg"
import neveDiaIcon from "./../../src/assets/icons/13d.svg"
import neveNoiteIcon from "./../../src/assets/icons/13n.svg"
import nevoaDiaIcon from "./../../src/assets/icons/50d.svg"
import nevoaNoiteIcon from "./../../src/assets/icons/50n.svg"


export function selectIconWeather(code: number , icon: string | undefined){
    if(!icon || !code) return;
    let iconWeather = undefined;
    const lastLetter = icon.split("").slice(-1)[0];

    if(code > 199 && code < 234){
        if(lastLetter === "d") iconWeather = trovoadaGaroaDiaIcon;
        if(lastLetter === "n") iconWeather = trovoadaGaroaNoiteIcon;
    }

    if(code > 299 && code < 502 || code === 520){
        if(lastLetter === "d") iconWeather = chuvaFracaDiaIcon;
        if(lastLetter === "n") iconWeather = chuvaFracaNoiteIcon;
    }

    if(code > 501 && code < 523){
        if(lastLetter === "d") iconWeather = chuvaForteDiaIcon;
        if(lastLetter === "n") iconWeather = chuvaForteNoiteIcon;
    }

    if(code > 599 && code < 624){
        if(lastLetter === "d") iconWeather = neveDiaIcon;
        if(lastLetter === "n") iconWeather = neveNoiteIcon;
    }

    if(code > 699 && code < 752){
        if(lastLetter === "d") iconWeather = nevoaDiaIcon;
        if(lastLetter === "n") iconWeather = nevoaNoiteIcon;
    }

    if(code === 800){
        if(lastLetter === "d") iconWeather = ceuClaroDiaIcon;
        if(lastLetter === "n") iconWeather = ceuClaroNoiteIcon;
    }

    if(code > 800 && code < 803){
        if(lastLetter === "d") iconWeather = poucasNuvensDiaIcon;
        if(lastLetter === "n") iconWeather = poucasNuvensNoiteIcon;
    }

    if(code > 802 && code < 805){
        if(lastLetter === "d") iconWeather = nuvensNubladasDiaIcon;
        if(lastLetter === "n") iconWeather = nuvensNubladasNoiteIcon;
    }

    if(code === 900){
        if(lastLetter === "d") iconWeather = precipitacaoDesconhecidaDiaIcon;
        if(lastLetter === "n") iconWeather = precipitacaoDesconhecidaNoiteIcon;
    }

    return iconWeather;
}