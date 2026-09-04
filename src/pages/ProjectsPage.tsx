type Project = {
  title: string
  dates: string
  bullets: string[]
  comingSoon?: boolean
}

const projects: Project[] = [
  {
  title: 'Model Compression for Medical Image Classification',
  dates: 'MSc Dissertation, June 2025 – September 2025',
  bullets: [
    'Used Python and PyTorch on MedMNIST across 4 medical imaging datasets, including PathMNIST (histopathology), BreastMNIST (ultrasound) and BloodMNIST (blood cell microscopy), applying structured and unstructured pruning to CNN and ViT architectures.',
    'Reduced model size to 8 MB while maintaining approximately 92 percent accuracy, enabling efficient deployment of diagnostic imaging models in resource-constrained clinical settings.',
  ],
},
  {
    title: 'Real-Time Optimized Virtual Character Engine',
    dates: 'In progress, 2026',
    bullets: [
      'Extending the model compression research above into a live inference engine: an optimized small LLM and TTS pipeline for real-time, on-device virtual characters.',
      'Quantized an LLM to GGUF format (~5.5x faster per-token generation) and used data-driven layer pruning plus knowledge distillation to safely push compression further, recovering full output quality in a model pruned past its normal safe limit.',
      'Implemented speculative decoding from scratch, validated exactly against the reference model’s own output, reaching a 56% draft-token acceptance rate.',
      'Built a simplified block-based memory manager inspired by vLLM’s PagedAttention, demonstrating over 96% memory savings versus naive allocation.',
    ],
  },
]

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-3xl px-2 py-6 sm:px-6 sm:py-12">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Projects</h1>
      <div className="flex flex-col gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className={
              'rounded-xl border p-4 sm:p-6 ' +
              (p.comingSoon
                ? 'border-dashed border-gray-300 bg-gray-50/60 opacity-60 dark:border-gray-700 dark:bg-gray-900/40'
                : 'border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900')
            }
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.title}</h2>
              <span className="text-sm text-gray-600 dark:text-gray-400">{p.dates}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-600 dark:text-gray-300">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
