import React from "react";
import { Header } from "@/components/Header";
import ExpandContentButton from "@/components/ExpandContentButton";
import Image from "next/image";
import WhyPartnerWithUsImage from "../../assets/partnership-page/why-partner-with-us.svg";
import WhoShouldPartnerWithUsImage from "../../assets/partnership-page/who-should-partner-with-us.svg";
import PartnerIcon from "../../assets/partnership-page/icon-partner.svg";
import CollaboratorIcon from "../../assets/partnership-page/icon-collaborator.svg";
import AssociateIcon from "../../assets/partnership-page/icon-associate.svg";
import { LinkButton } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charity Partnership | now-u"
}


export default function PartnershipPage(): React.ReactElement {
  return (
    <>
      <Header
        title="Charity Partnership"
        subtitle="Partner with now-u: Empower Change Together"
        body="Charity partnerships are a key part of now-u’s mission to create a more just and sustainable world. To us, partnership means collaboration, shared vision, and collective action. By joining forces with other charities, we amplify our shared impact, leverage diverse expertise, and ensure a more holistic approach to addressing complex global challenges."
      />

      <div className="flex flex-col items-center gap-8"> {/* Main container */}
        <div  className="partnership-section max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)
        flex flex-col items-center px-4 py-8 md:flex-row-reverse justify-center gap-4"
        > {/* Why partner with us? */}
          <div className="object-cover mx-auto">
            <Image
              className="h-48 md:h-96 md:w-96"
              src={WhyPartnerWithUsImage}
              alt="A picture of two people shaking hands."
            />
          </div>

          <div className="partnership-section-text md:w-1/2 flex flex-col gap-2">
            <h2 className="text-xl font-bold font-heading">Why partner with us?</h2>
            <p className="font-medium">
              Partnering with now-u means joining a dynamic and passionate
              movement committed to making a tangible difference.
            </p>
            <p>
              By collaborating with us, your organisation gains access to a
              network of like-minded allies, innovative tools, and a dedicated
              platform for amplifying your cause.
            </p>
            <ExpandContentButton title="Discover the benefits of working with us">
              We bring extensive experience in mobilising volunteers, creating
              impactful campaigns, and engaging diverse communities. Our
              approach is rooted in inclusivity, creativity, and action-oriented
              solutions. Together, we can leverage our collective strengths to
              drive significant social change, expand our reach, and inspire
              greater community involvement. Partner with us to amplify your
              impact, share your story, and make a lasting difference in the
              lives of those who need it most.
            </ExpandContentButton>
            <LinkButton buttonStyle="primary" href="https://forms.monday.com/forms/cc4aaf4815a82d3f5450e5f519a12f1f?r=euc1"
                        target="_blank" rel="noreferrer"
                        className="md:self-start my-4">Partner with us</LinkButton>
          </div>
        </div>
        {/* Who should partner with us */}
        <div className="bg-light-orange w-full mx-auto flex flex-col items-center">
          <div
            className="partnership-section
        max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)
        bg-light-orange flex flex-col items-center px-4 py-8 md:flex-row justify-center gap-6"
          >
            <div className="object-cover">
              <Image
                className="h-36 md:w-[20rem] md:h-96 lg:w-[32rem] px-4"
                src={WhoShouldPartnerWithUsImage}
                alt="A picture of two people shaking hands."
              />
            </div>

            <div className="partnership-section-text md:w-1/2 flex flex-col gap-2">
              <h2 className="text-xl font-bold font-heading">Who should partner with us?</h2>
              <p className="font-medium">
                We invite diverse organisations to collaborate with us,
                including charities, non-profits, social enterprises, and
                advocacy groups that share our commitment to creating a more
                equitable and sustainable world.{" "}
              </p>
              <ExpandContentButton title="See what makes a good fit">
                Whether you are focused on environmental conservation, social
                justice, health and well-being, education, or community
                development, we believe in the power of collaboration to amplify
                our collective impact. Ideal partners are passionate about their
                mission, eager to engage in innovative and inclusive
                initiatives, and committed to fostering positive change.
                Together, we can build stronger, more resilient communities and
                make a meaningful difference.
              </ExpandContentButton>
              <LinkButton
                className="md:self-start my-4"
                title="View our collaborations"
                href={{ pathname: "/collaborations" }}
                buttonStyle="primary"
              />
            </div>
          </div>
        </div>

        <div className="max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg) flex flex-col gap-8 my-4 px-4"> {/* How our charity partnership work */}
          <h2 className="text-xl font-bold font-heading">
            How our charity partnerships work
          </h2>
          <p>
            <strong>
              Starting a charity partnership with now-u is free, simple and
              beneficial.
            </strong>{" "}
            We offer three levels of partnership to match your requirements and
            engagement with us. Each partnership tier includes various benefits
            designed to expand your organisation’s reach and impact. In return,
            we ask you to help us raise awareness about now-u and our campaigns
            related to your work. Together we can build a powerful, engaged
            community and drive significant positive change. Join us in our
            mission to inform, involve, and inspire action for a better world.
          </p>
          <LinkButton buttonStyle="primary" href="https://forms.monday.com/forms/cc4aaf4815a82d3f5450e5f519a12f1f?r=euc1"
                      target="_blank"
                      className="md:self-start my-4">Partner with us</LinkButton>
        </div>
        <div className="max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg) flex flex-col lg:flex-row gap-2 w-full mb-8 px-4"> {/* Partner Role Cards */}
          <PartnershipRoleCard
            className="bg-amber"
            icon={PartnerIcon}
            title="Partner"
            benefits={[
              "Opportunities to co-create campaigns",
              "App campaigns featuring your charity",
              "Networking opportunities with other charities",
              "Marketing support and opportunities for joint campaigns",
            ]}
            roleResponsibilities={[
              "Actively promote now-u and our campaigns related to your work",
            ]}
          />
          <PartnershipRoleCard
            className="bg-[#F3B700]"
            icon={CollaboratorIcon}
            title="Collaborator"
            benefits={[
              "App campaigns featuring your charity",
              "Networking opportunities with other charities",
              "Marketing support and opportunities for joint campaigns",
            ]}
            roleResponsibilities={[
              "Promote now-u and our campaigns featuring your charity",
            ]}
          />
          <PartnershipRoleCard
            className="bg-[#FFDC79]"
            icon={AssociateIcon}
            title="Associate"
            benefits={[
              "Opportunities for app campaigns featuring your charity",
              "Marketing support and opportunities for joint campaigns",
            ]}
            roleResponsibilities={[
              "Promote now-u campaigns featuring your charity",
            ]}
          />
        </div>
      </div>
    </>
  );
}

interface PartnershipRoleCardProps {
  className: string;
  icon: any;
  title: string;
  benefits: string[];
  roleResponsibilities: string[];
}

const PartnershipRoleCard = (
  props: PartnershipRoleCardProps,
): React.ReactNode => {
  return (
    <div className={`flex flex-col gap-4 p-6 ${props.className} items-start lg:items-center`}>
      <div className="flex flex-col items-start lg:items-center gap-2">
        <Image
          src={props.icon}
          alt={`Icon of ${props.title} role`}
          className="h-[68px] w-[68px]"
          height="100"
          width="68"
        />
        <h4 className="font-bold font-heading text-lg">{props.title}</h4>
      </div>
      <div className="grow flex flex-col items-start gap-8 justify-between">
        <div className="">
          <h5 className="font-bold font-heading">Benefits:</h5>
          <ul className="list-disc list-outside pl-6">
            {props.benefits.map((benefit, index) => (
              <li key={`${props.title}-benefit-${index}`}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="">
          <h5 className="font-bold font-heading">Your role:</h5>
          <ul className="list-disc list-outside pl-6">
            {props.roleResponsibilities.map((benefit, index) => (
              <li key={`${props.title}-responsibility-${index}`}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
