import React from "react";
import Layout from "../components/common/Layout";
import MainTitle from "../components/common/MainTitle";
import ContactForm from "../components/forms/ContactForm";
import Map from "../components/Map";
import Faq from "../components/Faq";

function Contact() {
  return (
    <Layout>
      <MainTitle title={"Contact"} />
      <div className="mt-10 gap-8 pt-20 pb-10 px-4 md:px-16 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col w-full items-start justify-between">
            <h2 className="text-3xl font-semibold text-center mb-6 text-amber-300">
              Frequently Asked Questions
            </h2>
            <Faq />
          </div>
          <ContactForm />
        </div>

        <div className="mt-20">
          <Map />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
