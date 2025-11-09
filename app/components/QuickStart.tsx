const STEPS = [
  {
    label: "1. Build habit graph",
    detail:
      "Load LDOS-CoMoDa, normalize contexts, compute habit_strength = repetition_decay + reinforcement_decay."
  },
  {
    label: "2. Train hybrid model",
    detail:
      "Learn context + behavior encoders, attach differentiable logic rules, fine-tune with meta-learning curriculum."
  },
  {
    label: "3. Evaluate transfer",
    detail:
      "Measure recommendation metrics under context shift, inspect symbolic rules, iterate on ontology coverage."
  }
];

export function QuickStart() {
  return (
    <section>
      <h2>Quick Start Checklist</h2>
      <div className="grid">
        {STEPS.map((step) => (
          <div key={step.label} className="card">
            <strong>{step.label}</strong>
            <p>{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
