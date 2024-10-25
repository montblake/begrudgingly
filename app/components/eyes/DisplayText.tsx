import React from "react";

interface DisplayTextProps {
  displayText: 0 | 1 | 2 | 3;
}

const DisplayText: React.FC<DisplayTextProps> = ({ displayText }) => (
  <div className="relative z-50 w-full landscape:w-1/2 text-gray-400 flex flex-col justify-start items-start cursor-pointer px-12 py-8 hover:opacity-100 transition-opacity duration-300 opacity-100 bg-black border-t border-neutral-800 landscape:items-center landscape:justify-center landscape:h-[85vh] landscape:mt-10 landscape:px-24">
    {displayText === 3 && (
      <TextContent
        title="Possibility"
        content="Perhaps Dickens will get his wish. Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again, in the course of which, due to some highly irregular and ridiculous occurrence, he might see his work in a new light, rediscovering its beauty and his passion while, along the way, forging the kind of intimate, joyful connection with the audience he had hoped would come from hosting a party in the first place."
      />
    )}
    {displayText === 0 && (
      <TextContent
        title="Fact"
        content="In 1853, ten years after having dashed off his surprisingly successful holiday story, 'A Christmas Carol', Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life."
      />
    )}
    {displayText === 2 && (
      <TextContent
        title="Promise"
        content='Now over 200 years old, Dickens has reached a breaking point and unbeknownst to theater management, he will not be performing his show this evening. Instead, he has planned something entirely new, something he is calling, "Charles Dickens&apos;s First Annual Holiday Party."'
      />
    )}
    {displayText === 1 && (
      <TextContent
        title="Fiction"
        content="Never one to let the facts get in the way of a good story, creator Blake Montgomery conflates the enduring popularity of the ubiquitous holiday 'Christmas Carol' with Dickens's personal readings and imagines that reports of the author's death were greatly exaggerated. And so, year after year, each and every December, not only do theaters around the globe produce adaptations of his famous book but Dickens himself is brought back to the stage to continue his tradition of solo readings ad infinitum."
      />
    )}
  </div>
);

interface TextContentProps {
  title: string;
  content: string;
}

const TextContent: React.FC<TextContentProps> = ({ title, content }) => (
  <>
    <p className="relative leading-none whitespace-nowrap drop-shadow-md text-2xl landscape:text-2xl mb-1">
      {title}
    </p>
    <p className="text-xs landscape:text-base">{content}</p>
  </>
);

export default DisplayText;
