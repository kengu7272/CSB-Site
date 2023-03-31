interface ReviewProps {
    name: string;
    review: string;
    rating: string;
}

const MakeReview: React.FC<ReviewProps> = ({name, review, rating}) => {
    return (
        <div className="reviewBox">
            <text>{review}</text>
            <text>-{name} ({rating})</text>
        </div>
    )
}

function Reviews() {
    return (
        <div id="reviewContainer">
            <h2>Listen to what they have to say:</h2>
            <p>All reviews are from reputable sources that have interacted with the business in the past.</p>

            <div id="reviews">
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
    )
}

export default Reviews