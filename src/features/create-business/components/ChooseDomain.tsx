import { useState } from "react";
import NextButton from "../../../common/components/NextButton";

interface DomainOption {
    name: string;
    price: string;
}

const ChooseDomain = ({ handleCross, handleNext, infoObj }: { handleCross: () => void, handleNext: (infoObj: any) => void, infoObj: any }) => {
    const [selectedOption, setSelectedOption] = useState<DomainOption>({ name: '', price: '' });
    const domains: DomainOption[] = [
        { name: 'igte.oreon.ai', price: 'Free' },
        { name: 'test.com', price: '£10/year' },
        { name: 'rtest.co.uk', price: '£9/year' },
        { name: 'test.io', price: '£37/year' },
        { name: 'test.ai', price: '£50/year' },
    ]

    const handleNextClick = () => {
        handleNext({ ...infoObj, domainName: selectedOption.name, domainPrice: selectedOption.price })
    }

    return (
        <>
            <div className="flex flex-col flex-1">
                <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-8 flex-1">
                    <div className="flex flex-col w-full md:w-2/5">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Select a domain</h1>
                        <p className="text-gray-600 text-sm">
                            A domain name is a unique, easy-to-remember address used to access your
                            website and professional email.
                        </p>
                    </div>

                    <div className="space-y-4 w-full md:w-3/5">
                        {domains.map((domain, index) => (
                            <button
                                key={index}
                                className={` w-full flex items-center justify-between p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-md cursor-pointer transition-all duration-300 ${selectedOption === domain ? 'bg-purple-50' : 'border-gray-200 hover:border-purple-200'}`}
                                onClick={() => setSelectedOption(domain)}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">{domain.name.charAt(0)}</span>
                                    </div>
                                    <span className="text-gray-800 font-medium">{domain.name}</span>
                                </div>
                                <span className={`text-sm font-semibold ${domain.price === 'Free' ? 'text-purple-500' : 'text-gray-600'}`}>
                                    {domain.price}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4 mt-6">
                <span className="mr-2 text-gray-600">Expand business plan</span>
                <NextButton onClick={handleNextClick} btn_name="Next" />
            </div>
        </>
    );
};

export default ChooseDomain