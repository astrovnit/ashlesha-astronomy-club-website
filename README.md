# Celestial Gateway

# Build the Official Website for AAC — Ashlesha Astronomy Club, VNIT Nagpur

Create a **premium, modern, immersive and highly polished website** for **AAC — Ashlesha Astronomy Club, Visvesvaraya National Institute of Technology (VNIT), Nagpur**.

This should feel like the official website of a serious university astronomy and space-science organization — **not a generic college club website**.

The website should combine:

* the visual/immersive quality of a modern astronomy website,
* the educational and community-oriented structure of IIT Kanpur Astronomy Club,
* the photography + projects + APOD approach of Krittika, IIT Bombay,
* and the comprehensive organization/content structure of NISER Astronomy Club.

**IMPORTANT:** Take these websites as *design and information-architecture references only*. Do NOT copy their layouts, text, branding, illustrations, code, or exact visual design. Create an original identity for AAC.

---

# 1. REFERENCE WEBSITES

Use these as inspiration/reference while designing:

### Astronomy Club, IIT Kanpur

https://wiki.astroclubiitk.in/

Reference qualities:

* strong astronomy identity
* educational/community focus
* blogs and knowledge resources
* projects
* astronomy guides/resources
* welcoming language
* a sense that the club is a community rather than simply an event organization

### Krittika — Astronomy Club, IIT Bombay

https://krittikaiitb.github.io/

Also reference:
https://tech-iitb.org/bodies/Krittika/

Reference qualities:

* beautiful astronomy imagery
* astrophotography
* prominent Astronomy Picture of the Day
* projects
* observational astronomy
* events
* computational astronomy
* trips/outreach
* clean navigation
* strong visual storytelling

### NISER Astronomy Club

https://astroclub-niser.github.io/

Reference qualities:

* clear club identity
* astronomy activities
* equipment/observatory information
* astrophotography
* events
* newsletter/magazine
* team structure
* outreach
* contact information
* educational resources

Again: **use these websites to understand what makes a good university astronomy-club website, but create a completely original AAC design.**

---

# 2. AAC IDENTITY

The website should establish AAC as:

**Ashlesha Astronomy Club (AAC)**
**The Astronomy Club of VNIT Nagpur**

AAC is a community for students interested in:

* Astronomy
* Astrophysics
* Cosmology
* Observational Astronomy
* Astrophotography
* Space Science
* Computational Astronomy
* Research
* Amateur Rocketry
* Space technology

The club should feel like a place where someone can go from:

**"I just like looking at the stars."**

to

**"I want to understand the universe."**

to

**"I want to actually build, observe, code and conduct research."**

The website should communicate that astronomy at AAC is not limited to lectures or stargazing. It includes **observation, experimentation, projects, research, computation, engineering and exploration.**

---

# 3. OVERALL DESIGN PHILOSOPHY

Create something that feels:

* cinematic
* scientific
* futuristic
* elegant
* minimal
* intellectually curious
* immersive
* sophisticated
* slightly mysterious

Avoid making it look like:

* a generic Bootstrap college website
* a template with random planets everywhere
* an overly childish "space theme"
* a gaming website
* a corporate SaaS website

Avoid excessive:

* stars everywhere
* glowing neon gradients
* cartoon planets
* rocket emojis
* cheesy space slogans
* unnecessary animations

The website should feel like **a portal into astronomy**, not a space-themed template.

Think:

**observatory + research laboratory + night sky + modern university**

rather than:

**NASA fan page.**

---

# 4. VISUAL LANGUAGE

Use a sophisticated astronomical visual language.

### Dark mode

The primary visual experience should be dark.

Use:

* deep near-black / midnight blue backgrounds
* subtle astronomical textures
* muted celestial gradients
* white/off-white typography
* restrained accent colors
* subtle blue/purple/cosmic accents where appropriate

Do NOT overuse bright colors.

### Light mode

The website must also have a genuinely designed light mode.

Do not simply invert colors.

Light mode should feel like:

* clean scientific publication
* observatory/research journal
* warm daylight sky

The two themes should both look intentionally designed.

---

# 5. DARK / LIGHT MODE

This is REQUIRED.

Place a **single-click theme toggle** in the navbar.

Use a beautiful minimal:
☀️ / 🌙

or an elegant animated sun/moon icon.

Requirements:

* one click switches between dark and light
* smooth transition
* remember the user's preference using localStorage
* respect the user's system preference on first visit
* icon changes depending on current theme
* accessible keyboard interaction
* no page reload

The transition should feel polished.

