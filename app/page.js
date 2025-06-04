"use client";
import Link from "next/link";
import { useState , useEffect} from "react";
import Hero from "@/Components/Hero";
import ProfileCard from "@/Components/ProfileCard";
import Practice from "@/Components/Practice";
import Footer from "@/Components/Footer";
import Props from "@/Components/Props";

const Page = () => {
const [user, setuser] = useState("I Passed throug props")
  return (
    <>
      {/* <Header user={user}/> */}
      <Hero/>
      <div className="flex flex-col md:flex-row justify-center gap-6 p-10">
        <ProfileCard
          avatar="https://i.pravatar.cc/150?img=3"
          title="CEO"
          name="Anas"
          age="30"
          occupation="Software Engineer"
        />
        <ProfileCard
          avatar="https://i.pravatar.cc/150?img=47"
          title="CEO"
          name="Sara"
          age="30"
          occupation="Software Engineer"
        />
        <ProfileCard
          avatar="https://i.pravatar.cc/150?img=8"
          title="CEO"
          name="Smith"
          age="30"
          occupation="Software Engineer"
        />
         <ProfileCard
          avatar="https://i.pravatar.cc/150?img=8"
          title="CEO"
          name="Smith"
          age="30"
          occupation="Software Engineer"
        />

      </div>
           
      <Practice/>
      <Props/>
       <Footer user={user}/>
    </>
    
  );
};

export default Page;





