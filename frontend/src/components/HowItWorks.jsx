import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <section className="howItWorks text-center py-16 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-blue-700 mb-10">
        How BlueCollar Connect Works
      </h3>

      <div className="container grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="card bg-white p-6 rounded-2xl shadow-md">
          <div className="icon text-blue-600 text-5xl mb-4 mx-auto">
            <LuUserPlus />
          </div>
          <h4 className="text-xl font-semibold mb-2">Create Your Profile</h4>
          <p className="text-gray-600">
            Sign up as a <b>Customer</b> or <b>Labour</b>. Add your skills,
            location, and experience — or post what kind of work you need done.
            It only takes a few minutes to get started!
          </p>
        </div>

       
        <div className="card bg-white p-6 rounded-2xl shadow-md">
          <div className="icon text-blue-600 text-5xl mb-4 mx-auto">
            <VscTasklist />
          </div>
          <h4 className="text-xl font-semibold mb-2">
            Browse or Post Work Nearby
          </h4>
          <p className="text-gray-600">
            Customers can <b>browse local labours</b> like electricians,
            plumbers, or drivers. Labours can <b>view job requests</b> in their
            area and apply instantly for suitable work.
          </p>
        </div>

       
        <div className="card bg-white p-6 rounded-2xl shadow-md">
          <div className="icon text-blue-600 text-5xl mb-4 mx-auto">
            <BiSolidLike />
          </div>
          <h4 className="text-xl font-semibold mb-2">Connect & Get the Job Done</h4>
          <p className="text-gray-600">
            Once a match is found, customers can <b>hire directly</b> through
            the app. Chat, confirm work, and make payment after completion —
            easy, safe, and reliable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