---

# 6. NAVIGATION

Create a sticky/floating navigation bar.

Navigation:

**AAC logo | Home | About | Events | Projects | Blogs | Gallery | Team | Contact**

Include a prominent CTA such as:

**Join AAC**

or

**Explore AAC**

The navbar should become slightly more compact / translucent when scrolling.

On mobile:

* hamburger menu
* smooth opening animation
* theme toggle remains easily accessible

---

# 7. HOME PAGE

The home page should be the strongest part of the website.

It should immediately communicate:

**This is AAC. This is where students explore the universe.**

## HERO SECTION

Create a full-screen or near-full-screen hero section.

Use a high-quality astronomical image/video background or a sophisticated animated cosmic background.

Possible visual concepts:

* Milky Way
* deep-space image
* night sky over an observatory/campus
* subtle starfield
* astronomical photograph

Do not use a cheesy stock image.

Hero content:

**ASHLESHA ASTRONOMY CLUB**

**VNIT NAGPUR**

Then an original short tagline.

Possible direction:

**Look beyond what you see.**

or

**Exploring the universe, one question at a time.**

Do not overdo the tagline.

Include CTA buttons:

**Explore AAC**
**Our Projects**

Add a subtle scroll indicator.

---

# 8. HOME — WHAT WE DO

Immediately after the hero, introduce AAC.

Create a visually interesting section showing the club's major areas.

Suggested categories:

### OBSERVE

Observational astronomy, stargazing, telescope sessions, sky watching.

### EXPLORE

Cosmology, astrophysics, space science and astronomical phenomena.

### BUILD

Amateur rocketry, engineering projects and space technology.

### RESEARCH

Research-oriented projects, computational astronomy and scientific exploration.

### CREATE

Astrophotography, astronomy blogs, visual content and educational material.

### CONNECT

Talks, workshops, events, collaborations and astronomy community.

Use elegant cards with subtle hover animations.

---

# 9. NASA ASTRONOMY PICTURE OF THE DAY

This is a VERY IMPORTANT feature.

Create an **Astronomy Picture of the Day** section similar in spirit to Krittika IIT Bombay's implementation, but with an original design.

Use NASA's official APOD API.

API endpoint:

https://api.nasa.gov/planetary/apod

Use the NASA demo API key initially:

DEMO_KEY

Structure the section as:

**ASTRONOMY PICTURE OF THE DAY**

Large astronomical image/video.

Show:

* title
* date
* NASA credit
* short explanation
* "Learn More" / NASA link

The content should automatically update based on NASA's current APOD.

If the APOD is a video rather than an image, handle it gracefully.

Add:
**Source: NASA Astronomy Picture of the Day**

Important:

* API call should happen dynamically
* do not hard-code today's APOD
* add loading state
* add graceful error state
* handle missing image/video
* cache the result appropriately
* do not expose any private API key
* structure the API integration so the NASA API key can later be moved to an environment variable

Make this section one of the visual highlights of the homepage.

---

# 10. UPCOMING EVENTS

Create a homepage section for upcoming events.

Display:

* event image
* event name
* date
* time
* location
* short description
* registration button if applicable

Example categories:

* Stargazing
* Talks
* Workshops
* Astronomy quizzes
* Astrophotography
* Space-tech sessions
* Competitions
* Club activities

Have a:

**View All Events →**

button.

Create an event-card system that can later be connected to a CMS/database.

For now, use realistic placeholder content but clearly structure it so actual AAC events can easily replace the placeholders.

---

# 11. FEATURED PROJECTS

Create a visually strong Projects section.

This should be one of AAC's USPs.

Emphasize that AAC is not only about observing the sky but also about **building and researching**.

Potential project categories:

### Computational Astronomy

Python, data analysis, simulations, astronomical datasets, ML.

### Astrophysics & Cosmology

Theoretical/analytical projects and exploration of cosmic phenomena.

### Observational Astronomy

Telescope observations, measurements and astronomical imaging.

### Astrophotography

Image acquisition, processing and celestial photography.

### Amateur Rocketry

Rocket design, propulsion concepts, telemetry and experimentation.

### Space Science & Technology

Projects at the intersection of astronomy, engineering and technology.

Use project cards with:

* title
* category
* year
* short description
* technologies/topics
* image
* "Read More"

Add:

**Explore All Projects →**

---

# 12. ABOUT AAC

Create a dedicated About page.

Tell the story of AAC.

Include:

### Who We Are

AAC / Ashlesha Astronomy Club is the official astronomy club of VNIT Nagpur.

