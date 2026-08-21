type Project = {
  title: string
  dates: string
  bullets: string[]
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Model Compression for Medical Image Classification',
    dates: 'June 2025 – September 2025',
    bullets: [
      'Used Python and PyTorch on MedMNIST across 4 datasets to apply structured and unstructured pruning to CNN and ViT architectures.',
      'Reduced model size to 8 MB while maintaining approximately 92 percent accuracy, for efficient deployment in resource-constrained environments.',
    ],
  },
  {
    title: 'Sustainable Model / Efficient Inference',
    dates: 'Coming soon',
    bullets: [
      'Extending the model compression work above into a live, benchmarked demo comparing standard vs. efficient attention computation.',
    ],
    comingSoon: true,
  },
]

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Projects</h1>
      <div className="flex flex-col gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className={
              'rounded-xl border p-6 ' +
              (p.comingSoon
                ? 'border-dashed border-gray-300 bg-gray-50/60 opacity-60 dark:border-gray-700 dark:bg-gray-900/40'
                : 'border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900')
            }
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.title}</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">{p.dates}</span>
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
