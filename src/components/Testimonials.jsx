import { testimonials } from '../data'

const Testimonials = () => (
  <section id="testimonials">
    <div className="container px-5 py-10 mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 inline-block mb-4">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg>

      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        Client Testimonials
      </h1>
      <div className="flex flex-wrap m-4">
        {testimonials.map((testimonial) => (
          <div className="p-4 md:w-1/2 w-full" key={testimonial.id}>
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="block w-8 text-gray-500 mb-4">
                <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
              </svg>


              <p className="leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial.image}
                  className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-500 text-sm uppercase">
                    {testimonial.company}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
