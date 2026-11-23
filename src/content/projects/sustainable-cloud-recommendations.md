> A RAG-based recommender that suggests the lowest-carbon servers for a customer's requirements without compromising on compute. Selected among the top papers from India for HPE TechCon 2025 and presented at HPE Headquarters in Houston.

## The problem

When a pre-sales engineer configures infrastructure for a customer, there are usually **many server options** that can meet the same compute requirement. They aren't equal in their environmental impact, though. Some will produce noticeably more carbon emissions than others for the same workload.

With that many options, nobody can reasonably compare them all by hand. We wanted the tool to answer one question: **which servers meet this customer's needs with the lowest carbon emissions?**

## The idea

HPE already has a large body of real-world data: customer configurations that are deployed today, both at customer sites and on HPE servers on-premise. Those configurations show which setups actually work for which kinds of requirements.

We used that data as the knowledge base for a retrieval-augmented generation (RAG) system:

1. **Retrieve.** Given a new customer's requirements, find similar deployed configurations in the knowledge base.
2. **Ground.** Pass those real configurations, along with the latest server options, to an LLM as context.
3. **Recommend.** The LLM recommends the servers that meet the compute requirement with the lowest carbon emissions.

Grounding the model in configurations that are actually deployed keeps it from suggesting setups that look good on paper but don't hold up in practice.

## My role

This was a three-person team project. I owned the **LLM integration**.

We used GPT-5.4-mini through **ChatHPE**, HPE's internal framework that wraps LLMs with HPE's standard security measures. Working through ChatHPE meant customer configuration data stayed within HPE's approved security boundary instead of going straight to an external API.

<!-- TODO(Aditya): what the LLM integration involved in practice, e.g. prompt design, how retrieved configs were formatted into context, output format/parsing, handling bad or invalid recommendations. -->

## Verifying the recommendations

Verification was the hardest part, because there's no single correct answer to check against.

- **Emissions.** Carbon emissions can only be estimated, and the estimate depends on expected usage, which is itself an input. We calculated approximate emissions for the candidate servers and compared them manually to confirm the recommended server was the lowest.
- **Fit.** We had HPE product experts review whether the recommended servers were good enough for the requirements, and whether other servers would have been suitable.

The expert review turned out to be less useful than we expected. For most configurations, many servers are legitimately good fits, so "is there another suitable server?" was almost always yes. We still kept it as a sanity check on fit, while the emissions comparison did the real work of confirming the recommendation.

## Outcome

- Selected among the **top papers from India** for **HPE TechCon 2025**, HPE's global innovation conference.
- Presented in person at **HPE Headquarters in Houston, Texas**.

TechCon was a five-day event. Beyond presenting, I attended presentations and TED-style talks from engineers across HPE, met other presenters, and toured HPE's head office.

<!-- TODO(Aditya): did this ship into the configuration tool, or stay a prototype? Add a photo: put it in public/case-studies/ and use ![Caption](/case-studies/techcon.jpg) -->
