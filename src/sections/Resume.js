export default function Resume() {
    return (
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-[#61dafb] mb-2">Resume</h2>
        <p>Here is my detailed resume:</p>
        <a
          href="/path/to/your/resume.pdf"
          className="text-[#61dafb] hover:underline"
          download="Your-Name-Resume.pdf"
        >
          Download Resume
        </a>
      </section>
    );
  }
  