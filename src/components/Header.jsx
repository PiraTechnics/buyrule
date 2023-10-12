import logoRupee from "../assets/rupee-logo-tilted.svg";

const Header = () => {
  return (
    <nav className="bg-sky-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="text-4xl tracking-logo font-hylia">
            <div className="-mb-2 flex flex-row">
              BUY
              <img className="w-8 pt-2 ms-1" src={logoRupee} alt="rupee icon" />
            </div>
            <div className="">RULE</div>
          </div>
          <a href="/">Home</a>
          <a href="/shopping">Shopping</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
