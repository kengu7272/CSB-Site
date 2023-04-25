import BlueHeader from "../../Components/BlueHeader";

function StaffPage() {
  let title = "Meet The Staff";
  let description = "CSB recruits the top talent in the area and everyone excels at what they do.";

    return (
        <>
          <BlueHeader title={title} description={description} />
        </>
    );
}

export default StaffPage;