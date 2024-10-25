import React from "react";

interface StoryIdeasProps {
  setDisplayText: (value: 0 | 1 | 2 | 3) => void;
}

const StoryIdeas: React.FC<StoryIdeasProps> = ({ setDisplayText }) => (
  <div className="absolute z-50 -top-[2.5vh] left-0 w-full h-full px-4 py-4 flex flex-col justify-between items-between landscape:px-16 landscape:py-8 landscape:w-full">
    <StoryIdea
      text="Fact"
      position="top-[25vh] left-[25vw] landscape:top-[20vh] landscape:left-[10vw]"
      onClick={() => setDisplayText(0)}
    />
    <StoryIdea
      text="Fiction"
      position="top-[30vh] left-[65vw] landscape:top-[30vh] landscape:left-[32.5vw]"
      onClick={() => setDisplayText(1)}
    />
    <StoryIdea
      text="Promise"
      position="top-[40vh] left-[7.5vw] landscape:top-[45vh] landscape:left-[2.5vw]"
      onClick={() => setDisplayText(2)}
    />
    <StoryIdea
      text="Possibility"
      position="top-[45vh] left-[67.5vw] landscape:top-[65vh] landscape:left-[30vw]"
      onClick={() => setDisplayText(3)}
    />
  </div>
);

interface StoryIdeaProps {
  text: string;
  position: string;
  onClick: () => void;
}

const StoryIdea: React.FC<StoryIdeaProps> = ({ text, position, onClick }) => (
  <div
    className={`w-full landscape:w-[300px] text-yellow-200/80 flex flex-col justify-start items-start cursor-pointer p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-75 absolute ${position}`}
    onClick={onClick}
  >
    <p className="relative leading-none whitespace-nowrap drop-shadow-md text-xl hover:scale-150 transition-all duration-300 landscape:text-4xl mb-1">
      {text}
    </p>
  </div>
);

export default StoryIdeas;