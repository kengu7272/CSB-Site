import BlueHeader from "../../components/BlueHeader";
import kevin from "./Kevin.jpg";
import nick from "./Nick.jpg";
import brandon from "./Brandon.jpg"

class Employee {
  name: string;
  occupation: string;
  quote: string;
  image: string;

  constructor(name: string, occupation: string, quote: string, image: string) {
    this.name = name;
    this.occupation = occupation;
    this.quote = quote;
    this.image = image;
  }
}

interface MakeEmployeeProps {
  employee: Employee;
}

const MakeEmployee: React.FC<MakeEmployeeProps> = ({employee}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[75vw] h-fit p-2
    rounded-lg bg-[#444444] my-[1%] text-center
    desktop:w-[30vw] desktop:h-[30vw]">
      <img className='border-2 rounded-full w-[50vw] h-[50vw]
      desktop:w-[15vw] desktop:h-[15vw]' 
        src={employee.image} alt="Employee Image" 
      />
      <br></br>
      <h3>{employee.name}</h3>
      <br></br>
      <p className="font-bold">{employee.occupation}</p>
      <br></br>
      <p>"{employee.quote}"</p>
    </div>
  );
}

const Kevin = new Employee("Kevin", "Co-CEO", "Good things come to those who wait.", kevin);
const Nick = new Employee("Nick", "Co-CEO", "It's only a deal with the devil if you bring religion into it", nick);
const Brandon = new Employee("Brandon", "Intern", "I love being intern", brandon);

function StaffPage() {
  let title = "Meet The Staff";
  let description = "CSB recruits the top talent in the area and everyone excels at what they do.";

    return (
        <>
          <BlueHeader title={title} description={description} />

          <div className="my-[5%] mx-[5%] h-full flex flex-col items-center bg-[#5c5c5c] rounded-lg gap-2
          desktop:flex-row desktop:justify-center desktop:p-2">
            <MakeEmployee employee={Kevin} />
            <MakeEmployee employee={Nick} />
            <MakeEmployee employee={Brandon} />
          </div>
        </>
    );
}

export default StaffPage;