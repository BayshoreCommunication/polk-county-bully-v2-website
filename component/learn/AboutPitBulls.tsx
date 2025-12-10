import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion"; // Adjust path to your ScrollMotion component

const AboutPitBulls = () => {
  // Brand colors
  const goldColor = "#FFD700";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/adoption-bg.svg" // Reuse your shared background
          alt="Background Texture"
          fill
          className="object-cover object-center"
        />
        {/* Deep Teal Overlay */}
        <div className="absolute inset-0 bg-[#006D77]/95 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex items-center max-w-7xl mx-auto">
          {/* --- Right Column: Text Content --- */}
          <ScrollMotion delay={0.2}>
            <div>
              {/* Main Heading */}
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-wide leading-tight mb-4 text-center"
                style={{
                  color: goldColor,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                }}
              >
                About Pit Bulls
              </h2>

              {/* Paragraph */}
              <p className="text-gray-200 text-sm md:text-base text-center mb-8">
                We love all bully breeds and especially Pit Bulls! We have seen
                too many of them wind up in shelters or abandoned because they
                have a bad rap. However, we know them for what they really are:
                lovable, loyal companions who just want your affection and
                attention – just like every other dog!
              </p>

              <p className="text-gray-200 text-sm md:text-base text-center mb-8">
                Pit bulls often carry an undeserved reputation rooted in
                misunderstanding and media exaggeration. These dogs were
                originally bred for their strength and determination, traits
                that have sadly been exploited for negative purposes like
                dogfighting.
              </p>

              <p className="text-gray-200 text-sm md:text-base text-center mb-8">
                When incidents involving neglected or poorly trained pit bulls
                make headlines, the breed as a whole is unfairly judged, even
                though the real issue often lies in how the dog was raised. In
                reality, behavior is shaped far more by environment and training
                than by breed alone.
              </p>

              <p className="text-gray-200 text-sm md:text-base text-center mb-8">
                Many pit bulls, when given proper care and love, prove to be
                affectionate, loyal, and gentle companions.
              </p>

              <p className="text-gray-200 text-sm md:text-base text-center mb-8">
                Unfortunately, this unjust stigma has led to an
                overrepresentation of pit bulls in shelters and laws that
                unfairly target them, making it harder for these dogs to find
                loving homes.
              </p>

              <p className="text-gray-200 text-sm md:text-base text-center mb-8">
                Despite the challenges they face, pit bulls make wonderful pets
                and deserve a second chance. They are intelligent, devoted, and
                playful animals that thrive in homes where they receive
                structure and positive reinforcement. Historically known as
                “nanny dogs” for their gentle and protective nature with
                children, pit bulls are well-suited to family life.
              </p>

              <p className="text-gray-200 text-sm md:text-base text-center mb-8">
                Adopting a pit bull does more than provide a home to a deserving
                dog; it also helps to challenge the harmful stereotypes
                surrounding the breed. For those who open their hearts to a pit
                bull, the reward is a deeply loyal and loving companion who will
                shatter any preconceptions about what this misunderstood breed
                can truly offer.
              </p>

              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl  bg-black/20 mb-12 p-4 md:p-10">
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-serif tracking-wide leading-tight mb-4 text-center px-0 md:px-16"
                  style={{
                    color: goldColor,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                  }}
                >
                  Here is some basic information to help you think twice about
                  this breed and their stereotypes
                </h2>

                <p className="text-white/90 text-sm leading-relaxed mb-4 mt-6">
                  Let’s start with the fact that Pit Bulls are not actually a
                  breed of dog. The term refers to a variety of breeds of about
                  10 dogs, like the American Staffordshire terrier,
                  Staffordshire bull terrier, bulldog, and other such mixes of
                  dogs. It is a generic term often used to describe all dogs
                  with similar traits and characteristics often known in general
                  public as “Pit Bulls”. While there is an American Pit Bull
                  Terrier breed, they only make up a very small percentage of
                  dogs.
                </p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  Let’s start with the fact that Pit Bulls are not actually a
                  breed of dog. The term refers to a variety of breeds of about
                  10 dogs, like the American Staffordshire terrier,
                  Staffordshire bull terrier, bulldog, and other such mixes of
                  dogs. It is a generic term often used to describe all dogs
                  with similar traits and characteristics often known in general
                  public as “Pit Bulls”. While there is an American Pit Bull
                  Terrier breed, they only make up a very small percentage of
                  dogs.
                </p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  They were originally bred to drive and catch livestock and to
                  serve as the ideal family companions.
                </p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  Pit Bulls were not bred as guard dogs because they were too
                  friendly.
                </p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  They do not have locking jaws. This is a myth!
                </p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  To piggyback on fact number five: Pit Bulls also don’t have
                  the strongest bite among all dog breeds. German Shepherds and
                  Rottweilers actually have a more powerful bite.
                </p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  As many as 75% of mixed breed dogs in animal shelters,
                  including Pit Bulls and Pit Bull mixes, are misidentified as
                  the wrong breed.
                </p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  They are not inherently aggressive dogs. In fact, in
                  temperance tests, Pit Bulls were the second most tolerant
                  breed behind Golden Retrievers. The least tolerant was the
                </p>
              </div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-wide leading-tight mb-4 text-center"
                style={{
                  color: goldColor,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                }}
              >
                Characteristics
              </h2>

              {/* Paragraph */}
              <p className="text-gray-200 text-sm md:text-base text-center mb-8">
                Pit Bulls are intelligent, agile, loving, faithful, and
                extremely trainable. They love snuggling up to you to give you
                tons of kisses, they will be your most faithful companion. Pits
                put their all into whatever they start!
              </p>

              <p className="text-gray-200 text-sm md:text-base text-center mb-8">
                One of the most endearing traits of Pit Bulls is their love of
                people and need for affection. They love cuddling, showering
                kisses, and spending time with their people. A lot of Pit Bulls
                think they’re lap dogs, despite their bulky frames! In fact, the
                American Pit Bull Terrier has a passing score of 82.3% on the
                American Temperament Test Society’s tests.
              </p>
            </div>
          </ScrollMotion>
        </div>
      </div>
    </section>
  );
};

export default AboutPitBulls;
