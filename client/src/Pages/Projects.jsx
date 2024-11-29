import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Discover fun and engaging projects while exploring topics like HTML,
        CSS, and JavaScript! Mighty’s Blog is your go-to platform for learning
        and growing as a developer.
      </p>
      <CallToAction />
    </div>
  );
}
