import React from "react";

const habits = [
  {
    title: "🌳 Plant a Tree",
    description: "Planting trees helps absorb carbon dioxide and improves air quality. It also supports wildlife and restores natural balance.",
    impact: "Improves oxygen levels 🌍 · Reduces global warming 🌱 · Supports biodiversity 🐦"
  },
  {
    title: "🚫 Reduce Plastic",
    description: "Avoid single-use plastics like bags and bottles. Switching to reusable items helps reduce pollution in oceans and landfills.",
    impact: "Protects marine life 🐠 · Reduces pollution 🌊 · Keeps environment clean ♻️"
  },
  {
    title: "⚡ Save Electricity",
    description: "Use energy wisely by turning off lights and switching to LED. Every watt saved helps in reducing the carbon footprint.",
    impact: "Prevents energy waste 🚰 · Reduces bills 💸 · Supports future generations 🌍"
  }
];

function Habits() {
  return (
    <div className='bg-[url("/hero2.jpg")] bg-cover bg-center min-h-screen w-full'>
      {/* Overlay for better text contrast */}
      <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black/60 p-6">
        
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg italic">
            "Be a Hero Like Groot <span className="text-green-400 text-5xl">🌍</span>"
          </h1>
          <p className="text-green-300 mt-2 text-lg font-medium tracking-wide">Save the Earth, One Habit at a Time</p>
        </header>

        <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-7xl">
          {habits.map((habit, index) => (
            <div 
              key={index}
              className="group flex flex-col justify-between p-6 rounded-2xl w-full sm:w-80 
                         bg-white/10 backdrop-blur-md border border-white/20 
                         hover:bg-green-500/20 hover:border-green-400/50 
                         transition-all duration-300 transform hover:-translate-y-2 shadow-2xl"
            >
              <div>
                <h2 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                  {habit.title}
                </h2>
                
                <div className="mb-4">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold mb-1">
                    Description
                  </span>
                  <p className="text-sm text-gray-100 leading-relaxed">
                    {habit.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-green-400 font-bold mb-1">
                  Impact
                </span>
                <p className="text-xs text-gray-200 italic">
                  {habit.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Habits;