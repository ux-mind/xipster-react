import React from "react";

import { CommonSection } from "../../components/Sections/CommonSection";
import { Page } from "../../components";

import teamIcon from "../../images/team-icon.svg";
import cardIcon from "../../images/product-1.svg";
import teamImage from "../../images/team-image.png";
import EFTImage from "../../images/EFT-image.png";

const TestPage = () => (
  <Page>
    <CommonSection
      title="Connect your team"
      text="Internal Team Chat allows all team members to communicate with a click of a button. Create Team Chats to include multiple users so everyone can take part in all of the important company conversations"
      iconSrc={teamIcon}
      imageSrc={teamImage}
    />

    <CommonSection
      title="EFT"
      iconSrc={cardIcon}
      imageSrc={EFTImage}
      list={[
        { text: "Send a link to customers to provide banking information required for EFT" },
        { text: "Securely collect single payments with ease" },
        { text: "Portal for Merchants to manage Account Payable and Accounts Receivable" },
        {
          text: "Set thresholds for Credit Card VS EFT for Accounts Receivable - no erosion to credit card volume",
        },
        { text: "Role based approvals" },
        { text: "Batch Payments" },
      ]}
    />

    <CommonSection
      title="Connect your team"
      text="Sign up multiple locations so all your stores or divisions have the same powerful communication tools. Our Croup View allows dedicated team members to easily see and compare all location activity and performance at a glance"
      iconSrc={teamIcon}
      imageSrc={teamImage}
      buttonLink="asdasd"
      reverse
    />
  </Page>
);

export default TestPage;
