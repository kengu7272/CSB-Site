interface BlueHeaderProps {
    title: string;
    description: string;
}

const BlueHeader: React.FC<BlueHeaderProps> = ({title, description}) => {
    return (
        <div className="bg-blue-400 w-full h-[30vh] flex flex-col justify-center text-center content-center text-sm gap-[2vh]">
        <h1>{title}</h1>
        <p className="mx-1">{description}</p>
        </div>
    );
}

export default BlueHeader;