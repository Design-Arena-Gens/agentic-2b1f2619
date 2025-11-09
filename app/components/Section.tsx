import type { Section, Step } from "../data/sections";

function StepCard({ step }: { step: Step }) {
  return (
    <div className="card">
      <span className="tag">{step.title}</span>
      <p>{step.description}</p>
      {step.bullets && (
        <ul className="list">
          {step.bullets.map((bullet, index) => (
            <li key={index}>
              <span>•</span>
              <div>{bullet}</div>
            </li>
          ))}
        </ul>
      )}
      {step.code && (
        <pre>
          <code>{step.code}</code>
        </pre>
      )}
    </div>
  );
}

export function SectionBlock({ section }: { section: Section }) {
  return (
    <section id={section.id}>
      <h2>{section.label}</h2>
      <p>{section.summary}</p>
      <div className="grid two">
        {section.steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
