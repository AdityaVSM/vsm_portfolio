> A chatbot for college websites that answers students' questions directly, so they don't have to dig through dozens of pages. It's built to work on any website by swapping out the data behind it. This was my undergraduate final-year project.

## The problem

University websites tend to spread information across many pages. Finding a professor's research interests, a class schedule, office hours or fee details often means clicking through several sections. The result is slow to find, and sometimes it turns out to be **outdated**.

Students usually know exactly what they want to ask. They just don't know where on the site the answer lives.

## The solution

Chatur is a chatbot that sits on the website and answers those questions in plain language. Students ask things like:

- *Which professors work on machine learning?* or *What does Professor X research?*
- *When is my class scheduled?*
- *What are Professor Y's office hours?*
- *What are the fees for this program?*

### Built to be reused

We designed Chatur as a **general-purpose chatbot** rather than one hard-wired to a single college. The logic is separate from the data, so it can be integrated with another website **just by updating the data behind it**.

## How it works

Answering a question takes two steps:

1. **Intent recognition: what is the student asking for?** We trained a **custom intent model** for the queries students ask most often: professor information and research interests, class schedules, office hours and fees. A custom model fit these domain-specific queries better than a generic one.
2. **Named entity recognition: who or what is it about?** We used **spaCy** to pull out entities such as professor names, courses and departments.

Together, the intent and the entities determine what to look up in the data and what to answer.

### Getting better over time

Chatur includes an **active learning feedback loop**, so the model can keep improving from real usage instead of staying fixed after the first training.

<!-- TODO(Aditya): how the feedback loop worked in practice, e.g. users flag wrong answers, those queries are labeled and added to training data, model retrained on a schedule. -->

## My role

We were a team of three. I built the **intent recognition** model and the **chat UI** that gets embedded in websites.

The code is on [GitHub](https://github.com/AdityaVSM/Chatur).
