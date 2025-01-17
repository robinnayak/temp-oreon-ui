import { faChartBar, faClipboardList, faFileAlt, faLightbulb, faUserFriends, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NextButton from "../../../common/components/NextButton";

const Step3 = ({ handleCross, handleNext, infoObj }: { handleCross: () => void, handleNext: (infoObj: any) => void, infoObj: any }) => {
    const [selectedOption, setSelectedOption] = useState(false);
    const options = [
        { name: "Pricing Strategy", icon: faChartBar },
        { name: "Business Plan", icon: faClipboardList },
        { name: "Tips", icon: faLightbulb },
        { name: "Customer Service Strategy", icon: faUserFriends },
        { name: "Market Research", icon: faFileAlt },
        { name: "Competitor Analysis", icon: faWallet },
    ];

    return (
        <>

            <div className="flex flex-col flex-1">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 flex-1">
                    {options.map((option, index) => (
                        <button
                            onClick={() => setSelectedOption(!selectedOption)}
                            key={index}
                            className="rounded-lg flex items-center justify-center transition-transform hover:scale-105 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm hover:shadow-md"
                        >
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-6 bg-whitecursor-pointer"
                            >
                                <FontAwesomeIcon icon={option.icon} className="text-purple-500 text-3xl mb-4" />
                                <h3 className="text-gray-800 text-sm font-medium text-center">{option.name}</h3>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <div className={`flex items-center justify-end gap-4 mt-6`}>

                <button onClick={handleNext} className="bg-purple-500 text-white px-4 py-2 rounded-md text-center">
                    Download
                </button>
                <NextButton onClick={handleNext} btn_name="Next" />
            </div>
        </>
    );
};

export default Step3
