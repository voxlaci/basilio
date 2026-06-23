"use client";

import { Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { pageCopy } from "@/lib/page-i18n";

export function ContactForm() {
  const { locale } = useLanguage();
  const copy = pageCopy[locale].form;

  return (
    <form className="grid gap-4 rounded-sm bg-white p-6 shadow-2xl shadow-black/5">
      {copy.fields.map((label) => (
        <label key={label} className="text-sm text-[#111111]/72">
          {label}
          <input
            className="mt-2 w-full border border-[#EAEAEA] bg-[#F7F6F2] px-4 py-3 text-[#111111] outline-none transition focus:border-[#C8A96B]"
            type={label === "Email" ? "email" : "text"}
          />
        </label>
      ))}
      <label className="text-sm text-[#111111]/72">
        {copy.inquiry}
        <select className="mt-2 w-full border border-[#EAEAEA] bg-[#F7F6F2] px-4 py-3 text-[#111111] outline-none transition focus:border-[#C8A96B]">
          {copy.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="text-sm text-[#111111]/72">
        {copy.message}
        <textarea className="mt-2 min-h-36 w-full border border-[#EAEAEA] bg-[#F7F6F2] px-4 py-3 text-[#111111] outline-none transition focus:border-[#C8A96B]" />
      </label>
      <button className="inline-flex items-center justify-center gap-2 bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C8A96B] hover:text-[#111111]">
        <Send size={16} />
        {copy.send}
      </button>
    </form>
  );
}
