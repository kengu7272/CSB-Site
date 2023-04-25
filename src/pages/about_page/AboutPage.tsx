import city from './city.jpg'
import BlueHeader from '../../components/BlueHeader';

class Business {
  name: string;
  description: string;
  detail: string;
  facts: string[];

  constructor(name: string, description: string, detail: string, facts: string[]) {
    this.name = name;
    this.description = description;
    this.detail = detail;
    this.facts = facts;
  }
}

interface BusinessProps {
  business: Business;
}

let name = "MatchMakers";
let description = "Match Makers is actually CSB's first venture into the business space and has yielded great returns\
for the business, its employees, and its customers.";
let detail = "The business model is that the customer contacts CSB about their desire to find a soul \
        mate. CSB then allocates its resources to finding the best partner to match the customer's needs. \
        A soul mate can be an incredibly important asset in a person's life and can bring great joy. For that, \
        CSB has decided that instead of a massive bill to be sent to the customer that they likely would not \
        be able to afford, CSB charges a percentage of income throughout the life of the relationship. \
        This is great because everyone will be able to afford our service as the percentage rule affects \
        everyone proportionally. Additionally, with the percentage model, CSB is more motivated to find \
        the perfect soul mate for the customer, leading to a win-win situation.";
let facts = ["100% Customer Satisfaction", "100% Success Rate to Date", "Only Have Good Reviews",
 "Perfect Track Record"];
const matchMakers = new Business(name, description, detail, facts)

name = "CSBoxing";
description = "CSB's most exciting event yet! This is the business where CSB enters the entertainment sector.";
detail = "This venture includes members from CSB, making it extremely exciting. CSB hosts a live boxing match with\
          various fighters of all skill levels. CSB handles all of the admissions, concessions, recording, and\
          all logistics of the event efficiently and professionally. CSBoxing can be an exciting family night\
          out for all ages.";
facts = ["Co-CEO Kevin's Fight Is The Main Event", "Delicious Food Available", 
"Audience Can Throw Slime at Fighters", "There's Many Chances to Win Money"];
const CSBoxing = new Business(name, description, detail, facts)

let ourStory = "Kevin and Nick were working at Dairy Queen when they decided to start their own company.\
 They had a passion for entrepreneurship and saw an opportunity to create a business that could make a\
 positive impact on the world. They developed the business model for CSB Enterprises, which aimed to\
 try different ventures to find the ones that would truly succeed and make a difference.\n\n\
Their first venture, MatchMakers, was a personalized service that aimed to help clients find their\
 ideal partner. Rather than being an app, the service involved one-on-one interactions with the\
 employees of CSB Enterprises. The service was designed to match people based on their shared\
 interests and values, and is aiming to collect money throughout the duration\
 of successful relationships, showing an incentive for both parties.\n\n\
After the success of MatchMakers, Kevin and Nick wanted to try something new. They launched CSBoxing,\
 an amateur boxing event that aimed to bring the community together for a fun night out. The event is\
 project to be a huge success and attract many people from the local community.\n\n\
Currently, Kevin and Nick are working hard to get CSB Enterprises off the ground. They are constantly\
 brainstorming new ideas for ventures and are always on the lookout for opportunities that align with\
 their values and vision for the company. They understand that not every venture will be successful,\
 but they are willing to take risks and learn from their mistakes.\n\n\
As they continue to expand CSB Enterprises, Kevin and Nick remain focused on their mission to make a\
 positive impact on the world. They believe that through their ventures, they can help to fill gaps\
 in the market and provide people with the services they need and want. With a passion for\
 entrepreneurship and a commitment to creating a better future, Kevin and Nick are well on\
 their way to success with CSB Enterprises.";

function Beginning() {
  let title = "Who We Are";
  let description = "Founded in Canal Fulton, Ohio, with ventures in many industries and is continuing to expand.";

  return (
    <>
      <BlueHeader title={title} description={description} />

      <div className='my-[1%] mx-[15%] flex flex-col justify-center'>
        <h2 className='my-[1.5%]'>Our Story</h2>
        <p className='whitespace-pre-wrap'>{ourStory}</p>
        <img className='w-full my-[1.5%]' src={city} alt="City Image"></img>
      </div>
    </>
  );
}


const MakeBusiness: React.FC<BusinessProps> = (object: BusinessProps) => {
  return (
    <div className='flex flex-row justify-center items-center mb-[5%] 
    odd:mr-[25%] [&>h2]:odd:ml-[30%]
    even:ml-[25%] even:flex-row-reverse [&>h2]:even:mr-[30%]'>
      <div className='bg-[#5c5c5c] rounded-xl border p-[5%]'>
        <p>{object.business.description}</p>
        <br></br>
        <p>{object.business.detail}</p>
        <br></br>
        <p className='underline'>Fun Facts: </p>
        <ul>
          <li>{object.business.facts[0]}</li>
          <li>{object.business.facts[1]}</li>
          <li>{object.business.facts[2]}</li>
          <li>{object.business.facts[3]}</li>
        </ul>
      </div>
      <h2 className='border rounded-lg p-[1%]'>{object.business.name}</h2>
    </div>
  );
}

function WhatWeDo() {
  return (
    <>
    <h2 className='ml-[15%]'>Ventures</h2>
    <div className='my-[1%] mx-[15%] flex flex-col justify-center p-[1%] rounded-xl border-2 border-[#636363]'>
      <MakeBusiness business={matchMakers} />
      <MakeBusiness business={CSBoxing} />
    </div>
    </>
  );
}

function AboutPage() {
    return (
        <div>
          <Beginning />
          <WhatWeDo />
        </div>
    );
}

export default AboutPage;