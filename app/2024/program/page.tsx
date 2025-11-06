import CTAElement from "@/components/cta_element";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charles Dickens Begrudgingly - 2024 Digital Program",
  description:
    "Digital program of Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again, by Blake Montgomery for the 2024 season.",
  alternates: { canonical: "/2024/program/" },
};

const CtaProps = {
  intro: "",
  links: [
    {
      href: "/creator/",
      text: "meet the creator",
      icon: "creator",
      internal: true,
    },
  ],
};

export default function Program() {
  return (
    <div key="/2024/program" className="w-full h-fit p-4 sm:p-8">
      <div className="flex flex-col items-center justify-center max-w-2xl px-4 sm:px-12 md:px-16 w-full bg-neutral-200 text-neutral-900 py-8 sm:py-12 md:py-16 rounded-xl mx-auto">
        <h1 className="font-bold text-center mb-12">
          <span className="text-2xl sm:text-3xl md:text-4xl">
            Charles Dickens
          </span>
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl relative -top-1">
            Begrudgingly
          </span>
          <br />
          <span className="text-sm sm:text-base md:text-lg relative -top-1 sm:top-0">
            Performs <span className="italic">A Christmas Carol</span> Again
          </span>
        </h1>
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-base italic">created and performed by</p>
          <p className="text-2xl font-bold">Blake Montgomery</p>
        </div>
        <h2 className="text-2xl font-bold mb-4 mt-12 text-center">
          Creative Team
        </h2>
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-base italic">scenic design</p>
          <p className="text-xl font-bold mb-2">Pamela Maurer</p>
          <p className="text-base italic">costume design</p>
          <p className="text-xl font-bold mb-2">Izumi Inaba</p>
          <p className="text-base italic">wig design</p>
          <p className="text-xl font-bold mb-2">Megan E. Pirtle</p>
          <p className="text-base italic">lighting design</p>
          <p className="text-xl font-bold mb-2">Emmitt Socey</p>
          <p className="text-base italic">sound design</p>
          <p className="text-xl font-bold">Oskar Westbridge</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-base italic">ghost of rehearsals present</p>
          <p className="text-xl font-bold">George Keating</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-12 text-center">
          Production Team
        </h2>
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-base italic">stage management</p>
          <p className="text-xl font-bold mb-2">Jake Snell</p>

          <p className="text-base italic">Production Electrician</p>
          <p className="text-xl font-bold mb-2">Hannah Kwak</p>
          <p className="text-base italic">board operator</p>
          <p className="text-xl font-bold mb-2 text-center">
            Thompson MacKenzie Scribner
          </p>
          <p className="text-base italic">electrician</p>
          <p className="text-xl font-bold mb-2">Hazel Matteson</p>
          <p className="text-base italic">prompt book fabrication</p>
          <p className="text-xl font-bold mb-2">Sion Silva</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-base italic">house management</p>
          <p className="text-xl font-bold mb-2">Andrew Snyder</p>
          <p className="text-base italic">marketing and media</p>
          <p className="text-xl font-bold mb-2">SHOUT Marketing</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-base italic">special thanks to</p>
          <p className="text-base font-bold text-center">
            Chelsea Keenan, Lee Keenan,
            <br />
            Lauren Pizzi, Mieka Van Der Ploeg
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-12 text-center">
          Company Biographies
        </h2>
        <div className="flex flex-col items-center justify-start gap-4 max-w-xl">
          <p className="text-base">
            <span className="font-bold">
              Blake Montgomery (Dickens, Creator)
            </span>{" "}
            began his career in Chicago directing ensemble clown theater and
            performing with a variety of non-naturalistic Chicago theaters, most
            notably Redmoon with whom he collaborated for more than a decade. In
            2005, Montgomery founded The Building Stage, a theater company and
            performance space, where he served as Artistic Director until its
            closing in 2013. The company was known for its ensemble-devised,
            director-driven creations, particularly in literary adaptations like
            their Jeff Award-winning <span className="italic">Moby-Dick</span>{" "}
            and the poetic, clown-inspired{" "}
            <span className="italic">Dawn, Quixote</span>. Montgomery&apos;s
            artistic approach draws on his training at the École Jacques Lecoq,
            the Dell&apos;Arte School of Physical Theater, and Middlebury
            College. A member of Actors&apos; Equity, his performances in
            Chicago include work with The House Theatre, The Hypocrites, Remy
            Bumppo Theatre Company, Court Theatre, Chicago Shakespeare,
            Steppenwolf, and Writers Theatre. Honoring the Past, Present, and
            Future: this performance is dedicated to Anne, Lauren, and Bodie.
          </p>
          <p className="text-base">
            <span className="font-bold">Izumi Inaba (Costume Design)</span> is
            so delighted to work with Blake again! Previously with him, she has
            designed{" "}
            <span className="italic">
              Charles Dickens Begrudgingly Performs ‘A Christmas Carol’ Again
            </span>{" "}
            and <span className="italic">Moby Dick</span> at Building Stage back
            in 2011. Her recent works include{" "}
            <span className="italic">Noises Off</span> (Steppenwolf Theatre
            Company),{" "}
            <span className="italic">
              I Am Not Your Perfect Mexican Daughter
            </span>{" "}
            (Denver Center Performing Arts),{" "}
            <span className="italic">Milo Imagines The World</span> (Chicago
            Children’s Theatre),{" "}
            <span className="italic">Every Brilliant Thing</span> (Writers
            Theatre), and <span className="italic">The Comedians</span> (Ravens
            Theatre). Upcoming projects include{" "}
            <span className="italic">Empty Ride</span> (Old Globe),{" "}
            <span className="italic">The Play That Goes Wrong</span> (Indiana
            Repartory Theatre), and <span className="italic">Cats</span>{" "}
            (Paramount Theatre). Izumi is a member of United Scenic Artists
            Local USA 829 and represented by Gersh.
          </p>
          <p className="text-base">
            <span className="font-bold">Megan E. Pirtle (Wig Design)</span> is a
            Chicago based theatre artist specialized in wig, costume, and makeup
            design. Her designs for Haymarket include{" "}
            <span className="italic">
              La liberazione di Ruggiero dall&apos;isola d&apos;Alcina
            </span>
            , <span className="italic">Marc&apos;Antonio e Cleopatra</span>,{" "}
            <span className="italic">L&apos;incoronazione di Poppea</span>, and{" "}
            <span className="italic">L&apos;amant Anonyme</span>. Selected wig
            design credits include{" "}
            <span className="italic">Trouble in Mind</span>,{" "}
            <span className="italic">Campaigns Inc.</span> (co-design),{" "}
            <span className="italic">Relentless</span>,{" "}
            <span className="italic">Rutherford & Son</span> (TimeLine),{" "}
            <span className="italic">Mesmerized</span> (Chicago Children&apos;s
            Theatre), <span className="italic">The October Storm</span>,{" "}
            <span className="italic">The Last Pair of Earlies</span>,{" "}
            <span className="italic">Crumbs from the Table of Joy</span>{" "}
            (Raven), <span className="italic">Gypsy</span>,{" "}
            <span className="italic">Hello Dolly</span> (co-design),{" "}
            <span className="italic">You&apos;re a Good Man Charlie Brown</span>
            , and <span className="italic">The Princess & the Pea</span>{" "}
            (Marriott). She has also worked as the Wig & Hair Coordinator and
            Artisan for <span className="italic">Villette</span>,{" "}
            <span className="italic">Her Honor Jane Byrne</span> (Lookingglass),{" "}
            <span className="italic">Two Trains Running</span> (Court),{" "}
            <span className="italic">Ring of Fire</span> (Drury Lane),{" "}
            <span className="italic">Dial M for Murder</span> and{" "}
            <span className="italic">Georgiana & Kitty</span> (Northlight). Most
            recently, Megan was the Makeup Coordinator for the Chicago premiere
            of{" "}
            <span className="italic">
              Emmet Otter&apos;s Jug-Band Christmas
            </span>{" "}
            (Timothy Allen McDonald/iTheatrics). Megan is also a licensed
            cosmetologist of Illinois. And in 2023, she was the recipient of the
            Michael Merritt Emerging Technical Collaborator Award. For more,
            visit meganpirtledesign.com.
          </p>
          <p className="text-base">
            <span className="font-bold">Emmitt Socey (Lighting Design)</span> is
            a recent graduate of Loyola University Chicago and one of those
            multi-hyphenates people love to talk about. They work primarily as a
            director and lighting designer with recent credits including Guest
            Co-Director for <span className="italic">Orange Julius</span> for
            Loyola, Dramaturg and Director of new one-woman show{" "}
            <span className="italic">You Will Speak Again</span>,{" "}
            <span className="italic">Kapemba&apos;tona</span>, and Lighting
            Designer for <span className="italic">Blood to Drink</span> at
            Earlham College in Richmond, IN. They also had the joy of interning
            at Peninsula Players Theatre in Door County, WI, where they were the
            props intern for the summer. They would like to thank Lee Keenan
            specifically for supporting their growth and connecting them with
            this production.
          </p>
          <p className="text-base">
            <span className="font-bold">Oskar Westbridge (Sound Design)</span>{" "}
            is a director, sound designer, and teaching artist. They recently
            directed/sound designed{" "}
            <span className="italic">
              R.U.R (Rossum&apos;s Universal Robots)
            </span>{" "}
            and <span className="italic">Frankenstein</span> as a guest artist
            at Triton College. They are a graduate of The Theater School at
            DePaul University, a faculty member of the National High School
            Institute (&ldquo;Cherubs&rdquo;) program, and a alumni of Directors
            Lab North 2024. See more at oskarcywestbridge.com.
          </p>
          <p className="text-base">
            <span className="font-bold">
              George Keating (Ghost of Rehearsals Present)
            </span>{" "}
            is honored to hover about rehearsals and attempt to say helpful
            things. When it&apos;s not Christmas, he can be seen teaching at The
            Theatre School at DePaul University. He appears on stages in Chicago
            for the past 30 years and occasionally on your television or social
            media platform. George is the Theatre Arts Division Director of The
            National High School Institute at Northwestern University, more
            commonly known as the cherubs program. He plans to make theatre and
            music, and be around art, until he is inevitably compared to the
            Dickensian &ldquo;doornail.&rdquo;
          </p>
          <p className="text-base">
            <span className="font-bold">Jake Snell (Stage Manager)</span> is
            from Palos Heights, IL and currently resides in Rogers Park as a
            freelance stage and production manager. Jake is a recent graduate
            from Loyola University Chicago where he studied theater and
            psychology. Recent credits include work with Goodman Theatre,
            Northlight Theatre, Congo Square Theatre, Black Ensemble Theatre,
            Definition Theatre, Griffin Theatre, Porchlight Music Theatre, and
            Trap Door Theatre. Jake would like to thank his family and friends
            for their endless love and support.
          </p>
          <p className="text-base">
            <span className="font-bold">Andrew Snyder (House Manager)</span> is
            a Theatre Artist/Musician from Fort Smith, AR. Previous Chicago
            credits include Stage Management for{" "}
            <span className="italic">By the Way, Meet Vera Stark</span>,{" "}
            <span className="italic">The Pavilion</span>, and{" "}
            <span className="italic">Dying For It</span> with The Artistic Home.
            Andrew holds a B.A. in Acting/Directing from the University of
            Arkansas at Fort Smith and an M.F.A in Acting from Northern Illinois
            University.
          </p>
          <p className="text-base">
            <span className="font-bold">
              Hannah Kwak (Production Electrician)
            </span>{" "}
            is a Chicago-based sound engineer and electrician. She is the
            assistant sound supervisor for Chicago Children&apos;s
            Theatre&apos;s 24-25 season and is the production assistant for Joe
            Mazza at brave lux inc. She recently worked on Writer&apos;s
            Theatre&apos;s <span className="italic">Great Comet</span> as the
            LX/A2 cover and will be sound designing at Citadel Theatre in the
            spring. She is an alum of Loyola University Chicago and is thrilled
            to be part of this production!
          </p>
          <p className="text-base">
            <span className="font-bold">
              Thompson MacKenzie Scribner (Board Operator)
            </span>{" "}
            is brand new to Chicago! She loves big rocks, small rocks, and
            animals with weird organs. You can find her blog at
            thompsonscribner.com or on substack.com/@thompsonmac.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start max-w-xl">
          <h2 className="text-2xl font-bold mb-4 mt-12">About the Show</h2>
          <div className="flex flex-col items-center justify-start gap-4">
            <p className="text-base">
              <span className="font-bold">Charles Dickens Begrudgingly...</span>{" "}
              was first created and performed in December of 2011 at The
              Building Stage in Chicago&apos;s industrial West Loop. The piece
              was remounted / revised in 2012, also at The Building Stage. The
              version you see tonight builds on those previous productions --
              and very possibly on discoveries made onstage last night.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-xl">
          <h2 className="text-2xl font-bold mb-4 mt-12">About the Company</h2>
          <div className="flex flex-col items-center justify-start gap-4">
            <p className="text-base">
              <span className="font-bold">CLOWNSHOW</span> is a theater company
              dedicated to producing the creative work of Blake Montgomery.
              Launching in 2024 with the revised remount of{" "}
              <span className="italic">Charles Dickens Begrudgingly...</span>,
              current plans include a new solo piece by Blake scheduled to debut
              in 2025. This piece, about another Victorian author, Wilkie
              Collins, and his creation of{" "}
              <span className="italic">The Woman in White</span>, is inspired by
              the very first piece Blake presented in Chicago back in 1998.
              Eventually, the company hopes to feature Blake&apos;s directorial
              work and ensemble-created aesthetic as well as his solo
              performances.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] max-w-[400px] mx-auto pt-8">
        <CTAElement intro={CtaProps.intro} links={CtaProps.links} />
      </div>
      <div className="w-full h-48 md:h-96 bg-gradient-to-b from-neutral-950/0 to-neutral-950/100 md:bg-none" />
    </div>
  );
}
