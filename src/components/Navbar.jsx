const Navbar = () => {
  return (
    <div className="flex justify-between m-auto items-center max-w-[1440px] max-h-[72px]">
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>

      <ul className="flex gap-6 font-semibold text-base">
        <li href="#">Home</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
