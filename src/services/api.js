export async function askRAG(question, onStage) {
  // TEMPORARY MOCK BACKEND
  // Your friend's backend will replace this.

  onStage("retrieving");

  await new Promise((resolve) => setTimeout(resolve, 350));

  onStage("generating");

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    answer:
      "This is a temporary demonstration response. Once the RAG backend is connected, this answer will be generated strictly from the relevant passages retrieved from the MSMARCO-XI knowledge base.",

    grounded: true,

    confidence: 0.94,

    sources: [
      {
        text: "Retrieved passage 1 — Relevant context from the indexed MSMARCO-XI dataset.",
      },
      {
        text: "Retrieved passage 2 — Additional context supporting the generated answer.",
      },
    ],

    latency_ms: {
      stt: 42,
      retrieval: 18,
      generation: 71,
      total: 131,
    },
  };
}
