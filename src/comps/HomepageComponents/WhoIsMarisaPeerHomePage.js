import Link from "next/link";
import Image from "next/image";

const WhoIsMarisaPeerHomepage = () => {
  return (
    <div className="bg-base-200">
      <div className="hero-content flex-col lg:flex-row bg-lime-100 mt-10 p-10 max-w-full">
        <img
          src="https://images.unsplash.com/photo-1515168985652-8454bcc8fcaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="m-12">
          <h1 className="text-2xl font-bold">Who is Marissa Peer?</h1>
          <p className="py-6">
            Marisa’s RTT&#174; uses hypnotherapy to access the subconscious
            mind, psychotherapy to help you discover the root or the cause of
            the issue and then a combination of CBT and NLP to transform how you
            feel recoding the subconscious mind. Your bespoke transformation,
            made just for you, will go home with you in the form of an audio,
            and it is this which recodes (over 21 days; it takes this long for
            the mind to create new neural pathways), and rewires your
            subconscious mind with new empowering and positive beliefs that have
            been chosen both for you and by you, as you move forwards with your
            life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoIsMarisaPeerHomepage;
