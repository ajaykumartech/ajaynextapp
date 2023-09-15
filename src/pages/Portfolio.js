import React from "react";

function Portfolio() {
  return (
    <div class="container mx-auto py-16">
      <h2 class="text-3xl font-semibold text-center mb-8">Portfolio</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
        {/* <!-- Project 1 --> */}
        <div class="bg-white shadow-lg rounded-lg p-6">
          <img
            src="../images/kmv.png"
            alt="Project 1"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Project 1</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              eget massa eu nunc lacinia rhoncus.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Proin eget massa eu nunc lacinia
              rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin eget massa eu nunc lacinia rhoncus.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Proin eget massa eu nunc
              lacinia rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Proin eget massa eu nunc lacinia rhoncus.
            </p>
          </div>
        </div>

        {/* <!-- Project 2 --> */}
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="project2.jpg"
            alt="Project 2"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Project 2</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              eget massa eu nunc lacinia rhoncus.
            </p>
          </div>
        </div>

        {/* <!-- Project 3 --> */}
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="project3.jpg"
            alt="Project 3"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Project 3</h3>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              eget massa eu nunc lacinia rhoncus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
