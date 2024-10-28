import React from "react";

interface DisplayTextProps {
  displayText: 0 | 1 | 2 | 3;
}

const DisplayText: React.FC<DisplayTextProps> = ({ displayText }) => (
  <div className="relative z-50 w-full lg:w-1/2 text-gray-400 flex flex-col justify-start items-start cursor-pointer px-12 py-8 hover:opacity-100 transition-opacity duration-300 opacity-100 bg-black border-t border-neutral-800 lg:items-center lg:justify-center lg:h-[85vh] lg:mt-10 lg:px-24">
    {displayText === 3 && (
      <TextContent
        title="Possibility"
        content="Perhaps Dickens will get his wish. Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again, in the course of which, due to some highly irregular and ridiculous occurrence, he might see his work in a new light, rediscovering its beauty and his passion while, along the way, forging the kind of intimate, joyful connection with the audience he had hoped would come from hosting a party in the first place."
      />
    )}
    {displayText === 0 && (
      <TextContent
        title="Fact"
        content="In 1853, ten years after publishing A Christmas Carol, Charles Dickens began reading his work to audiences, finding both success and purpose in these public performances. But what if Dickens never stopped? What if he's bound to repeat his reading of A Christmas Carol every December—year after year, century after century?

        Now, over 200 years old and tired of his own creation, Dickens has a new idea. Instead of performing his classic tale yet again, he plans to host Charles Dickens's First Annual Holiday Party. But as we all know, holiday spirits have a way of interfering with even the best-laid plans. Through humor, unexpected twists, and intimate moments, Dickens may just rediscover the beauty in his work and the joy of sharing it with an audience, one more time."
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
    <p className="relative leading-none whitespace-nowrap drop-shadow-md text-2xl lg:text-2xl mb-1">
      {title}
    </p>
    <p className="text-xs lg:text-base">{content}</p>
  </>
);

export default DisplayText;
