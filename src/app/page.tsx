"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

import React from 'react'

const homePage = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  )
}

export default homePage