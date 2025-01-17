import { useState } from "react";
import { CreateBusiness } from "./CreateBusiness";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ChooseDomain from "./components/ChooseDomain";

export const CreateBusinessPage = () => {
  const [pageName, setPageName] = useState("WelcomePage");
  const [CreateWebsiteInfo, setCreateWebsiteInfo] = useState({
    businessName: "",
    businessDescription: "",
    businessLogo: "",
    domainName: "",
    domainPrice: "",
  });
  const handleNext = (info: any) => {
    // Navigate through pages sequentially
    console.log("============== createbussinesspage info ===================")
    console.log(info)
    console.log("============== createbussinesspage info =================")
    setCreateWebsiteInfo((prev) => ({
      ...prev,
      ...info,
    }));
    setPageName((prev) => {
      if (prev === "WelcomePage") return "step 1";
      if (prev === "step 1") return "step 2";
      if (prev === "step 2") return "step 3";
      if (prev === "step 3") return "Domain";
      if (prev === "Domain") {
        alert("You are at the domain page. Please select a domain to proceed.");
        return "Domain";
      }
      return "step 1";
    });
  };
  const renderContent = ({handleCross, handleNext}: {handleCross: () => void, handleNext: (info?: any) => void}) => {
    switch (pageName) {
      case "WelcomePage":
        return <></>;
      case "step 1":
        return <Step1 handleNext={handleNext} infoObj={CreateWebsiteInfo} />;
      case "step 2":
        return <Step2 handleCross={handleCross} handleNext={handleNext} infoObj={CreateWebsiteInfo} />;
      case "step 3":
        return <Step3 handleCross={handleCross} handleNext={handleNext} infoObj={CreateWebsiteInfo} />;
      case "Domain":
        return <ChooseDomain handleCross={handleCross} handleNext={handleNext}  infoObj={CreateWebsiteInfo} />;
      default:
        return <></>;
    }
  };

  const getTitle = () => {
    switch (pageName) {
      case "WelcomePage":
        return "Welcome to Oreon";
      case "step 1":
        return "Tell us about your business";
      case "step 2":
        return "Select your company name & logo";
      case "step 3":
        return "Your Business Plan is Ready!";
      case "Domain":
        return "Select Domain";
      default:
        return "Tell us about your business";
    }
  };

  
  // const handleBack = () => {
  //   // Navigate through pages sequentially
  //   setPageName((prev) => {
  //     if (prev === "step2") return "step1";
  //     if (prev === "step3") return "step2";
  //     if (prev === "Domain") return "step3";
  //     return "step1";
  //   });
  // };

  const handleCross = () => {
    // Navigate through pages sequentially
    setPageName((prev) => {
      if (prev === "WelcomePage") return "step 1";
      if (prev === "step 2") return "step 1";
      if (prev === "step 3") return "step 2";
      if (prev === "Domain") return "step 3";

      return "WelcomePage";
    });
  };

  return (
    <CreateBusiness
      title={getTitle()}
      btn_name={pageName === "Domain" ? "Skip" : "Next"}

      onClose={handleCross}
      pageName={pageName}
    >
      {renderContent({handleCross, handleNext})}
    </CreateBusiness>
  );
};
