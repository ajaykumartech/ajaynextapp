import React from "react";

function Portfolio() {
  return (
    <>
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Portfolio</h2>
        <div className="mx-auto">
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-16">
            <div className="flex flex-col-reverse sm:flex-row sm:space-x-4">
              <div className="sm:w-1/2 pr-4">
                <img
                  src="../images/kmv.png"
                  alt="Project 1"
                  className="w-full h-70 object-cover"
                />
              </div>
              <div className="sm:w-1/2 p-2">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Project 1
                </h3>
                <p className="text-xl font-semi mb-2">
                  This application represents a groundbreaking approach to
                  project management and transparency in construction projects.
                  It empowers government officials and stakeholders to oversee
                  and verify the progress of vital infrastructure development
                  from anywhere, reducing the need for physical visits and
                  expediting decision-making processes.
                </p>
                <p>
                  It serves as a vital tool for monitoring and displaying the
                  day-to-day progress of road and bridge construction projects
                  undertaken by a private firm on behalf of the government. It
                  offers a comprehensive solution to showcase project
                  advancements to higher-level officials, enabling seamless
                  verification of progress regardless of their location. Powered
                  by a robust tech stack including React, Node.js, MongoDB,
                  Figma, and hosted on Heroku, this application redefines
                  project transparency and accountability.
                </p>
                <h4 className="text-xl font-semibold mb-2  mt-8">
                  Technologies & Tools Used
                </h4>
                {/*                <ul className="list-disc list-inside text-sm pl-5 mt-6">*/}
                <div className="max-w-screen-lg mx-auto">
                  <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4 pt-4 pb-4">
                    <div className="group mr-2 mb-6">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        ReactJS
                      </span>
                    </div>
                    <div className="group mr-2">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        NodeJs
                      </span>
                    </div>
                    <div className="group mr-2">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        Heroku
                      </span>
                    </div>
                    <div className="group mr-2">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        MongoDB
                      </span>
                    </div>
                    <div className="group">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        Figma
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more project divs here */}

          <div className="bg-white shadow-lg rounded-lg p-6 mb-16">
            <div className="flex flex-col-reverse sm:flex-row sm:space-x-4">
              {/* <!-- Project 2 --> */}
              <div className="sm:w-1/2 pr-4">
                <img
                  src="../images/recruit.png"
                  alt="Project 2"
                  className="w-full h-70 object-cover"
                />
              </div>
              <div className="sm:w-1/2 p-2">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Project 2
                </h3>
                <p className="text-xl font-semi mb-2">
                  This project underscores our commitment to innovation and
                  efficiency in the realm of recruitment, as we empower
                  organizations to make informed hiring decisions and facilitate
                  the growth of aspiring professionals. We envision a future
                  where the job market is accessible, transparent, and filled
                  with opportunities, and our portal is a significant step in
                  that direction.
                </p>
                <p>
                  Our cutting-edge recruitment portal is designed to streamline
                  and enhance the hiring process for organizations, making it
                  efficient and accessible on an online platform. With a
                  powerful tech stack comprising Angular, .NET, MySQL, and
                  Figma, we present a comprehensive solution that revolutionizes
                  recruitment.
                </p>
                <h4 className="text-xl font-semibold mb-2  mt-8">
                  Technologies & Tools Used
                </h4>
                {/*                <ul className="list-disc list-inside text-sm pl-5 mt-6">*/}
                <div className="max-w-screen-lg mx-auto">
                  <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4 pt-4 pb-4">
                    <div className="group mr-2">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        Angular
                      </span>
                    </div>
                    <div className="group mr-2">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        .NET
                      </span>
                    </div>
                    <div className="group mb-8 mr-2">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        MySQL
                      </span>
                    </div>
                    <div className="group">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        Figma
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project 3 --> */}
          <div className="bg-white shadow-lg rounded-lg">
            <div className="flex flex-col-reverse sm:flex-row sm:space-x-4">
              <div className="sm:w-1/2 pr-4">
                <img
                  src="../images/innowise.png"
                  alt="Project 3"
                  className="w-full h-70 object-cover "
                />
              </div>
              <div className="sm:w-1/2 p-2">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Project 3
                </h3>
                <p className="text-xl font-semi mb-2">
                  This visionary project is a convergence of cutting-edge
                  technologies, including React, Node.js, and MongoDB, aimed at
                  revolutionizing the insurance and finance sectors. It serves
                  as a groundbreaking platform where multiple insurance and
                  finance companies unite to conduct their business seamlessly,
                  all in one place. This innovative application empowers
                  customers, company owners, and policyholders to access policy
                  status information with their unique credentials. With
                  individualized dashboards for each user, this prototype is
                  designed to enhance user experience and productivity.
                </p>
                <p>
                  The primary goal of this project is to create a centralized
                  hub where multiple insurance and financial institutions can
                  converge, simplifying their operations and enhancing
                  collaboration.
                </p>
                <h4 className="text-xl font-semibold mb-2  mt-8">
                  Technologies & Tools Used
                </h4>
                {/*                <ul className="list-disc list-inside text-sm pl-5 mt-6">*/}
                <div className="max-w-screen-lg mx-auto">
                  <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4 pt-4 pb-4">
                    <div className="group mr-2 mb-6">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        ReactJS
                      </span>
                    </div>
                    <div className="group mr-2">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        NodeJs
                      </span>
                    </div>
                    <div className="group mr-2">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        Heroku
                      </span>
                    </div>
                    <div className="group mb-8 mr-2">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        MongoDB
                      </span>
                    </div>
                    <div className="group">
                      <span className="bg-gray-900 rounded text-white px-4 py-2">
                        Figma
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
