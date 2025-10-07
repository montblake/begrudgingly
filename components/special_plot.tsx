export default function SpecialPlot({
  summary,
  showPlot,
}: {
  summary: string;
  showPlot: boolean;
}) {
  const summaryLines = summary.split(/[\n\u2028\u2029]/);

  return (
    <div
      className={`flex flex-col justify-center items-center md:items-start gap-4 w-full px-4 md:px-0 transition-opacity duration-700 ${
        showPlot ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-2xl md:text-3xl text-neutral-400 text-center md:text-left font-bold">
        {summaryLines.map((line, index) => (
          <span key={index} className="block mb-4">
            {line}
          </span>
        ))}
      </h1>
    </div>
  );
}
