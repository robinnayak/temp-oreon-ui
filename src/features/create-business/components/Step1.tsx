import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import NextButton from "../../../common/components/NextButton"

const Step1 = ({ handleNext, infoObj }: { handleNext: (info?: any) => void, infoObj: any }) => {
    const [websiteDetails, setWebsiteDetails] = useState("")

    // add validation that if any one donot select then show error
    const [error, setError] = useState("")

    const setErrorSelectOne = () => {
        setError("Please Write a Website Description");
        alert(error);
    };
    
    const handleNextClick = () => {
        handleNext({ ...infoObj, businessDescription: websiteDetails })
    }
    return (
        <>

            <div className="flex justify-between items-center">
                <h1 className="text-lg sm:text-xl font-bold mb-5">Describe your business in detail</h1>
                <FontAwesomeIcon icon={faPencil} />
            </div>
            <div className="flex flex-1 flex-col">
                <textarea
                    className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] flex-1 resize-none h-full outline-none"
                    placeholder="I want to start a silk brand that sells silk pillow cases, they are good for better skin and hair."
                    value={websiteDetails}
                    onChange={(e) => setWebsiteDetails(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-end gap-4 mt-6">
                <span className="mr-2 text-gray-600">Expand business plan</span>
                <NextButton onClick={websiteDetails === "" ? setErrorSelectOne : handleNextClick} btn_name="Next" />
            </div>
        </>
    )
}

export default Step1