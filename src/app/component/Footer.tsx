import LinkedInButton from './LinkedInButton';

const Footer = () => {
  return (
    <footer className="px-4 py-6 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl">

        {/* Top Footer Section */}
        <div className="">
          <p className="text-slate-500 text-sm mb-4 sm:mb-0">
            © 2025 Organic Tale. All rights reserved.
          </p>

        {/* Bottom Footer Section with Button */}
        <div className=" flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-300 text-sm text-center sm:text-left">
            Crafted with <span className="text-red-500">❤️</span> by Nikhil
          </p>

<div className='h-full'>
<LinkedInButton/>
</div>
        </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
