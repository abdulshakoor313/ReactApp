import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen bg-white py-16 px-6 text-gray-900">
      <h1 className="text-5xl font-bold text-center mb-16">About Alex Joyfield</h1>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Author Image */}
        <div className="flex-shrink-0">
          <img
            src="https://lh6.googleusercontent.com/proxy/980GmNohGwJCTslm4M6tK8nxooJCOXxMGzLFjWssYyiWf9entzMdg-jy2ikugbIMnzY94F1Ll5g-4hsfXRVM89ISAlBQczbh08NRHKYYDPF1HmasWfe7Tn_zClJcepE1PjypPOmVAw"
            alt="Alex Joyfield"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-6 border-gray-300 shadow-2xl"
          />
        </div>

        {/* Bio Text */}
        <div className="text-lg space-y-8 max-w-3xl">
          <p>
            Alex Joyfield is an acclaimed author specializing in psychological thrillers and literary fiction. Renowned for weaving intricate suspense with profound emotional depth, Alex’s narratives explore themes of memory, identity, and the intricate dynamics of human relationships. Each book offers readers a compelling journey through the complexities of the mind and heart.
          </p>
          <p>
            Drawing on a solid background in psychology and an innate passion for storytelling, Alex crafts immersive and thought-provoking tales that resonate deeply with audiences. Beyond writing, Alex is an avid hiker who finds inspiration in nature's tranquility, a tea enthusiast who enjoys quiet moments of reflection, and a lover of classic novels that have shaped a lifelong literary journey.
          </p>
          <p>
            Committed to creating stories that challenge perceptions and evoke empathy, Alex continuously pushes the boundaries of genre to deliver unforgettable reading experiences. Whether unraveling the mysteries of the mind or exploring the depths of human connection, Alex Joyfield remains a distinctive voice in contemporary literature.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
