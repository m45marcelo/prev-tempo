export function getDayOfWeek(dateString: string): string {
	const [year, month, day] = dateString.split("-").map(Number);
	const date = new Date(year, month - 1, day);

	const daysOfWeek = [
		"domingo",
		"segunda-feira",
		"terça-feira",
		"quarta-feira",
		"quinta-feira",
		"sexta-feira",
		"sábado",
	];

	return daysOfWeek[date.getDay()];
}
