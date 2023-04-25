interface BlueHeaderProps {
    title: string;
    description: string;
}

const BlueHeader: React.FC<BlueHeaderProps> = ({title, description}) => {
    return (
        <div className="bg-blue-400 w-full h-[40vh] flex flex-col justify-center text-center content-center">
        <h1>{title}</h1>
        <p>{description}</p>
        </div>
    );
}

export default BlueHeader;