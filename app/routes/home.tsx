import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constant/index.";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI-Resume-Analyzer" },
    {
      name: "description",
      content: "Smart feedback for getting your dream job",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <p>
            Review your applications and get personalized feedback to improve
            your resume and increase your chances of landing your dream job.
          </p>
        </div>
        {resumes.length > 0 && (
          <div className="resume-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
