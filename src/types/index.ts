// types/weather.ts
export interface WeatherForecastData {
	app_max_temp: number;
	app_min_temp: number;
	clouds: number;
	clouds_hi: number;
	clouds_low: number;
	clouds_mid: number;
	datetime: string;
	dewpt: number;
	high_temp: number;
	low_temp: number;
	max_dhi: number | null;
	max_temp: number;
	min_temp: number;
	moon_phase: number;
	moon_phase_lunation: number;
	moonrise_ts: number;
	moonset_ts: number;
	ozone: number;
	pop: number;
	precip: number;
	pres: number;
	rh: number;
	slp: number;
	snow: number;
	snow_depth: number;
	sunrise_ts: number;
	sunset_ts: number;
	temp: number;
	ts: number;
	uv: number;
	valid_date: string;
	vis: number;
	weather: {
		code: number;
		description: string;
		icon: string;
	};
	wind_cdir: string;
	wind_cdir_full: string;
	wind_dir: number;
	wind_gust_spd: number;
	wind_spd: number;
}

export interface WeatherForecast {
	city_name: string;
	country_code: string;
	data: WeatherForecastData[];
	lat: number;
	lon: number;
	state_code: string;
	timezone: string;
}


export interface WeatherCurrent {
    count: number;
    data: WeatherCurrentData[];
  }
  
  export interface WeatherCurrentData {
    wind_cdir: string;              // direção cardinal do vento, ex: "NE"
    rh: number;                     // umidade relativa (%)
    pod: string;                    // parte do dia (d = dia, n = noite)
    lon: number;                    // longitude
    pres: number;                   // pressão (mb)
    timezone: string;               // fuso horário
    ob_time: string;                // hora da observação
    country_code: string;           // código do país (ex: "US")
    clouds: number;                 // cobertura de nuvens (%)
    vis: number;                    // visibilidade (km)
    wind_spd: number;               // velocidade do vento (m/s)
    gust?: number;                  // rajada de vento (m/s) — pode estar ausente
    wind_cdir_full: string;         // direção completa, ex: "northeast"
    app_temp: number;               // temperatura aparente (°C)
    state_code: string;             // código do estado (ex: "NC")
    ts: number;                     // timestamp unix
    h_angle: number;                // ângulo horário solar
    dewpt: number;                  // ponto de orvalho (°C)
    weather: {
      icon: string;                 // ícone (ex: "c03d")
      code: number;                 // código de condição (ex: 803)
      description: string;          // descrição (ex: "Broken clouds")
    };
    uv: number;                     // índice UV
    aqi?: number;                   // índice de qualidade do ar (pode faltar)
    station: string;                // estação meteorológica
    sources: string[];              // fontes de dados
    wind_dir: number;               // direção do vento (graus)
    elev_angle: number;             // ângulo solar de elevação
    datetime: string;               // data/hora formatada
    precip: number;                 // precipitação (mm)
    ghi?: number;                   // radiação global horizontal (W/m²)
    dni?: number;                   // radiação direta normal (W/m²)
    dhi?: number;                   // radiação difusa horizontal (W/m²)
    solar_rad?: number;             // radiação solar instantânea (W/m²)
    city_name: string;              // nome da cidade
    sunrise: string;                // hora do nascer do sol
    sunset: string;                 // hora do pôr do sol
    temp: number;                   // temperatura atual (°C)
    lat: number;                    // latitude
    slp: number;                    // pressão ao nível do mar (mb)
}
