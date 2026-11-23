> Full-stack spaced-repetition trackers for coding interview and system design prep. I built them to fix a problem I kept running into, and I use them every day.

## The problem: solving a problem once isn't enough

Curated lists like LeetCode 75 and Top Interview 150 are a great way to cover the important problems. But once you solve a problem, if you don't revisit it, or never run into a situation that needs that algorithm, you start forgetting it.

A list tells you what to solve. It doesn't tell you **when to come back to it**.

## The approach: spaced repetition

Spaced repetition is a well-known learning technique: you review material at growing intervals, just before you'd otherwise forget it. I applied it to interview prep. Every problem I solve gets a **next review date**, and the tracker shows me what's due each day.

How far out that date goes depends on a few signals:

- **Attempt number.** A first attempt comes back sooner than a problem I've already solved several times.
- **Independence.** Did I solve it on my own, or did I need to watch a video or read a solution first? Needing help means it comes back sooner.
- **Personal difficulty rating.** After each attempt I rate how hard it felt *for me*. LeetCode's Easy/Medium/Hard labels don't match everyone's experience; a "Medium" can be easy for one person and hard for another. The rating lets the schedule adapt to my own weak spots instead of a generic label.

The review schedules are configurable, so the intervals can be tuned rather than hard-coded.

<!-- TODO(Aditya): a concrete example, e.g. "solved independently, rated easy → next review in X days; watched a video first → next review in Y days". -->

## Extending it to system design

Once the coding tracker was working, I realized system design prep has the same problem: concepts you studied a month ago fade if you don't revisit them. So I built a second tracker using **Hello Interview's** system design framework. I added its topics and applied the same spaced-repetition scheduling.

## Tech choices

- **React + TypeScript** for the frontend.
- **PostgreSQL** for storage. The data is simple and naturally relational (problems or topics, attempts, ratings, review dates), which is exactly what Postgres handles well. It will also scale comfortably once I open the trackers up publicly.
- **Neon** for serverless Postgres and **Vercel** for hosting, which keeps deployment simple and costs low for a personal project.

Today the coding tracker and the system design tracker are **two separate applications**. I'm currently merging them into a single app and deploying it.

<!-- TODO(Aditya): optional: login / multi-user, and anything tricky you hit (scheduling logic, time zones, serverless cold starts). -->

## Outcome

I use both trackers daily for my own interview prep. I'm planning to make them public so others can use them too.
