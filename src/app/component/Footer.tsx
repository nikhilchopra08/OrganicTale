const Footer = () => {
  return (
    <footer className="px-4 py-2 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl mb-6 my-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">
            © 2024 Reddit Story Creator. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-400 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
