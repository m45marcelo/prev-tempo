import { useState } from "react";

export function getPosition() {
	const [latitude, setLatitude] = useState<number | null>(null);
	const [longitude, setLongitude] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	if (!navigator.geolocation) {
		setError("Geolocalização não é suportada pelo seu navegador.");
		return;
	}

	setLoading(true);
	setError(null);

	navigator.geolocation.getCurrentPosition(
		(position) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
			setLoading(false);
		},
		(err) => {
			switch (err.code) {
				case err.PERMISSION_DENIED:
					setError("Permissão negada para acessar localização.");
					break;
				case err.POSITION_UNAVAILABLE:
					setError("Informações de localização indisponíveis.");
					break;
				case err.TIMEOUT:
					setError("Tempo limite ao tentar obter localização.");
					break;
				default:
					setError("Ocorreu um erro desconhecido.");
			}
			setLoading(false);
		},
	);
}