Use the publicly available description of AAC as a starting point, but rewrite it into polished original website copy.

The existing public description emphasizes:

* overnight stargazing
* astronomy
* cosmology
* astrophysics
* projects
* engineering/management skills
* space exploration

Build upon these ideas rather than simply copying the old wording.

### Our Philosophy

Something along the lines of:

Astronomy begins with curiosity.

But curiosity becomes meaningful when we observe, question, calculate, build and investigate.

AAC should be presented as a community where students can explore astronomy regardless of their academic branch or prior experience.

### What We Believe

Use 4–6 principles such as:

**Curiosity**
Question the universe.

**Observation**
Look carefully before drawing conclusions.

**Learning**
Make complex ideas accessible.

**Experimentation**
Turn ideas into projects.

**Research**
Go beyond textbooks.

**Community**
Explore together.

---

# 13. EVENTS PAGE

Create a dedicated Events page.

Include:

* upcoming events
* ongoing events
* past events

Add filtering by:

* Stargazing
* Workshop
* Talk
* Competition
* Outreach
* Astrophotography
* Space Technology
* Other

Each event should have its own detailed page.

Event detail page should support:

* event title
* hero image
* date
* time
* venue
* description
* speakers
* registration
* gallery
* event report
* related projects/blogs

---

# 14. BLOGS PAGE

Create a dedicated astronomy blog platform.

This should take some inspiration from IIT Kanpur's knowledge-oriented approach.

Categories:

* Astronomy
* Astrophysics
* Cosmology
* Space Science
* Observational Astronomy
* Astrophotography
* Space Technology
* Research
* Beginner's Guide
* Club Updates

Blog cards should display:

* cover image
* title
* category
* author
* date
* reading time
* short excerpt

Create an elegant article reading page.

Include:

* large title
* author
* date
* cover image
* article body
* related articles
* share buttons

Design this like a **scientific magazine**, not a generic blog.

---

# 15. GALLERY

Create a visually impressive Gallery.

This is especially important for an astronomy club.

Include:

* astrophotography
* stargazing sessions
* telescope observations
* events
* workshops
* team moments
* campus night sky
* space/astronomy visuals

Use a modern masonry/grid layout.

Clicking an image should open a beautiful lightbox.

Include filters:

* Astrophotography
* Events
* Stargazing
* Projects
* Team

Each image should support:

* title
* photographer
* date
* description/credit

Make the gallery feel like an **astronomical archive**.

---

# 16. TEAM PAGE

Create a dedicated Team page.

Use professional profile cards.

Each member should have:

* portrait
* name
* role
* year/batch
* department
* short bio
* optional social links

Organize into:

### Core Team

President / Secretary / Leads / Coordinators etc.

### Domain / Technical Teams

Research
Projects
Observations
Astrophotography
Design
Web
Publicity
Events etc.

### Alumni

Leave a structure for future alumni profiles.

Do not invent real member names.

Use clearly identifiable placeholder entries until actual AAC team data is added.

Make the system easy to update.

---

# 17. PROJECT PAGE

Create a dedicated Projects archive.

Every project should have:

* title
* project category
* year
* team members
* mentor, if applicable
* description
* objective
* methodology
* technologies/tools
* results
* images
* GitHub link
* report/PDF link
* related blogs

Include filters and search.

Potential project categories:

**Astronomy**
**Astrophysics**
**Cosmology**
**Computational**
**Astrophotography**
**Rocketry**
**Space Technology**

---

# 18. CONTACT PAGE

Create a beautiful Contact Us page.

Include:

**Ashlesha Astronomy Club**
**Visvesvaraya National Institute of Technology, Nagpur**

Email:

**[astronomyclub01vnit@gmail.com](mailto:astronomyclub01vnit@gmail.com)**

Also include:

* Instagram
* X
* Facebook
* other social links when available

Include a contact form:

Name
Email
Subject
Message

CTA:

**Send Message**

Add a map/location section for VNIT Nagpur.

Do not expose private information.

---

# 19. SOCIAL MEDIA

The Instagram page should be prominently linked.

AAC's current public social hub is:

https://linktr.ee/aac_vnit

Instagram:

https://www.instagram.com/aac_vnit/

Use the correct official AAC account.

At the bottom of every page, include:

**Follow AAC**

Instagram
X
Facebook

Do not embed an Instagram feed in a way that depends on unstable scraping.

Instead, provide clean links and optionally a manually managed "Latest from Instagram" section that can later be connected to an official API.

---

# 20. FOOTER

