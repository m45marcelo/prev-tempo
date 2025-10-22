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


export function selectIcon(codeIcon: number){
    let iconWeather = null;
    if(codeIcon > 199 && codeIcon < 234){
        iconWeather = trovoadaGaroaDiaIcon
    }
}