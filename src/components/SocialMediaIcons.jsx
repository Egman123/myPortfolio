const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
    <a
      className="hover:opacity-50 transition duration-500"
      href="https://www.linkedin.com/in/exishe-manukyan/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        alt="linkedin-link"
        src={require("../assets/linkedin.png")}
        className="w-10 h-10"
      />
    </a>
    <a
      className="hover:opacity-50 transition duration-500"
      href="https://github.com/Egman123"
      target="_blank"
      rel="noreferrer"
    >
      <img
        alt="github_link"
        src={require("../assets/github.png")}
        className="w-10 h-10"
      />
    </a>
   
  </div>
  
  );
};

export default SocialMediaIcons;
