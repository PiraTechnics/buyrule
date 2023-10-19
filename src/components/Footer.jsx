import Brand from "./Brand";

const Footer = () => {
  return (
    <footer className="bg-sky-600 w-screen py-2 mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex justify-center gap-16">
        <Brand />
        <div className="text-sm font-hylia self-end">
          <span>© Devin Younge</span> <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
