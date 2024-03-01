import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    name: "Facebook",
    imageUrl: "/images/facebook.svg",
  },
  {
    name: "Instagram",
    imageUrl: "/images/instagram.svg",
  },
  {
    name: "Twitter",
    imageUrl: "/images/twitter.svg",
  },
  {
    name: "Youtube",
    imageUrl: "/images/youtube.svg",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10 border-t">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 py-10 text-center md:py-16">
          <div className="flex items-center justify-center gap-12">
            {socialIcons.map((icon) => (
              <Image
                className="hover:cursor-pointer"
                key={icon.name}
                alt={icon.name}
                src={icon.imageUrl}
                width={24}
                height={24}
              />
            ))}
          </div>
          <div>
            <ul className="flex items-center justify-center gap-2 font-bold text-center max-md:text-sm max-md:flex-col md:gap-12">
              <li className="hover:underline hover:cursor-pointer">
                Conditions of Use
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Privacy & Policy
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Press Room
              </li>
            </ul>
          </div>
          <div className="gap-2">
            <p className="text-sm text-muted-foreground">
              &copy; 2023 MovieBox by Elysium{" "}
            </p>
           
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
