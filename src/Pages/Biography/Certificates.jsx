// components/Certificates.js
import React from 'react'

const Certificates = () => {
  return (
    <section className="py-16 bg-gray-900" id="certificates">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-start text-white mb-12">My Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Certificate Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/path-to-certificate-1.jpg" alt="Certificate 1" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Certificate Title 1</h3>
              <p className="text-gray-400 mt-2">Issued by Organization 1</p>
              <p className="text-gray-300 mt-4">A short description of the certificate or the skills learned.</p>
            </div>
          </div>

          {/* Certificate Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/path-to-certificate-2.jpg" alt="Certificate 2" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Certificate Title 2</h3>
              <p className="text-gray-400 mt-2">Issued by Organization 2</p>
              <p className="text-gray-300 mt-4">A short description of the certificate or the skills learned.</p>
            </div>
          </div>

          {/* Certificate Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="/path-to-certificate-3.jpg" alt="Certificate 3" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">Certificate Title 3</h3>
              <p className="text-gray-400 mt-2">Issued by Organization 3</p>
              <p className="text-gray-300 mt-4">A short description of the certificate or the skills learned.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates;
