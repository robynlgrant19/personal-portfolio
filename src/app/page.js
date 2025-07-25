'use client';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white scroll-smooth">

      {/* navigation bar */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-950 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-emerald-600">Robyn Grant</h1>
          <ul className="flex gap-6 text-md font-medium">
            <li>
              <a href="#about" className="hover:text-emerald-500 transition">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-500 transition">Contact</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-emerald-500 transition">Experience</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-emerald-500 transition">Projects</a>
            </li>
            <li>
              <a href="#education" className="hover:text-emerald-500 transition">Education</a>
            </li>
            <li>
              <a href="#hockey" className="hover:text-emerald-500 transition">Hockey</a>
            </li>
            <li>
              <a href="#awards" className="hover:text-emerald-500 transition">Awards</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* hero (about section) */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 sm:px-12 pt-24 overflow-hidden"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-emerald-500 text-lg font-semibold mb-2">Hey! I am</p>

            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">Robyn Grant</h1>

            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
                <span className="text-gray-400">Professional</span>{' '}
                <span className="font-semibold text-gray-800 dark:text-white">Data Engineer</span>
              </h2>

              {/* CLA + icons */}
              <div className="flex items-center gap-x-3 mt-2 ml-1 text-md">
                <a
                  href="https://www.claconnect.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex transform transition-transform duration-300 hover:scale-110"
                >
                  <Image src="/cla_logo.png" alt="CLA logo" width={40} height={40} className="object-contain" />
                </a>
                <a
                  href="https://athletics.plymouth.edu/sports/whockey/roster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex transform transition-transform duration-300 hover:scale-110"
                >
                  <Image src="/panther.png" alt="Hockey" width={50} height={50} className="object-contain" />
                </a>
                <a
                  href="https://github.com/robynlgrant19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl transform transition-transform duration-300 hover:scale-110 hover:text-gray-700"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/robynlgrant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl transform transition-transform duration-300 hover:scale-110 hover:text-gray-700"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
              Passionate about engineering, sports analytics, and empowering decisions with data.
            </p>
          </motion.div>

          {/* right side (picture and blobs) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full flex justify-center md:justify-end"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute -top-8 right-[-55px] w-[450px] h-[450px] rounded-[50%] bg-gradient-to-r from-emerald-500 to-emerald-900 z-0 scale-x-[1.3] scale-y-[1.1]"
            />
            <div className="relative flex z-10">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
                className="relative top-[-10px] w-[500px] h-[580px] -mr-45 z-0 overflow-hidden"
              >
                <Image
                  src="/robyn.png"
                  alt="Robyn Grant"
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-white/10 dark:from-gray-950 dark:to-transparent z-10" />
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-gray-950 dark:to-transparent z-10" />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="absolute top-[350px] left-[-160px] w-[260px] h-[260px] bg-gradient-to-r from-emerald-500 to-emerald-900  dark:bg-gray-950 rounded-full z-20 shadow-lg"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute top-[170px] left-[-200px] w-[200px] h-[200px] bg-gradient-to-r from-emerald-900 to-emerald-500 dark:bg-gray-950 rounded-full z-20 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* contact */}
<section id="contact" className="py-24 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900 w-full">
  <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 sm:p-16 text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
  I'm always open to new opportunities,<br />
  collaborations, or just chatting about data,<br />
  sports, or tech!
</p>


    <p className="text-xl font-medium text-emerald-600 mb-8">
      robynlgrant19@gmail.com
    </p>

    <div className="flex justify-center gap-6 text-4xl text-emerald-600">
      <a
        href="https://linkedin.com/in/robynlgrant"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-700 transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/robynlgrant19"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-700 transition"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  </div>
</section>



{/*experience*/}
      <section id="experience" className="py-24 px-6 sm:px-12 bg-white dark:bg-gray-950 w-full">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>

    <div className="space-y-10">
      
<div className="relative border-l-4 border-emerald-600 pl-6">
  <div className="absolute top-1 left-[-10px] w-5 h-5 bg-emerald-600 rounded-full border-4 border-white dark:border-gray-950"></div>
  
  
  <div className="flex items-center gap-3">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
      Data Engineer – CliftonLarsonAllen (CLA)
    </h3>
    <a
      href="https://www.claconnect.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex transform transition-transform duration-300 hover:scale-110"
    >
      <Image
        src="/cla_logo.png"
        alt="CLA logo"
        width={32}
        height={32}
        className="object-contain"
      />
    </a>
  </div>

  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">June 2025 – present</p>
  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
    Design and maintain scalable data pipelines, ensuring data integrity and accessibility.
    I collaborate with cross functional teams to meet business needs and optimize data processing workflows.
  </p>
</div>


      
<div className="relative border-l-4 border-emerald-600 pl-6">
  <div className="absolute top-1 left-[-10px] w-5 h-5 bg-emerald-600 rounded-full border-4 border-white dark:border-gray-950"></div>
  
  
  <div className="flex items-center gap-3">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
      Mathematics Tutor – Plymouth Academic Support Services
    </h3>
    <a
      href="https://www.plymouth.edu/academics/plymouth-academic-support-services/tutoring" // update link if needed
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex transform transition-transform duration-300 hover:scale-110"
    >
      <Image
        src="/panther.png" 
        alt="Plymouth Logo"
        width={50}
        height={50}
        className="object-contain"
      />
    </a>
  </div>

  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">January 2022 – May 2025</p>
  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
    Tutored university-level math and statistical courses. High levels of communication and scheduling with peers, tutees, and staff. 
    Quick adaptability to constant changing subjects and level of understanding. Supported students in topics ranging from algebra to calculus.
  </p>
</div>

    </div>
  </div>
</section>


      {/*projects */}
      <section id="projects" className="py-24 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900 w-full">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>

    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* left side */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/rg_logo.png" 
              alt="Project Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <h3 className="text-2xl font-semibold text-emerald-600">RG Performance</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            A hockey analytics platform that visualizes player and team data using technologies like
            <strong> Next.js</strong>, <strong>Firebase</strong>, and <strong>Chart.js</strong>. Built for Plymouth State
            Women’s Ice Hockey to support performance review and coaching decisions.
          </p>
          <a
            href="https://rgperformance.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-emerald-600 hover:underline font-medium text-lg"
          >
            View Project →
          </a>
        </div>

        {/* right side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative w-full h-60 sm:h-64 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/rgp1.png" 
              alt="Project Screenshot 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-60 sm:h-64 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/rgp2.png"
              alt="Project Screenshot 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* education */}
<section id="education" className="py-24 px-6 sm:px-12 bg-white dark:bg-gray-950 w-full">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education</h2>

    <div className="space-y-10">
      <div className="relative border-l-4 border-emerald-600 pl-6">
        <div className="absolute top-1 left-[-10px] w-5 h-5 bg-emerald-600 rounded-full border-4 border-white dark:border-gray-950"></div>

        
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Plymouth State University
          </h3>
          <Image
            src="/panther.png" 
            alt="Plymouth State Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">B.S. Computer Science & Mathematics, Sept 2021 – May 2025</p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Graduated with honors and summa cum laude. Vice president and co-founder of the Math Activities Club and Secretary of the 
          International Student Club.
          Focused on software development, data engineering, and statistical modeling.
        </p>
      </div>

      <div className="relative border-l-4 border-emerald-600 pl-6">
        <div className="absolute top-1 left-[-10px] w-5 h-5 bg-emerald-600 rounded-full border-4 border-white dark:border-gray-950"></div>

       
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            University of Calgary
          </h3>
          <Image
            src="/dino.jpg" 
            alt="UofC Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">First Year Engineering, Sept 2020 – Apr 2021</p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I completed my first year of general engineering with a 3.5 GPA. I transferred to Plymouth State to pursue 
          my college hockey career. I took 10 foundational courses across mathematics, science, design, and basic 
          engineering (e.g., calculus, statics, circuits, physics, and introductory design and programming) 
        </p>
      </div>
    </div>
  </div>
</section>

{/* hokey */}
<section id="hockey" className="py-24 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900 w-full">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 sm:p-16">
  
  <div>
    <div className="flex items-center gap-4 mb-6">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Hockey</h2>
      <Image
        src="/panther.png"
        alt="Plymouth Panthers Logo"
        width={60}
        height={60}
        className="object-contain"
      />
      
    </div>

    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
      I proudly played for the <strong>Plymouth State Women’s Ice Hockey Team</strong> from 2021–2025, finishing my career as a captain and MASCAC Champion. 
      Hockey taught me discipline, teamwork, and leadership — values I carry into everything I work on.
    </p>

    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
      <li>Head Captain, Junior and Senior Year</li>
      <li>MASCAC Champion 2024–25</li>
      <li>Panther Award Recipient</li>
      <li>2x Leadership and Character Award Winner</li>
    </ul>

    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-8">
      <a
        href="https://athletics.plymouth.edu/sports/whockey/roster"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-emerald-600 hover:underline font-medium text-lg"
      >
        View Team Roster →
      </a>
      <a
        href="https://athletics.plymouth.edu/news/2025/3/8/womens-ice-hockey-wh-mascac-champs-panthers-outlast-rivier-in-marathon-battle.aspx"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-emerald-600 hover:underline font-medium text-lg"
      >
        View Championship Article →
      </a>
    </div>
  </div>

  {/* pics */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="relative w-full h-80 sm:h-64 rounded-xl overflow-hidden shadow-md">
      <Image
        src="/champs.jpg" 
        alt="Robyn playing hockey"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-full h-60 sm:h-64 rounded-xl overflow-hidden shadow-md">
      <Image
        src="/hky.png" 
        alt="Celebrating a win"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>

</section>

<section id="awards" className="py-24 px-6 sm:px-12 bg-white dark:bg-gray-950 w-full">
  <div className="max-w-7xl mx-auto">
  <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Awards</h2>
  <Image
    src="/panther.png"
    alt="Plymouth State Logo"
    width={65}
    height={65}
    className="object-contain"
  />
</div>


    {/* Main Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
  
  {/* Left Column */}
  <div className="space-y-8">
    {/* Top 20 Senior */}
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold text-emerald-600 mb-2">Top 20 Senior</h3>
  <p className="text-md text-gray-500 dark:text-gray-400 mb-2 italic">
    Plymouth State University - May 2025
  </p>
  <p className="text-gray-700 dark:text-gray-300">
    Recognized as one of the top seniors across the entire university for academic achievement, leadership, and campus involvement.
  </p>
  <div className="w-full mt-4">
    <div className="overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700">
      <img
        src="/top20.jpg"
        alt="Top 20 Senior"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>


    {/* John C. Foley Leadership Award */}
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-emerald-600 mb-2">John C. Foley Leadership Award</h3>
      <p className="text-md text-gray-500 dark:text-gray-400 mb-2 italic">
        Plymouth State Athletics - July 2025
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        One senior male and female student-athlete who have exhibited outstanding leadership during their athletic careers.
      </p>
      <div className="w-full mt-4">
        <div className="overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700">
          <img
            src="/johncfoley.png"
            alt="John C. Foley Leadership Award"
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"

          />
        </div>
      </div>
      <a
        href="https://athletics.plymouth.edu/news/2025/7/15/general-psu-athletics-announces-annual-department-award-winners.aspx"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm font-semibold text-emerald-700 hover:underline"
      >
        View Article →
      </a>
    </div>
  </div>

  {/* Middle Column */}
  <div className="space-y-8">
    {/* 2× Leadership & Character Award */}
<div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold text-emerald-600 mb-2">2× Leadership & Character Award</h3>
  <p className="text-md text-gray-500 dark:text-gray-400 italic">
    Plymouth State Women's Ice Hockey
  </p>
  <p className="text-md text-gray-500 dark:text-gray-400 mb-2 italic">
    - May 2024 & May 2025
  </p>
  <p className="text-gray-700 dark:text-gray-300">
    Voted by teammates for leadership, accountability, and consistent character on and off the ice.
  </p>
  <div className="w-full mt-4">
    <div className="overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700">
      <img
        src="/lc2024.png"
        alt="Leadership & Character"
        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"

      />
    </div>
  </div>
</div>

    {/* Center Image */}
    <div className="relative w-full h-[500px]">
      <Image
        src="/award.png"
        alt="Robyn Grant"
        fill
        className="object-contain"
      />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent z-10" />
    </div>
  </div>

  {/* Right Column */}
  <div className="space-y-8">
    {/* Panther Award */}
<div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold text-emerald-600 mb-2">Panther Award</h3>
  <p className="text-md text-gray-500 dark:text-gray-400 mb-2 italic">
    Plymouth State Athletics - May 2025
  </p>
  <p className="text-gray-700 dark:text-gray-300">
    Given to one student-athlete on each team who exemplifies excellence in leadership, commitment, and team spirit.
  </p>
  <div className="w-full mt-4">
    <div className="overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700">
      <img
        src="/pantherAward.jpg"
        alt="Panther Award"
        className="w-full h-full object-cover object-right transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
  <a
    href="https://athletics.plymouth.edu/news/2025/4/28/general-plymouth-state-athletics-announces-panther-award-winners.aspx"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-sm font-semibold text-emerald-700 hover:underline"
  >
    View Article →
  </a>
</div>

    {/* Norma Wilkinson Award */}
<div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
  <h3 className="text-xl font-semibold text-emerald-600 mb-2">Norma Wilkinson Award</h3>
  <p className="text-md text-gray-500 dark:text-gray-400 mb-2 italic">
    Plymouth State University - May 2025
  </p>
  <p className="text-gray-700 dark:text-gray-300">
    For impactful leadership and dedication to advancing an organization's mission and community.
  </p>
  <div className="w-full mt-4">
    <div className="overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700">
      <img
        src="/norma.png"
        alt="Norma Wilkinson"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>
  </div>
</div>




  </div>
</section>
    </main>
  );
}