Create a sophisticated footer.

Include:

### AAC

Ashlesha Astronomy Club
VNIT Nagpur

### Explore

About
Events
Projects
Blogs
Gallery
Team

### Connect

Instagram
X
Facebook
Email

### Location

VNIT Nagpur
Maharashtra, India

Include a subtle astronomical element.

Possible footer line:

**Keep looking up.**

or another original AAC line.

Include:

© AAC — Ashlesha Astronomy Club, VNIT Nagpur

---

# 21. MICRO-INTERACTIONS & ANIMATIONS

Use animation carefully.

Desired animations:

* smooth page transitions
* fade/slide reveals while scrolling
* subtle image parallax
* hover effects
* card elevation
* navigation transitions
* theme transition
* animated starfield where appropriate
* subtle cursor interactions on desktop

Avoid:

* excessive spinning planets
* distracting animations
* huge particle effects
* slow page loading

The website should feel **alive but fast**.

---

# 22. ASTRONOMICAL DETAILS

Add subtle astronomy-inspired interactions.

For example:

* constellation line patterns
* subtle star maps
* celestial coordinate inspired UI details
* orbital curves
* astronomical symbols
* subtle grid overlays
* moon phases as decorative elements

But keep these restrained.

The design should reward people who notice details.

---

# 23. TYPOGRAPHY

Use a premium typography system.

Use one strong display font for headings and one highly readable font for body text.

Potential combinations:

* Space Grotesk + Inter
* Sora + Inter
* DM Sans + Space Grotesk
* another comparable modern pairing

Typography should feel:
**scientific + editorial + modern**

not gaming/futuristic.

---

# 24. RESPONSIVENESS

The website MUST be excellent on:

* desktop
* laptop
* tablet
* mobile

Do not simply shrink the desktop website.

Design mobile layouts intentionally.

Pay special attention to:

* hero
* navigation
* APOD
* project cards
* gallery
* team
* event cards

---

# 25. PERFORMANCE

Keep the website fast.

Requirements:

* lazy-load images
* optimize large astronomical photographs
* use responsive images
* avoid unnecessarily large videos
* minimize JavaScript where possible
* avoid excessive third-party libraries
* optimize animations
* use modern image formats where possible

The website should still feel fast on average Indian mobile internet.

---

# 26. ACCESSIBILITY

Implement:

* semantic HTML
* proper heading hierarchy
* alt text
* keyboard navigation
* visible focus states
* accessible buttons
* sufficient contrast
* aria labels where needed
* reduced-motion support

Theme toggle must be accessible.

---

# 27. SEO

Set up proper metadata.

Website title:

**AAC | Ashlesha Astronomy Club — VNIT Nagpur**

Description should communicate:

Astronomy, astrophysics, cosmology, observational astronomy, astrophotography, research and space technology at VNIT Nagpur.

Add:

* Open Graph metadata
* Twitter/X metadata
* favicon
* sitemap-ready structure
* clean URLs

Example URLs:

/
/about
/events
/events/[event]
/projects
/projects/[project]
/blogs
/blogs/[slug]
/gallery
/team
/contact

---

# 28. TECHNICAL STACK

Use a modern production-ready stack.

Preferred:

**React + TypeScript + Tailwind CSS**

Use a component-based architecture.

Use reusable components for:

* Navbar
* Footer
* EventCard
* ProjectCard
* BlogCard
* TeamCard
* GalleryCard
* SectionHeading
* ThemeToggle
* APOD component

Keep content/data separated from UI wherever practical.

This is important because AAC members should be able to update:

* events
* blogs
* projects
* team
* gallery

without rewriting the entire website.

---

# 29. CONTENT MANAGEMENT / FUTURE-PROOFING

Do not build the website in a way where every piece of content is hard-coded into components.

Create structured data models for:

events
projects
blogs
team
gallery

Initially use local JSON/TypeScript data.

Structure the application so it can later be migrated to:

* Supabase
* Sanity
* Contentful
* another CMS

without redesigning the frontend.

---

# 30. NASA API IMPLEMENTATION

Implement NASA APOD properly.

Use:

https://api.nasa.gov/planetary/apod

Initially use:

DEMO_KEY

Create a dedicated APOD service/component.

Handle:

* loading
* success
* API failure
* video APOD
* missing fields
* rate limiting

Do not hardcode the current APOD.

The component should automatically display the appropriate day's image.

Add optional date navigation if it can be implemented cleanly:

Previous Day | Today | Random

But prioritize the main current-day experience.

---

