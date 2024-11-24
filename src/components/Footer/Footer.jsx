const Footer = () => {
  return (
    <div className="w-11/12 mx-auto">
        <div className="text-center mt-6">
            <div className="space-y-2">
            <h2 className="text-3xl font-bold">Gadget Heaven</h2>
            <p className="font-medium opacity-60">Leading the way in cutting-edge technology and innovation.</p>
            </div>
        <div className="divider"></div>
        </div>
        <footer className="footer justify-center md:justify-around">
      <nav>
        <h6 className="font-bold text-[18px]">Services</h6>
        <a className="link link-hover opacity-60">Product Support</a>
        <a className="link link-hover opacity-60">Order Tracking</a>
        <a className="link link-hover opacity-60">Shipping & Delivery</a>
        <a className="link link-hover opacity-60">Returns</a>
      </nav>
      <nav>
        <h6 className="font-bold text-[18px]">Company</h6>
        <a className="link link-hover opacity-60">About us</a>
        <a className="link link-hover opacity-60">Careers</a>
        <a className="link link-hover opacity-60">Contact</a>
      </nav>
      <nav>
        <h6 className="font-bold text-[18px]">Legal</h6>
        <a className="link link-hover opacity-60">Terms of Service</a>
        <a className="link link-hover opacity-60">Privacy Policy</a>
        <a className="link link-hover opacity-60">Cookie Policy</a>
      </nav>
    </footer>
    </div>
  );
};

export default Footer;
