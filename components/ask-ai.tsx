"use client";

import { Bot, Send, X } from "lucide-react";
import { useState } from "react";
import { askAiAnswers } from "@/lib/site-data";

export function AskAi() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(askAiAnswers[0]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/30 transition hover:bg-[#C8A96B] hover:text-[#111111]"
      >
        <Bot size={18} />
        Ask AI
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <aside
            className="absolute bottom-5 right-5 top-5 grid w-[min(430px,calc(100%-40px))] grid-rows-[auto_1fr_auto] bg-[#F7F6F2] p-5 text-[#111111] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#C8A96B]">Ask AI</p>
                <h2 className="font-display text-3xl">Basilio Astulez Duque assistant</h2>
              </div>
              <button aria-label="Close Ask AI" onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-full border border-[#111111]/12">
                <X size={18} />
              </button>
            </header>
            <div className="overflow-y-auto py-5">
              <div className="rounded-sm bg-white p-5 shadow-sm">
                <p className="text-sm leading-6 text-[#111111]/62">Selected question</p>
                <h3 className="mt-2 font-display text-3xl">{selected.prompt}</h3>
                <p className="mt-4 leading-7 text-[#111111]/72">{selected.answer}</p>
              </div>
              <div className="mt-5 grid gap-2">
                {askAiAnswers.map((item) => (
                  <button
                    key={item.prompt}
                    onClick={() => setSelected(item)}
                    className={`border px-4 py-3 text-left text-sm font-semibold transition ${selected.prompt === item.prompt ? "border-[#111111] bg-[#111111] text-white" : "border-[#111111]/12 bg-white"}`}
                  >
                    {item.prompt}
                  </button>
                ))}
              </div>
            </div>
            <form className="flex gap-2 border-t border-[#111111]/10 pt-4" onSubmit={(event) => event.preventDefault()}>
              <input
                aria-label="Ask a question"
                placeholder="Ask about hiring, repertoire, youth choirs..."
                className="min-w-0 flex-1 border border-[#111111]/12 bg-white px-4 py-3 outline-none focus:border-[#C8A96B]"
              />
              <button className="grid size-12 place-items-center bg-[#111111] text-white" aria-label="Send question">
                <Send size={17} />
              </button>
            </form>
          </aside>
        </div>
      ) : null}
    </>
  );
}
