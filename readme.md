# LogBreak

> All breaking changes in 1 place. Free & Open-Source

## Inspiration
Changelogs are usually just blocks of text without any real focus on the user experience of people reading those changelogs. While it may seem like a place with no room for innovation, our team has been able to expand the realms of possibility by solving tangible problems that developers are facing every day like upgrading dependencies in package.json files!

## What it does
LogBreak is an application that:
- Compares Dependency Versions for Easy Upgrading (Filters to show you only the most important changes, that got introduced since your current version).
- Makes it easier to read changelogs with friendly & clean UI.
- Is blazing fast & works offline (PWA technology)

## How we built it

Front side of our application relies on React. We are using Next.js for features like server-side rendering, dynamic routing, dynamic imports, automatic code splitting & more. Everything is deployed with Zeit Now.

Our app heavily uses the Github v4 GraphQL API to fetch and parse data (releases tags, changelogs etc.). We are also using Firebase functions (written in Python) to sort & filter breaking changes, as well as remove unnecessary stuff.

## Challenges we ran into
Trying to re-design something that hasn't really changed for quite a while and something that doesn't have a common standard leads to trade-offs and sacrifices when choosing which design elements to move forward with.

## Accomplishments that we're proud of
- Being able to innovate in places where others haven't
- Completing a project with a bunch of strangers and becoming great friends by the end of the hackathon!

## What we learned
Firebase, Design Principles, GitHub v4 GraphQL API

## What's next for LogBreak
Breakdown how many users are downloaded per each version release so we can find out how many people are upgrading their dependencies and much more!

### License

MIT
