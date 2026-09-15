type Project = {
  title: string
  dates: string
  bullets: string[]
  comingSoon?: boolean
  links?: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: 'Real-Time Optimized Virtual Character Engine',
    dates: 'In progress, 2026',
    bullets: [
      'Built an end-to-end inference optimization pipeline for real-time, on-device virtual game characters, spanning an LLM (Qwen2.5-0.5B), TTS (Piper) and vision (Qwen2.5-VL).',
      'Quantized the LLM to GGUF (4-bit), reducing model size by 60% with no loss in generation quality; separately, applied data-driven structured layer pruning and knowledge distillation to recover coherence broken by aggressive layer removal, achieving a ~35% inference speedup in a model published on Hugging Face.',
      'Implemented speculative decoding from scratch, validated exact-match against the reference model’s own output, reaching a 56% draft-token acceptance rate, and a block-based KV-cache memory manager inspired by vLLM’s PagedAttention, demonstrating over 96% memory savings versus naive allocation.',
      'Wrote custom fused GPU kernels in Triton (RMSNorm, INT8 dequantize+matmul), outperforming PyTorch’s cuBLAS-backed matmul by up to 3.15x.',
      'Built a native C++ inference wrapper and integrated it into Unity via native plugins, shipping a live demo where a character generates multi-turn dialogue through the compressed LLM and speaks it through a custom TTS pipeline, entirely in-engine.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/AkshataSingh/VirtualCharEngine' },
      { label: 'Hugging Face model', href: 'https://huggingface.co/Aks44/qwen2.5-0.5b-pruned-distilled-game' },
    ],
  },
  {
    title: 'Model Compression for Medical Image Classification',
    dates: 'MSc Dissertation, June 2025 – September 2025',
    bullets: [
      'Used Python and PyTorch on MedMNIST across 4 medical imaging datasets, including PathMNIST (histopathology), BreastMNIST (ultrasound) and BloodMNIST (blood cell microscopy), applying structured and unstructured pruning to CNN and ViT architectures.',
      'Reduced model size to 8 MB while maintaining approximately 92 percent accuracy, enabling efficient deployment of diagnostic imaging models in resource-constrained clinical settings.',
    ],
  },
]

function ProjectsPage() {
  return (
    <section className="detail-panel" aria-labelledby="projects-title">
      <p className="hero-eyebrow">Ideas into impact</p>
      <h1 id="projects-title" className="panel-title">Selected projects<span>.</span></h1>
      <p className="panel-intro">Exploring what’s possible with efficient models, practical research, and real-time AI.</p>
      <div className="detail-stack">
        {projects.map((project, index) => (
          <article key={project.title} className="detail-card project-card">
            <span className="project-number" aria-hidden="true">0{index + 1}</span>
            <p className="card-date">{project.dates}</p>
            <h2>{project.title}</h2>
            <ul>{project.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            {project.links && (
              <div className="project-links">
                {project.links.map(link => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
