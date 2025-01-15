import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GradientContainer } from "../../common/";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
    title: string;
    btn_name?: string;
    onClick: () => void;
    children: React.ReactNode;
    pageName: string;
    className?: string;
}

const progressSteps: Record<string, boolean[]> = {
    TextAreaContainer: [true, false, false],
    LogoContainer: [true, true, false],
    BusinessPlanReady: [true, true, true],
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

export const CreateBusiness = ({ title = "Tell us about your business", btn_name = "Next", onClick, children, pageName, className }: Props) => {
    const steps = progressSteps[pageName] || [false, false, false];
    
    const renderContent = () => {
        if (pageName === "TextAreaContainer") {
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
        
        if (pageName === "LogoContainer") {
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
            <div className="min-h-[400px] md:min-h-[500px] flex flex-1 flex-col bg-white rounded-lg shadow-lg p-6">
                {children}
                <div className={`flex items-center ${pageName === "LogoContainer" ? "justify-between" : "justify-end"} gap-4 mt-6`}>
                    {pageName === "LogoContainer" &&
                        <div className="flex gap-4">
                            <button className="px-6 py-2 rounded-lg text-sm bg-gray-300 hover:bg-gray-400 text-white transition-colors">
                                Upload logo
                            </button>
                            <button className="px-6 py-2 rounded-lg text-sm bg-gray-300 hover:bg-gray-400 text-white transition-colors">
                                Enter Name
                            </button>
                        </div>
                    }

                    {pageName === "BusinessPlanReady" &&
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
        <main className={`p-2 flex justify-center items-center flex-col ${className}`}>
            <div className="flex items-center justify-between mb-4 md:mb-8 relative -top-5 w-full">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCircleXmark} className="mr-2" />
                    <h3>oreon</h3>
                </div>
                <div>
                    {}
                </div>
                <div className="" >

                </div>
            </div>
            {pageName !== "CreateDomainPage" && (
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
        </main>
    );
};
