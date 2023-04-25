import {useState} from 'react';
import workers from './workers.jpg'
import BlueHeader from '../../Components/BlueHeader';

interface PositionProps {
    name: string;
    description: string;
    salaryRange: string;
}

const MakePosition: React.FC<PositionProps> = ({name, description, salaryRange}) => {
    return (
        <div className="bg-[#5c5c5c] flex flex-col justify-center items-center
        rounded-lg border border-blue-400 p-[2.5%] relative w-[24vw] h-[40vh] text-center">
            <h3 className="top-[5%] absolute">{name}</h3>
            <p>{description}</p>
            <br></br>
            <p>{salaryRange}</p>
            <button className="bottom-[7.5%] absolute">Apply</button>
        </div>
    )
}

function Positions() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
        <div className='flex items-center justify-center'>
            <button className="my-[2.5%] h-[10vh] w-[15vw]" onClick={() => setToggle(toggle == false
            ? true : false)}>Open Positions</button>
        </div>
            <div style={{display: toggle == false
            ? 'flex' : 'none'}} className="flex-row justify-center items-center gap-[2.5%] mb-[2.5%]">
                <MakePosition name="Intern" 
                description="Exciting opportunity to pick up valuable experience. Open to all skill levels."
                salaryRange="$15-24 Hourly"/>
                <MakePosition name="Marketer" 
                description="For energetic individuals looking to make CSB look good. Marketing degree required."
                salaryRange="$25-40 Hourly"/>
                <MakePosition name="Legal Team Associate" 
                description="For those who can make sure everything we do is by the book."
                salaryRange="$25-45 Hourly"/>
                <MakePosition name="Web Developer" 
                description="Exciting opportunity to collaborate on the brand new official CSB website!"
                salaryRange="$25-45 Hourly"/>
            </div>
        </>
    )
}

function ReasonsToWork() {
    return (
        <div>
            <h2>Why You'll Love it</h2>
            <ul className='marker:text-white list-[circle] list-style list-inside 
            bg-[#5c5c5c] rounded-lg p-[1%] my-[1%]'>
                <li>CSB partakes in countless ventures so there will be many exciting opportunites</li>
                <li>Diversity</li>
                <li>A sense of status</li>
                <li>Great leadership</li>
                <li>Competitive pay</li>
                <li>Compliance with some safety standards</li>
            </ul>

            <h2>Candidates We're Searching For</h2>
            <ul className='marker:text-white list-[circle] list-style list-inside 
            bg-[#5c5c5c] rounded-lg p-[1%] my-[1%]'>
                <li>Quick thinkers</li>
                <li>Hard workers</li>
                <li>Creative minds</li>
                <li>Overachievers</li>
                <li>Loyal</li>
                <li>Collaborative</li>
            </ul>
        </div>
    )
}

function CareersPage() {
    let title = "Career Opportunities with CSB";
    let description = "Explore our various employment postings and don't hesitate to inquire.";

    return (
        <>
            <BlueHeader title={title} description={description} />
            
            <div className="mx-[8%]">
                <h2 className="mt-[1.5%] mb-[1.5%]">Join CSB!</h2>
                <p className="mb-[1.5%]">
                    CSB is always looking for qualified candidates so take a look at our open positions.</p>
                <img className="w-full" src={workers} alt='Workers' />
                <Positions />
                <ReasonsToWork />
            </div>
        </>
    );
}

export default CareersPage;