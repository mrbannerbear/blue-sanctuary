"use client"
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Route from "@/app/routes/Routes";

const GetInvolved = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate a subscription process (replace this with API integration)
    setTimeout(() => {
      setIsSubscribed(true);
    }, 1000);
  };

  const handleClose = () => {
    setActiveAction(null);
  };

  return (
    <Route id="Get Involved">
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-transparent via-transparent to-blue-950/40 text-white py-16 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl  mb-4">
          Get Involved. Make a Difference.
        </h2>
        <p className="text-lg mb-8 font-sans text-gray-400">
          The oceans need your help. Join a cleanup, pledge to reduce plastic,
          or subscribe for updates—all from right here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => setActiveAction("cleanup")}
            className=" border-blue-900 border-[1.5px] text-white  py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            Join a Cleanup
          </button>
          <button
            onClick={() => setActiveAction("reducePlastic")}
            className=" border-blue-900 border-[1.5px] text-white  py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            Pledge to Reduce Plastic
          </button>
          <button
            onClick={() => setActiveAction("learnMore")}
            className="border-blue-900 border-[1.5px] text-white  py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            Learn More
          </button>
        </div>

        {/* Subscription Section */}
        {!isSubscribed ? (
          <div className="mt-12">
            <h3 className="text-2xl  mb-4">Subscribe for Updates</h3>
            <p className="mb-4 font-sans text-gray-400">
              Stay informed about ocean conservation efforts and learn how you
              can help. Enter your email below to join our community.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-auto flex-grow py-2 px-4 rounded-lg"
              />
              <button
                onClick={handleSubscribe}
                className="border-[1.5px] border-blue-900 text-white  py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                Subscribe
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-12 text-center">
            <h3 className="text-2xl  mb-2">Thank You!</h3>
            <p className="text-lg">
              You&apos;ve successfully subscribed. Stay tuned for updates!
            </p>
          </div>
        )}
      </div>

      {/* Modals */}
      {activeAction === "cleanup" && (
        <Modal onClose={handleClose}>
          <h3 className="text-2xl  mb-4">Join a Cleanup</h3>
          <p>
            Organize or join a local beach cleanup in your community. Together,
            we can remove tons of plastic and debris from our shores and oceans.
          </p>
          <ul className="list-disc pl-5 mt-4 text-left">
            <li>Check out cleanup events near you.</li>
            <li>Gather a group of friends to participate.</li>
            <li>Share your cleanup journey online to inspire others.</li>
          </ul>
        </Modal>
      )}
      {activeAction === "reducePlastic" && (
        <Modal onClose={handleClose}>
          <h3 className="text-2xl  mb-4">Pledge to Reduce Plastic</h3>
          <p>
            Take a small but impactful step by pledging to cut back on single-use plastics.
            Start with these simple actions:
          </p>
          <ul className="list-disc pl-5 mt-4 text-left">
            <li>Carry a reusable water bottle and shopping bag.</li>
            <li>Say no to plastic straws and utensils.</li>
            <li>Support brands that prioritize sustainable packaging.</li>
          </ul>
        </Modal>
      )}
      {activeAction === "learnMore" && (
        <Modal onClose={handleClose}>
          <h3 className="text-2xl  mb-4">Learn More</h3>
          <p>
            Education is a powerful tool. Explore resources to understand the challenges
            our oceans face and how you can contribute to solutions.
          </p>
          <ul className="list-disc pl-5 mt-4 text-left">
            <li>Watch documentaries like <em>Chasing Coral</em> or <em>Seaspiracy</em>.</li>
            <li>Read about ocean conservation efforts.</li>
            <li>Share knowledge to amplify the impact.</li>
          </ul>
        </Modal>
      )}
    </div>
    </Route>
  );
};

// Modal Component
const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({
  onClose,
  children,
}) => {
    const modalRef = useRef(null)

    useEffect(() => {
        // GSAP animation when the modal scrolls into view
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: modalRef.current,
              start: "top 75%",
            },
          }
        );
      }, []);
    
  return (
    <div className="fixed inset-0 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-blue-900/20 backdrop-blur-lg text-white rounded-lg shadow-lg p-8 max-w-lg w-full font-sans" ref={modalRef}>
        {children}
        <button
          onClick={onClose}
          className="mt-4 border-[1.5px] border-blue-900 text-white  py-2 px-4 rounded transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GetInvolved;
