export function formatDatetime(
	dateString: string | undefined,
	timezone: string | undefined,
) {
	if (!dateString || !timezone) return;

	let date: Date;

	if (dateString.includes(" ")) {
		date = new Date(dateString.replace(" ", "T") + "Z");
	} else {
		date = new Date(dateString);
	}

	const formatter = new Intl.DateTimeFormat("pt-BR", {
		timeZone: timezone,
		weekday: "long",
		day: "2-digit",
		month: "long",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});

	console.log(formatter.format(date))

	return formatter.format(date);

}
