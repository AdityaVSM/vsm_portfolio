> I spent three years building HPE's cloud configuration platform end to end: new solution workflows in React and Spring Boot, a security layer for the backend APIs, a backend modernization that made responses ~30% faster, and a CI/CD migration that cut deployment downtime by ~60%.

## Context

HPE sells infrastructure through a set of solution offerings under HPE GreenLake. Before a deal closes, a pre-sales engineer has to turn a customer's needs into a concrete, priced configuration.

That's what this platform does. It's used by thousands of HPE pre-sales professionals worldwide:

1. **Capture requirements.** The pre-sales user enters what the customer needs across compute, storage and networking.
2. **Generate a bill of materials.** The app builds a BOM listing every component needed to build the customer's infrastructure.
3. **Price it.** Each BOM comes with indicative pricing.
4. **Iterate.** The user takes it back to the customer, adjusts requirements, and regenerates until the configuration fits.

The frontend is React with TypeScript, and the backend is Java with Spring Boot REST APIs over a relational database.

## My role

I was a full stack developer on the platform and worked across the whole lifecycle, from design through CI/CD and deployment. My main areas of ownership were:

- building new solution workflows end to end
- securing the backend APIs
- modernizing the backend
- moving our pipelines from Jenkins to GitHub Actions

## Building solution workflows

Each HPE solution offering has its own architecture, and each customer has different needs, so every offering needs its own workflow in the tool. I designed and delivered **5 end-to-end workflows**, from the React/TypeScript interface through the Spring Boot APIs and backend integrations. These included:

- **Private Cloud Business Edition (PCBE)**, for high-impact business workloads.
- **Private Cloud Edge**, for edge workloads.
- **Enhanced features and BOM generation** across several other offering flows.

Alongside the workflows I added role-based access control, admin pages and solution management features to the existing flows.

### The hard part: building against a moving target

The platform was built alongside the offerings themselves. As HPE introduced new offerings, the design team would revise the solution architecture, and we had to adapt the workflow to match.

In practice that meant a loop of building, presenting to the business team, taking feedback, and updating again. Most of the difficulty was managing that back-and-forth while keeping each workflow correct, since a wrong component or price in a BOM goes straight to a customer conversation.

<!-- TODO(Aditya): one concrete example of a late design change and how you handled it, e.g. how you structured the code so changes were cheap. -->

## Securing the APIs

Sonar scans and penetration testing raised more than **10 critical security findings**, and most of them came down to one root cause: the backend APIs had no authentication layer of their own. The UI controlled what users could see, but the APIs behind it didn't check who was calling.

I added an authentication and authorization layer for API requests so that the backend enforces access itself. For example:

- Admin dashboard data is returned only to admins.
- Features limited to certain groups of users are enforced at the API, not just hidden in the UI.

For rate limiting, I didn't build anything new. Our load balancer already supported rate limiting, so I configured it there. That protects every service behind it and keeps the logic out of application code.

## Modernizing the backend

Parts of the backend were legacy Spring MVC with XML configuration, and the code had grown repetitive. I migrated those modules to Spring Boot:

- **Multi-module structure** with entities and repositories separated into their own layers.
- **No XML configuration.**
- **JPA with Hibernate ORM** for database access wherever possible, instead of hand-written data access code.
- **Separate service and utility classes**, which removed a lot of duplicated code.
- **Lazy loading and caching**, so large records aren't fetched in full when only part of them is needed.

The result was API response times about **~30% faster**, and noticeably lower latency when fetching large records. I also designed and optimized SQL schemas to improve data organization, storage efficiency and query performance.

## CI/CD: from manual deployments to one click

Deployments started out fully manual. For every release, someone had to:

1. Log in to each server the application was hosted on.
2. Take backups of the logs, the database and the WAR files.
3. Deploy the new WAR files.
4. Deploy any new assets, such as PDFs and images.

That was slow, repeated on every server, and easy to get wrong.

I automated the whole process in **Jenkins**, so a deployment that used to take a series of manual steps on each server became **one click**: backups, the new build and the assets, all handled by the pipeline. I later migrated these pipelines to **GitHub Actions** and optimized them for end-to-end CI/CD.

Production deployment downtime dropped by **~60%**, from 40 minutes to about 15.

<!-- TODO(Aditya): confirm where the 40 → ~15 minute improvement came from: the Jenkins automation, the GitHub Actions migration, or both together. -->

## Results

- **5 end-to-end workflows** shipped across HPE GreenLake solution offerings, including PCBE and Private Cloud Edge.
- **10+ critical security findings** resolved, with authentication and authorization now enforced at the API level.
- **~30% faster** API responses after the Spring Boot migration.
- **~60% less** deployment downtime (40 → ~15 minutes).

<!-- TODO(Aditya): "What I'd do differently" section, if you want one. -->
