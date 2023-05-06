import BlueHeader from "../../components/BlueHeader";

//get date
const now = new Date();
const monthDayYear = String((now.getMonth() + 1)) + '/' + String(now.getDate()) + '/' + String(now.getFullYear());

function ContactPage() {

    let title = "Chat With CSB";
    let description = "We usually don't bite.";
    return (
        <>
            <BlueHeader title={title} description={description} /> 
            <p className="text-3xl desktop:text-6xl text-center m-[8%] desktop:m-[5%] rounded-xl">{monthDayYear}</p>

            <div className="flex justify-center">
                <div className="w-[95%] mb-[8%] h-[65vh] bg-[#5c5c5c] rounded-lg border relative text-center text-sm
                tablet:h-[75vh]
                desktop:h-[90vh] desktop:w-1/2">
                    <div className="flex justify-center w-full h-fit border-b-2 border-[#636363] p-[1%]">
                        <h1 className="font-normal text-3xl tablet:text-6xl">Contact</h1>
                    </div>
                    <p className="mt-2">Please leave your message and email so we can reach out.</p>
                    <form className="flex flex-col items-center h-5/6 w-full absolute bottom-0">
                        <h3 className="font-normal text-xl">Email</h3>
                        <input className="mb-[2.5%] mt-[1%] border h-[3.5vh] w-[90%] p-1" type="text" required></input>
                        <h3 className="font-normal text-xl">Message</h3>
                        <textarea className="mb-[5%] mt-[1%] border resize-none h-1/2 w-[90%] p-1" required></textarea>
                        <button className="bottom-12 absolute w-1/2 h-[10%]" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactPage;