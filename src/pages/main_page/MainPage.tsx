import BlueHeader from "../../Components/BlueHeader";

interface ReviewProps {
  name: string;
  review: string;
  rating: string;
}

const MakeReview: React.FC<ReviewProps> = ({name, review, rating}) => {
  return (
      <div className="flex flex-col justify-center bg-[#5c5c5c] text-center w-[24vw] h-[40vh]
      gap-[10%] rounded-lg border-2 border-blue-400 text-[100%] p-[1%]">
          <p>{review}</p>
          <p>-{name} ({rating})</p>
      </div>
  );
}

function Reviews() {
  return (
      <div className="w-[84%] h-[70vh] flex flex-col justify-center my-0 mx-[8%]">
          <h3>Listen to what they have to say:</h3>
          <p className="mb-[2.5%]">All reviews are from reputable sources that have interacted with the business in the past.</p>

          <div className="w-full flex flex-row justify-center h-[65%] gap-[1%]">
            <MakeReview name="Brandon Shoaf" review="Absolutely skilled in their work! I have interned
            there recently and it was an amazing experience!" rating="5/5"></MakeReview>
            <MakeReview name="Joey Powers" review="I actually had them take over my lawn mowing
            business for a week and they did such an exceptional job that my customers recommended
            my business to so many of their friends! I only have good things to say about them."
            rating="5/5"></MakeReview>
            <MakeReview name="Robert Walker" review="The leading experts in almost any industry!
            They gave me a run for my money when they took my drive thru shift!" rating="5/5"></MakeReview>
            <MakeReview name="Connor Underwood" review="I used to be 5'9 and even with no experience,
            they learned and gave me expert dietary advice along with life changing stretches and I now
            proudly stand at 6'4, I owe my life to these guys!" rating="5/5"></MakeReview>
          </div>
      </div>
  );
}

function MainPage() {
  let title = "CSB: We do it all.";
  let description = "Our business has incredibly experienced professionals in many areas and have big plans to \
  expand our reach and do it better than the competition.";

    return (
      <>
        <BlueHeader title={title} description={description} />
        <Reviews />
      </>
    );
}

export default MainPage;