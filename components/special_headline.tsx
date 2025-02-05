type HeadlineProps = {
  title: string;
  author: string;
  publisher?: string;
};

export default function SpecialHeadline({
  title,
  author,
  publisher,
}: HeadlineProps) {
  const titleLines = title.split(/[\n\u2028\u2029]/);

  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl text-neutral-400 text-center md:text-left">
        {titleLines.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </h1>
      {publisher ? (
        <p className="text-neutral-400 text-sm">
          {author}, <span className="italic">{publisher}</span>
        </p>
      ) : (
        <p className="text-neutral-400 text-sm">{author}</p>
      )}
    </div>
  );
}
