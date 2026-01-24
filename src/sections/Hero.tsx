"use client";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import StarIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";
import { FadeIn } from "@/components/animations";
import HeroOrbit from "@/components/block/HeroOrbit";
import { DocumentIcon } from "@/components/icons";
import { Button, Container, Section } from "@/components/ui";
import { PERSONAL_INFO } from "@/constants/personal-info";
import { personalInfo } from "@/data/personalData";
import { scrollToElement } from "@/utils";
import Image from "next/image";
import HeroButton from "./subComponents/HeroButton";

export default function HeroSection() {
  const handleOpenResume = () => {
    window.open(
      "https://drive.google.com/file/d/1bI8XDpcuSbxJNSzzWLaH63R5mIrQphYB/view?usp=sharing",
      "_blank"
    );
  };
  const handleScrollToProjects = () => {
    scrollToElement("projects");
  };

  const handleScrollToContact = () => {
    scrollToElement("contact");
  };
  return (
    <Section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background grain texture */}
      {/* <div className="absolute inset-0 opacity-5">
        <Image
          src={otherImages.grain}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div> */}

      {/* Solar/Space themed background */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-blue-900/10 to-indigo-900/20" />

        {/* Solar glow effect */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-yellow-400/10 via-orange-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-2xl" />
      </div>
      <Container>
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking behind from computer"
            width={100}
            height={100}
            priority
          />
          <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="animate-ping-large rounded-full bg-green-500 absolute inset-0"></div>
            </div>
            <div className="text-sm font-semibold">
              {personalInfo.name}
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            {personalInfo.title}
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-base  mx-auto">
            {PERSONAL_INFO.profile}
          </p>
        </div>

        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center z-50 relative">
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <HeroButton label="View Resume" icon={<DocumentIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 " />} onClick={handleOpenResume} />

              <HeroButton label="Let's Connect" icon={<ArrowUpRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 " />} onClick={handleScrollToContact} />

              <HeroButton label="View My Work" icon={<ArrowDownIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />} onClick={handleScrollToProjects} />
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
