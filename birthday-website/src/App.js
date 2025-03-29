import { useState } from "react";
import { motion } from "framer-motion";

export default function BirthdayWebsite() {
  const [page, setPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const pages = [
    { 
      title: "Kickoff! ⚽", 
      content: "Hope you're ready for a GOAT-tier birthday... Messi would be proud! 🐐🎉 (Unlike Ronaldo fans, we actually celebrate greatness with style!)" 
    },
    { 
      title: "You’re my Golden Boot Winner 🏆", 
      content: "If birthdays were Ballon d'Ors, you'd win every year! (And I'd be your overly dramatic commentator screaming GOOOOAAALLLL! 📢 while tearing up in the stands!)"
    },
    { 
      title: "This one's a Sixer! 🏏", 
      content: "Just like your favorite cover drive, this birthday is flying straight into my heart! (And trust me, I’d dive like a goalkeeper just to keep you close! 🤩)"
    },
    { 
      title: "Loyalty Like an RCB Fan ❤🖤", 
      content: "You know how I stick with RCB no matter what? Even when the memes hit harder than opposition bowlers, even when we are trophy-less yet full of hope—I NEVER stop believing. That’s exactly how I feel about you. No matter what, no matter where, no matter if you're winning or having an off-season, I’ll always be in the stands, chanting your name like a die-hard fan. 🏏🔥❤ You = My Kohli. No trade deals, no transfers, just a lifetime contract with my heart! 💖 And just like RCB, you may drive me crazy sometimes, but I'll still defend you against the entire world!" 
    },
    {
      title: "⚡ Quick Quiz: How Well Do You Know Me?",
      content: "Let's test your knowledge! What’s my go-to reaction when you score a goal or hit a six?",
      quiz: {
        question: "What do I do when you pull off an insane shot?",
        options: [
          "A) Scream louder than the stadium 📢",
          "B) Pretend I knew that technique all along 😏",
          "C) Demand a replay because I blinked 👀",
          "D) All of the above (because I’m extra) 💅"
        ],
        correct: "D) All of the above (because I’m extra) 💅"
      }
    },
    {
      title: "Match Analysis 📊",
      content: "After reviewing the stats, it's clear: You are my best signing of all time! (An absolute 10/10 transfer—Messi to Barcelona level, not that PSG phase. 😏)"
    },
    {
      title: "You're My Meow Meow 🐱💙", 
      content: "From our never-ending RCB vs. SRH debates (where we both know RCB is superior, but I let you dream 😉) to me pretending to tolerate your love for SRH—you're my favorite highlight reel! 🎥❤ (And let’s be real, no matter how much you argue, I will always be the Virat Kohli of this relationship: passionate, dramatic, and always right! 😏🔥)"
    },
    {
      title: "Corporate Girlfriend Mode Activated 👩‍💼⚽", 
      content: "You may have the height advantage, but let’s be honest—I'm the boss here! (Think of me as the Pep Guardiola of this relationship. Tactics, strategies, and you listening to me? Non-negotiable. 😉)"
    },
    {
      title: "🎈🎈🎈",
      content: "<span style='font-size: 1.5rem; font-weight: bold; color: #ff4081;'>HAPPY BIRTHDAY, SUPERSTAR! 🥳🎉</span><br/><br/>Hope your day is as <span style='color: #ff5733; font-weight: bold;'>magical</span> as a last-minute Messi winner! ⚡🐐<br/><br/>And yes, as your <span style='color: #007bff; font-weight: bold;'>future CEO-girlfriend</span>, I fully approve of this celebration… and every decision you will make with my <span style='text-decoration: underline;'>supervision</span>! 😘💖<br/><br/><span style='font-style: italic; color: #28a745;'>P.S. You're officially my GOAT—no VAR checks needed! 😉</span>",
      balloons: true
    }
  ];

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === pages[4].quiz.correct) {
      setFeedback("🎉 Goal! You know me too well! Messi-level accuracy! 🐐");
    } else {
      setFeedback("🚩 Offside! You need more training sessions with me! 😏");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center p-5 overflow-hidden relative" style={{ background: "repeating-linear-gradient(90deg, #75AADB, #75AADB 50px, white 50px, white 100px)" }}>
      <motion.div
        key={page}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="card p-5 bg-white text-black rounded-2xl shadow-lg relative overflow-hidden">
          <div className="card-content">
            <h1 className="text-2xl font-bold mb-4">{pages[page].title}</h1>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: pages[page].content }}></p>
            {pages[page].quiz && (
              <div>
                <p className="font-semibold">{pages[page].quiz.question}</p>
                <div className="flex flex-col mt-2">
                  {pages[page].quiz.options.map((option, index) => (
                    <button key={index} className="m-1 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => handleAnswerClick(option)}>
                      {option}
                    </button>
                  ))}
                </div>
                {selectedAnswer && <p className="mt-2 font-bold">{feedback}</p>}
              </div>
            )}
            {page < pages.length - 1 && (
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg" onClick={() => setPage(page + 1)}>Next ➡</button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
