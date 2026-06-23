"use client";

import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-sm bg-white p-6 shadow-2xl shadow-black/5">
      {["Name", "Email", "Organization", "Country"].map((label) => (
        <label key={label} className="text-sm text-[#111111]/72">
          {label}
          <input
            className="mt-2 w-full border border-[#EAEAEA] bg-[#F7F6F2] px-4 py-3 text-[#111111] outline-none transition focus:border-[#C8A96B]"
            type={label === "Email" ? "email" : "text"}
          />
        </label>
      ))}
      <label className="text-sm text-[#111111]/72">
        Inquiry
        <select className="mt-2 w-full border border-[#EAEAEA] bg-[#F7F6F2] px-4 py-3 text-[#111111] outline-none transition focus:border-[#C8A96B]">
          <option>Workshop or masterclass</option>
          <option>Guest conducting</option>
          <option>Festival invitation</option>
          <option>Speaking invitation</option>
          <option>Media request</option>
        </select>
      </label>
      <label className="text-sm text-[#111111]/72">
        Message
        <textarea className="mt-2 min-h-36 w-full border border-[#EAEAEA] bg-[#F7F6F2] px-4 py-3 text-[#111111] outline-none transition focus:border-[#C8A96B]" />
      </label>
      <button className="inline-flex items-center justify-center gap-2 bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C8A96B] hover:text-[#111111]">
        <Send size={16} />
        Send Inquiry
      </button>
    </form>
  );
}
