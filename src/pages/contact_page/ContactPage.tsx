import BlueHeader from "../../components/BlueHeader";
import { collection } from "firebase/firestore"
import {app, db} from "../../../firebase"

//get date
const now = new Date();
const monthDayYear = String((now.getMonth() + 1)) + '/' + String(now.getDate()) + '/' + String(now.getFullYear());

function ContactPage() {
    const messagesCol = collection(db, "messages");

    let title = "Chat With CSB";
    let description = "We usually don't bite.";
    return (
        <>
            <BlueHeader title={title} description={description} /> <p className="text-3xl border-white text-center">{monthDayYear}</p>

            <div className="flex justify-center">
                <div className="w-[40%] m-[8%] h-[75vh] bg-[#5c5c5c] rounded-lg border relative text-center">
                    <div className="flex justify-center w-full h-fit border-b-2 border-[#636363]">
                        <h1 className="font-normal">Contact</h1>
                    </div>
                    <p className="my-2">Please leave your message and email so we can reach out to you.</p>
                    <form className="flex flex-col items-center h-5/6 w-full absolute bottom-0" method="post">
                        <h3 className="font-normal">Email</h3>
                        <input className="mb-[2.5%] mt-[1%] border h-[3.5vh] w-[15vw] p-1" type="text" required></input>
                        <h3 className="font-normal">Message</h3>
                        <textarea className="mb-[5%] mt-[1%] border resize-none h-1/2 w-5/6 p-1" required></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactPage;