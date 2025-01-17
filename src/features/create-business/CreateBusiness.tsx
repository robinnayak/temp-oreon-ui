import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GradientContainer } from "../../common/";
import { faEllipsis, faMagnifyingGlass, faUpRightAndDownLeftFromCenter, faXmark } from "@fortawesome/free-solid-svg-icons";
import NextButton from "../../common/components/NextButton";

interface Props {
    title: string;
    btn_name?: string;
    onClick: () => void;
    onClose: () => void;
    children: React.ReactNode;
    pageName: string;
    className?: string;
}

const progressSteps: Record<string, boolean[]> = {
    "step 1": [true, false, false],
    "step 2": [true, true, false],
    "step 3": [true, true, true],
};

const ProgressBar = ({ steps }: { steps: boolean[] }) => {
    return (
        <div className="flex items-center">
            {steps.map((isActive, index) => (
                <div
                    key={index}
                    className={`${isActive ? "bg-accent-dark" : "bg-primary-inactive"} w-20 h-1 ${index < steps.length - 1 ? "mr-1" : ""
                        }`}
                ></div>
            ))}
        </div>
    );
};

export const CreateBusiness = ({ title = "Tell us about your business", btn_name = "Next", onClick, onClose, children, pageName, className }: Props) => {
    const steps = progressSteps[pageName] || [false, false, false];

    const renderWelcomePage = () => {
        return (
            <div className="min-h-[600px] flex flex-1 flex-col justify-center items-center md:px-20 md:py-16 sm:px-10 sm:py-10 px-4 py-6">
                <img
                    src="/src/assets/images/oreon-logo.png"
                    alt="Oreon"
                    width={300}
                    height={200}
                    className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] sm:w-[350px] sm:h-[200px]"
                />
                <h1 className="text-2xl font-light pb-4 text-center md:text-3xl sm:text-2xl">{title.toUpperCase()}</h1>
                <NextButton onClick={onClick} btn_name={btn_name} className="absolute bottom-36 right-64 md:right-80" />
            </div>
        );
    };

    const renderContent = () => {
        if (pageName === "step 1") {
            return (
                <GradientContainer className="min-h-[400px] flex flex-1 flex-col">
                    {children}
                    <div className="flex items-center justify-end gap-4 mt-6">
                        <span className="mr-2 text-gray-600">Expand business plan</span>
                        <button onClick={onClick} className="bg-purple-500 text-white px-4 py-2 rounded-md w-24 text-center">
                            {btn_name}
                        </button>
                    </div>
                </GradientContainer>
            );
        }

        if (pageName === "step 2") {
            return (
                <div className="min-h-[400px] flex flex-1 flex-col">
                    {children}
                    <div className="flex items-center justify-end gap-4 mt-6">
                        <button onClick={onClick} className="bg-purple-500 text-white px-4 py-2 rounded-md w-24 text-center">
                            {btn_name}
                        </button>
                    </div>
                </div>
            );
        }



        return (
            <div className="min-h-[400px] md:min-h-[500px] flex flex-1 flex-col bg-white rounded-lg ">
                {children}
                <div className={`flex items-center ${pageName === "step 2" ? "justify-between" : "justify-end"} gap-4 mt-6`}>
                    {pageName === "step 2" &&
                        <div className="flex gap-4">
                            <button className="px-6 py-2 rounded-lg text-sm bg-gray-300 hover:bg-gray-400 text-white transition-colors">
                                Upload logo
                            </button>
                            <button className="px-6 py-2 rounded-lg text-sm bg-gray-300 hover:bg-gray-400 text-white transition-colors">
                                Enter Name
                            </button>
                        </div>
                    }

                    {pageName === "step 3" &&
                        <button onClick={onClick} className="bg-purple-500 text-white px-4 py-2 rounded-md text-center">
                            Download
                        </button>
                    }

                    <button onClick={onClick} className="bg-purple-500 text-white px-4 py-2 rounded-md w-24 text-center">
                        {btn_name}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <main className={`p-2  flex justify-center items-center flex-col ${className}`}>
            {pageName === "WelcomePage" ? renderWelcomePage() : <>
                <div className="flex items-center justify-between mb-4 md:mb-8 relative -top-5 w-full">
                    <div className="flex items-center">
                        <button onClick={onClose} className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                            <FontAwesomeIcon icon={faXmark} className="mr-4" size="lg" />
                        </button>
                        <h3 className="text-lg font-light">New Business</h3>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">{pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h3>
                    </div>
                    <div className="" >
                        <button>
                            <FontAwesomeIcon icon={faEllipsis} className="mr-4" size="sm" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-4" size="sm" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="mr-4" size="sm" />
                        </button>
                    </div>
                </div>
                {pageName !== "Domain" && (
                    <>
                        <div className="w-full flex justify-center">
                            <ProgressBar steps={steps} />
                        </div>
                        <h1 className="my-8">{title}</h1>
                    </>
                )}
                <div className="md:min-w-[700px] md:min-h-[400px] ">
                    {renderContent()}
                </div>
            </>}
        </main>
    );
};
