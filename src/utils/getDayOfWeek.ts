export function getDayOfWeek(dateString: string): string {
	const date = new Date(dateString);

	const daysOfWeek: string[] = [
		"domingo",
		"segunda-feira",
		"terça-feira",
		"quarta-feira",
		"quinta-feira",
		"sexta-feira",
		"sábado",
	];

	const dayIndex: number = date.getDay();
	return daysOfWeek[dayIndex];
}

// Exemplo de uso:
console.log(getDayOfWeek("2025-09-12")); // "sexta-feira"
