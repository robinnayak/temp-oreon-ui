import { useState } from "react";
import TestLogo from "../../../assets/test-brand-logo.png";
import NextButton from "../../../common/components/NextButton";

const Step2 = ({ handleCross, handleNext, infoObj }: { handleCross: () => void, handleNext: (infoObj: any) => void, infoObj: any }) => {
    const [selectedLogo, setSelectedLogo] = useState({});
    const companyLogos = [
        { name: "Oreon", background: "black", selected: selectedLogo, logo: TestLogo },
        { name: "Oreon", background: "white", selected: selectedLogo, logo: TestLogo },
        { name: "Oreon", background: "black", selected: selectedLogo, logo: TestLogo },
        { name: "Oreon", background: "white", selected: selectedLogo, logo: TestLogo },
        { name: "Oreon", background: "black", selected: selectedLogo, logo: TestLogo },
        { name: "Oreon", background: "white", selected: selectedLogo, logo: TestLogo },
        { name: "Oreon", background: "black", selected: selectedLogo, logo: TestLogo },
        { name: "Oreon", background: "white", selected: selectedLogo, logo: TestLogo },
    ];
    const handleNextClick = () => {
        handleNext({ ...infoObj, businessLogo: selectedLogo })
    }
    return (
        <>
            <div className="flex flex-col flex-1 p-4  rounded-lg  cursor-pointer transition-all duration-300 ">
                <div className="w-full flex-1">
                    <div className="flex justify-end mb-4">
                        <button
                            className="text-purple-500 flex items-center gap-2 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                            aria-label="Generate more logo options"
                        >
                            <span className="text-sm font-medium">Generate More</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {companyLogos.map((company, index) => (
                            <button
                                onClick={() => setSelectedLogo(company)}
                                key={index}
                                className="p-4 rounded-lg flex items-center justify-center transition-transform hover:scale-105 focus:ring-2 focus:ring-purple-400 focus:outline-none shadow-sm hover:shadow-md"
                                style={{ background: company.background }}
                                aria-label={`Select ${company.name} as company logo`}
                            >
                                <span className={`text-xl font-medium ${company.background === 'black' ? 'text-white' : 'text-black'}`}>
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="w-16 h-16 object-contain"
                                    />
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`flex items-center justify-between  gap-4 mt-6`}>

                <div className="flex gap-4">
                    <button className="px-6 py-2 rounded-lg text-sm bg-gray-300 hover:bg-gray-400 text-white transition-colors">
                        Upload logo
                    </button>
                    <button className="px-6 py-2 rounded-lg text-sm bg-gray-300 hover:bg-gray-400 text-white transition-colors">
                        Enter Name
                    </button>
                </div>

                <NextButton onClick={handleNextClick} btn_name="Next" />
            </div>
        </>
    );
}

export default Step2