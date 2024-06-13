import React, { useState } from "react";

function Chat() {
  const [example, setExample] = useState([
    "How to use Prompts",
    "How to integrate API in ChatGPT",
    "How to use Tailwind CSS with React",
    "What is OpenAI"
  ]);

  const newChat = [
    {
      role: "user",
      messsage: "I want to use Tailwindcss"
    },
    {
      role: "assistant",
      messsage: "Yes"
    },
    {
      role: "user",
      messsage: "Show me some sample code"
    },
    {
      role: "assistant",
      messsage: "I want to use Tailwindcss"
    }
  ]
  return (<div className="h-screen w-screen bg-[white] flex">
    <div className="w-[20%] h-screen bg-[#202123] text-white p-4">
      <div className="">
        <button className="w-full h-[50px] border rounded">+ New Chat</button>
      </div>
      <div className="h-[75%] border overflow-scroll hide-scroll-bar">
        {
          [1, 2, 3].map((i, n) => {
            return (
              <div key={i} className="py-3 rounded text-center mt-5 font-light flex justify-center gap-2 items-center 
              hover:bg-slate-500 px-8">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-2-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                    <path d="M12 21l-1 -1l-2 -2h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
                    <path d="M15 19l2 2l4 -4" />
                  </svg>
                </span>
                <span>My Chat History {n}</span>
              </div>
            )
          })
        }

      </div>
    </div>
    <div className="w-[80%]">
      {
        newChat.length > 0 ? (
          <div className="h-[80%] overflow-scroll hide-scroll-bar pt-6">
            {
              newChat.map((item, index) => (
                <div className={`flex w-[60%] items-center border border-slate-600 mx-auto p-6 text-black 
                ${item.role === 'assistant' && 'bg-slate-300'}`}>
                  <span className="mr-6 p-2 rounded-full bg-slate-200">
                    {
                      item.role === "user" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-bolt" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.267 0 .529 .026 .781 .076" />
                          <path d="M19 16l-2 3h4l-2 3" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-robot-face" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" />
                          <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" />
                          <path d="M9 7l-1 -4" />
                          <path d="M15 7l1 -4" />
                          <path d="M9 12v-1" />
                          <path d="M15 12v-1" />
                        </svg>
                      )
                    }
                  </span>
                  <div className="">{item.messsage}</div>
                </div>
              ))
            }
          </div>
        ) : (
          <div className="h-[80%] border flex flex-col justify-center items-center">
            <div className="text-4xl font-bold">ChatGPT</div>
            <div className="flex flex-wrap justify-around max-w-[900px]">
              {
                example.map((item, index) => {
                  return (
                    <div className="texl-lg font-light p-4 border
                 border-black rounded min-w-[400px] mt-4 hover:bg-slate-300">{item}</div>
                  )
                })
              }
            </div>
          </div>
        )
      }
      <div className="h-[20%]">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <input type="text" className="w-[60%] rounded p-4 bg-gray-300" placeholder="type your best prompt" />
          <small className="text-black mt-2">Ai Can Generate Anything </small>
        </div>
      </div>
    </div>
  </div >);
}

export default Chat;
