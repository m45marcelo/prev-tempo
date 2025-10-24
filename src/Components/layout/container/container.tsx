import imageDay from "./../../../assets/images/background-day.png";
import imageNight from "./../../../assets/images/background-night.png";

interface ContainerProps {
	children: React.ReactNode;
	background: string | undefined;
}

export const Container: React.FC<ContainerProps> = ({
	children,
	background,
}) => {
	const backgroundImage = background === "Day" ? imageDay : imageNight;

	return (
		<div
			className="h-[38.375rem] w-[61rem] rounded-4xl py-14 px-14 bg-no-repeat bg-center bg-cover box-border"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			{children}
		</div>
	);
};
