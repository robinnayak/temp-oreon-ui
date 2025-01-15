import { faChartBar, faClipboardList, faFileAlt, faLightbulb, faPencil, faUserFriends, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CreateBusiness } from "./CreateBusiness";
import TestLogo from "../../assets/test-brand-logo.png";
import { Back } from "../../common/components/Back";

const TextAreaContainer = () => {
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
        />
      </div>
    </>
  );
};

const LogoContainer = ({ handleBack }: { handleBack: () => void }) => {
  const [selectedLogo, setSelectedLogo] = useState(false);
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

  return (
    <div className="flex flex-col flex-1">
      <Back onClick={handleBack} className="mb-8" />
      <div className="w-full flex-1">
        <div className="flex justify-end mb-4">
          <button
            className="text-purple-500 flex items-center gap-2 hover:text-purple-600"
            aria-label="Generate more logo options"
          >
            <span className="text-sm font-medium">Generate More</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {companyLogos.map((company, index) => (
            <button
              onClick={() => setSelectedLogo(!selectedLogo)}
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
  );
};

const BusinessPlanReady = ({ handleBack }: { handleBack: () => void }) => {
  const options = [
    { name: "Pricing Strategy", icon: faChartBar },
    { name: "Business Plan", icon: faClipboardList },
    { name: "Tips", icon: faLightbulb },
    { name: "Customer Service Strategy", icon: faUserFriends },
    { name: "Market Research", icon: faFileAlt },
    { name: "Competitor Analysis", icon: faWallet },
  ];

  return (
    <div className="flex flex-col flex-1">
      <Back onClick={handleBack} className="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 flex-1">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-lg cursor-pointer"
          >
            <FontAwesomeIcon icon={option.icon} className="text-purple-500 text-3xl mb-4" />
            <h3 className="text-gray-800 text-sm font-medium text-center">{option.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const CreateDomainPage = ({ handleBack }: { handleBack: () => void }) => {
  return (
    <div className="flex flex-col flex-1">
      <Back onClick={handleBack} className="mb-8" />

      <div className="flex flex-col md:flex-row justify-between gap-4 sm:gap-8 flex-1">
        <div className="flex flex-col w-full md:w-2/5">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Select a domain</h1>
          <p className="text-gray-600 text-sm">
            A domain name is a unique, easy-to-remember address used to access your
            website and professional email.
          </p>
        </div>

        <div className="space-y-4 w-full md:w-3/5">
          {[
            { name: 'ignite.oreon.ai', price: 'Free' },
            { name: 'test.com', price: '£10/year' },
            { name: 'rtest.co.uk', price: '£9/year' },
            { name: 'test.io', price: '£37/year' },
            { name: 'test.ai', price: '£50/year' },
          ].map((domain, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 border rounded-lg hover:shadow-md cursor-pointer transition-all duration-300 ${
                domain.price === 'Free' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-200'
              }`}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CreateBusinessPage = () => {
  const [pageName, setPageName] = useState("TextAreaContainer");

  const renderContent = (handleBack: () => void) => {
    switch (pageName) {
      case "TextAreaContainer":
        return <TextAreaContainer />;
      case "LogoContainer":
        return <LogoContainer handleBack={handleBack} />;
      case "BusinessPlanReady":
        return <BusinessPlanReady handleBack={handleBack} />;
      case "CreateDomainPage":
        return <CreateDomainPage handleBack={handleBack} />;
      default:
        return <TextAreaContainer />;
    }
  };

  const getTitle = () => {
    switch (pageName) {
      case "TextAreaContainer":
        return "Tell us about your business";
      case "LogoContainer":
        return "Select your company name & logo";
      case "BusinessPlanReady":
        return "Your Business Plan is Ready!";
      case "CreateDomainPage":
        return "Select Domain";
      default:
        return "Tell us about your business";
    }
  };

  const handleNext = () => {
    // Navigate through pages sequentially
    setPageName((prev) => {
      if (prev === "TextAreaContainer") return "LogoContainer";
      if (prev === "LogoContainer") return "BusinessPlanReady";
      if (prev === "BusinessPlanReady") return "CreateDomainPage";
      if (prev === "CreateDomainPage") {
        alert("You are at the domain page. Please select a domain to proceed.");
        return "CreateDomainPage";
      }
      return "TextAreaContainer";
    });
  };
  const handleBack = () => {
    // Navigate through pages sequentially
    setPageName((prev) => {
      if (prev === "LogoContainer") return "TextAreaContainer";
      if (prev === "BusinessPlanReady") return "LogoContainer";
      if (prev === "CreateDomainPage") return "BusinessPlanReady";
      return "TextAreaContainer";
    });
  };

  return (
    <CreateBusiness
      title={getTitle()}
      btn_name={pageName === "CreateDomainPage" ? "Next" : "Next"}
      onClick={handleNext}
      pageName={pageName}
    >
      {renderContent(handleBack)}
    </CreateBusiness>
  );
};
