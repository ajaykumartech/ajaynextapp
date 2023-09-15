import React from "react";

import "./About.css";
import Contact from "./Contact";

const GridItem = ({ imageSrc, text }) => {
  return (
    <div className="container flex flex-col md:flex-row mb-4 mx-auto">
      <div className="w-80 md:w-1/4 p-6">
        <div className="bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 justify-center items-center">
          <img
            src={imageSrc}
            alt="Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full md:w-3/4 p-2">
        <div className="bg-white-100 hover:bg-gray-200 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          <p className="text-xl hover:text-2xl font-normal p-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

const technologies = [
  {
    name: "Frontend",
    icons: [
      "https://cdn-icons-png.flaticon.com/512/919/919827.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
      "https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png",
      "https://w7.pngwing.com/pngs/856/564/png-transparent-react-logo-javascript-front-and-back-ends-user-interface-others-miscellaneous-logo-symmetry-thumbnail.png",
      "https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text-thumbnail.png",
      "https://w7.pngwing.com/pngs/14/568/png-transparent-angularjs-logo-javascript-security-token-angle-triangle-logo-thumbnail.png",
    ],
  },
  {
    name: "Backend",
    icons: [
      "https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png",
      "https://w1.pngwing.com/pngs/306/12/png-transparent-ajax-logo-jquery-javascript-javascript-library-github-foundation-angularjs-yii-thumbnail.png",
      "https://w7.pngwing.com/pngs/477/472/png-transparent-node-js-javascript-react-logo-express-js-javascript-logo-text-trademark-rectangle-thumbnail.png",
      "https://w7.pngwing.com/pngs/270/145/png-transparent-php-web-development-javascript-logo-c-others-blue-text-trademark-thumbnail.png",
      "https://w7.pngwing.com/pngs/585/822/png-transparent-python-scalable-graphics-logo-javascript-creative-dimensional-code-angle-text-rectangle-thumbnail.png",
    ],
  },
  {
    name: "DevOps",
    icons: [
      "https://w7.pngwing.com/pngs/190/922/png-transparent-kubernetes-docker-devops-lxc-mongodb-github-blue-logo-symmetry-thumbnail.png",
      "https://w7.pngwing.com/pngs/180/365/png-transparent-jenkins-devops-continuous-integration-software-development-installation-selenium-text-hand-logo-thumbnail.png",
      "https://w7.pngwing.com/pngs/402/145/png-transparent-docker-devops-software-development-continuous-delivery-github-marine-mammal-whales-dolphins-and-porpoises-puppet-thumbnail.png",
      "https://w7.pngwing.com/pngs/629/503/png-transparent-heroku-plain-wordmark-logo-icon-thumbnail.png",
      "https://w7.pngwing.com/pngs/292/493/png-transparent-hostinger-hd-logo-thumbnail.png",
    ],
  },
  {
    name: "Databases",
    icons: [
      "https://w7.pngwing.com/pngs/241/983/png-transparent-mongodb-nosql-database-computer-icons-others-leaf-grass-fruit-thumbnail.png",
      "https://w7.pngwing.com/pngs/444/484/png-transparent-mysql-database-encapsulated-postscript-logo-jquery-blue-text-logo-thumbnail.png",
      "https://w7.pngwing.com/pngs/582/361/png-transparent-postgre-sql-logo-postgresql-relational-database-management-system-object-relational-database-database-blue-text-logo-thumbnail.png",
      "https://w7.pngwing.com/pngs/1011/424/png-transparent-oracle-database-oracle-corporation-relational-database-management-system-postgresql-oracle-logo-angle-text-logo-thumbnail.png",
    ],
  },
  {
    name: "Testing Library",
    icons: [
      "https://w7.pngwing.com/pngs/152/247/png-transparent-jest-hd-logo-thumbnail.png",
      "https://w7.pngwing.com/pngs/794/590/png-transparent-javascript-test-driven-development-mocha-react-jasmine-onsen-text-logo-nodejs-thumbnail.png",
      "https://w7.pngwing.com/pngs/905/947/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png",
      "https://w7.pngwing.com/pngs/628/399/png-transparent-android-studio-logo-android-studio-mobile-app-development-android-studio-text-logo-thumbnail.png",
    ],
  },
  {
    name: "Mobile Development",
    icons: [
      "https://w7.pngwing.com/pngs/1021/477/png-transparent-react-native-javascript-mobile-app-development-github-symmetry-mobile-app-development-electric-blue-thumbnail.png",
      "https://w7.pngwing.com/pngs/643/143/png-transparent-nextjs-hd-logo-thumbnail.png",
    ],
  },
];

function About() {
  return (
    <div className="mx-auto py-0">
      <h1 className="text-6xl font-semibold mb-4 justify-center text-center py-6 mt-16">
        <span className="animate-blink about">A</span>bout
      </h1>

      <GridItem
        imageSrc="/images/aj.jpg" // Replace with your image URL
        text={`
        👋 Hey there! I'm Ajay Kumar Josyula, a dedicated Frontend Developer originally from the picturesque state of Andhra Pradesh, India.\n
🎓 Armed with a master's degree in Instrumentation Technology, I ventured into the exciting realm of Software Engineering, driven by a passion for creating immersive web experiences.\n
💻 With more than three years of hands-on experience in web development, I've had the privilege of crafting exceptional user interfaces and interactive web applications. My journey in the dynamic world of web development has equipped me with a robust skill set, including:
React Expertise: I've mastered React, harnessing its power to build dynamic and user-centric web applications that captivate and engage users.
JavaScript Proficiency: My deep understanding of JavaScript allows me to write efficient, clean, and maintainable code, ensuring seamless functionality.
Testing Library Enthusiast: I'm a strong advocate for testing and quality assurance, leveraging testing libraries to deliver reliable and bug-free code.`}
      />
      {/* Technologies */}
      <h1 className="text-3xl font-semibold mb-4 justify-center text-center mt-16 p-4">
        Technologies I've Worked with
      </h1>
      <div className="container mx-auto flex justify-center items-center h-screen-1/2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto p-8">
          {technologies.map((tech, index) => {
            return (
              <div className="tech_container" key={index}>
                <h3 className="tech_name">{tech.name}</h3>
                <div className="icons">
                  {tech.icons.map((icon, i) => {
                    return (
                      <div key={i} className="icone">
                        <img src={icon} alt={icon} width="50" height="50" />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Technologies Ends */}
    </div>
  );
}

export default About;
// Hello! I'm Ajay Kumar Josyula, a passionate Frontend Developer hailing from the beautiful state of Andhra Pradesh, India.
//         After completing my masters in Instrumentation Technology, I've decided to take a leap to pursue a career in software Engineering.
//         With over 3 years of experience in the dynamic world of web development, I've had the privilege of crafting exceptional user experiences on the digital canvas.
//         I'm an advocate for staying updated with the latest industry trends and technologies. The ever-evolving nature of web development fuels my curiosity,
//         and I'm always eager to explore new frameworks, libraries, and design principles to stay at the forefront of my field.
//         I'm excited about the future of web development and the endless possibilities it holds.
//         Let's connect and collaborate to create amazing digital experiences together!
//         Feel free to customize and expand upon this introduction to better reflect your unique experiences, skills, and personality as a frontend developer.
