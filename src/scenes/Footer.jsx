import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-slate-800 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Eghishe Manukyan
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 ESPER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