# 31. DESIGN THE HOMEPAGE FLOW

The homepage should roughly flow like this:

1. HERO
   AAC / Ashlesha Astronomy Club
   VNIT Nagpur
   tagline
   CTA

2. INTRODUCTION
   Who we are

3. WHAT WE DO
   Observe / Explore / Build / Research / Create / Connect

4. NASA APOD
   Large immersive astronomical image

5. UPCOMING EVENTS

6. FEATURED PROJECTS

7. ASTROPHOTOGRAPHY / GALLERY PREVIEW

8. FEATURED BLOGS

9. WHY JOIN AAC

10. CALL TO ACTION
    "Explore the universe with us."

11. SOCIAL MEDIA / INSTAGRAM

12. FOOTER

Do not make every section look like a rectangular card. Use varied layouts and visual rhythm.

---

# 32. "WHY JOIN AAC" SECTION

Create a section aimed at students who are discovering AAC.

Possible points:

**Learn**
Understand astronomy from the fundamentals to advanced topics.

**Observe**
Use telescopes and learn how to navigate the night sky.

**Build**
Work on space-tech and rocketry projects.

**Research**
Explore computational astronomy, astrophysics and cosmology.

**Create**
Develop astrophotography and scientific communication skills.

**Meet**
Connect with people who are fascinated by the universe.

Include a CTA:

**Join the Astrons →**

Use "Astrons" as the informal identity for AAC members if appropriate.

---

# 33. ORIGINAL BRANDING

Create a visual identity specifically for AAC.

The existing name is:

**Ashlesha Astronomy Club**

AAC can be represented by:

**AAC**

and

**Ashlesha**

Do not redesign or alter the official VNIT logo without permission.

Leave a clearly marked placeholder for:

* AAC logo
* VNIT logo

so official assets can be inserted later.

Do not invent an official logo.

---

# 34. IMPORTANT CONTENT RULE

Do NOT invent historical facts, awards, projects, events, people, achievements or statistics about AAC.

Where actual information is unavailable:

* use clearly marked placeholder content
* make it easy to replace
* do not present placeholders as facts

Use information from AAC's public presence as the factual basis.

The website should be designed so that I can gradually provide you with:

* actual team members
* projects
* event details
* blog articles
* gallery photographs
* logo
* exact club history
* social links
* additional sections

and you can replace the placeholders without redesigning the site.

---

# 35. IMPORTANT: RESEARCH AAC BEFORE FINALIZING CONTENT

Before generating the final copy/design, use the publicly available AAC presence as contextual inspiration.

AAC's current public links include:

Linktree:
https://linktr.ee/aac_vnit

Instagram:
https://www.instagram.com/aac_vnit/

Website:
https://astrovnit.in/

VNIT's official student-club listing:
https://vnit.ac.in/student-activity-clubs-vnit/

Use the publicly available information to understand AAC's identity, activities and tone.

However:

**Do not scrape or copy Instagram captions verbatim.**

Use the Instagram presence to understand:

* the kind of events AAC conducts
* visual identity
* photography style
* astronomy topics
* activities
* student engagement
* recurring themes
* overall personality of the club

If Instagram data is inaccessible, do NOT fabricate it. Use the public AAC information available elsewhere and leave content placeholders where necessary.

---

# 36. FINAL DESIGN DIRECTION

The final website should feel like:

**"What if VNIT's astronomy club had the website of a serious student research organization?"**

It should be impressive enough that:

* a VNIT fresher wants to join AAC,
* an astronomy enthusiast takes the club seriously,
* another college's astronomy club sees it as a benchmark,
* a professor/researcher can comfortably browse it,
* and an AAC member is proud to share the website.

It should balance:

**Wonder + Science + Engineering + Research + Community**

Do not make it overly corporate.

Do not make it overly academic.

Do not make it childish.

Make it feel like **students genuinely exploring the universe.**

---

# 37. BUILD QUALITY

Before considering the website complete:

* check every navigation link
* check mobile responsiveness
* check dark/light mode
* check APOD API
* check loading states
* check broken-image states
* check forms
* check hover states
* check accessibility
* check SEO metadata
* check page transitions
* check console for errors
* check performance
* check that placeholder content is clearly identifiable
* ensure no fake AAC facts have been introduced

Build the website as a **real production-quality website**, not merely a visual mockup.

Start by generating the complete frontend and all major pages/components.

Prioritize the **homepage and visual identity first**, but implement the architecture for all pages from the beginning.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2a272c27-f5a6-4990-b7e9-01c1c8a7a445).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
