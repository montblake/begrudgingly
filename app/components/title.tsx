type TitleProps = {
  version: number;
};

export default function Title({ version }: TitleProps) {
  return (
    <div className="w-full flex flex-col justify-start items-center pt-12 pb-8">
      {version === 1 &&
        <>
          <h1 className="text-5xl tracking-tighter text-neutral-200">Begrudgingly,</h1>
          <h2 className="text-amber-200 text-xs text-center uppercase mt-4 mb-2">Charles Dickens performs &lsquo;A Christmas Carol&rsquo;</h2>
          <h2 className="text-5xl tracking-tighter text-neutral-200">Again!</h2>
        </>
      }


      {version === 2 &&
        <>
          <h1 className="text-5xl tracking-tighter text-neutral-200">Charles Dickens</h1>
          <h1 className="text-5xl tracking-tighter text-neutral-200">Begrudgingly</h1>

          <h2 className="text-amber-200 text-xs text-center uppercase mt-4 mb-2">Performs &lsquo;A Christmas Carol&rsquo; Again</h2>
        </>
      }


      {version === 3 &&
        <>
          <h1 className="text-3xl tracking-tight text-neutral-200 mb-1">Charles Dickens</h1>
          <h1 className="text-4xl tracking-tighter text-amber-200 uppercase">Begrudgingly</h1>
          <h1 className="text-3xl tracking-tight text-neutral-200">Performs</h1>

          <h1 className="text-3xl tracking-tight text-neutral-200">&lsquo;A Christmas Carol&rsquo;</h1>
          <h1 className="text-4xl tracking-tighter text-amber-200 uppercase">Again</h1>
        </>
      }


      {version === 4 &&
        <>
          <h1 className="text-4xl tracking-tighter text-neutral-200">Charles Dickens</h1>
          <h1 className="text-4xl tracking-tighter text-amber-200 uppercase">Begrudgingly</h1>
          <h1 className="text-4xl tracking-tighter text-neutral-200">Performs</h1>

          <h1 className="text-4xl tracking-tighter text-neutral-200 mb-8">&lsquo;A Christmas Carol&rsquo;</h1>

        </>
      }



    </div>

  );
}