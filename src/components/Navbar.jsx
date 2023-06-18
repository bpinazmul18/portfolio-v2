const Navbar = () => (
  <header className="bg-gray-800 md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a
        href="#about"
        className="title-font font-medium text-white mb-4 md:mb-0"
      >
        <span className="ml-3 text-xl">Nazmul Haque</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#projects" className="mr-5 hover:text-white">
          Past Work
        </a>
        <a href="#skills" className="mr-5 hover:text-white">
          Skills
        </a>
        <a href="#testimonials" className="mr-5 hover:text-white">
          Testimonials
        </a>
      </nav>
      <a
        href="https://www.upwork.com/freelancers/~01b18bdb33d779bf10"
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hire Me

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </header>
)

export default Navbar
