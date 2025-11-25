import Link from "next/link";
import { ArrowRight, Sparkles, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  {
    label: "Community members",
    value: "2.4K",
    detail: "Designers, devs, organizers across 38 cities.",
  },
  {
    label: "Scholarships issued",
    value: "310",
    detail: "Access grants for parents, students, and newcomers.",
  },
  {
    label: "Projects shipped",
    value: "186",
    detail: "Open prototypes, civic tools, and care tech.",
  },
];

const events = [
  {
    title: "Night Shift Hack 08",
    date: "Dec 06 · Hybrid",
    location: "NYC studio + worldwide",
    focus: "Care-tech for resilient cities",
    status: "Apps open · priority for first-time hackers",
  },
  {
    title: "Care Lab Residency",
    date: "Jan 14 · Remote pods",
    location: "Follow-the-sun collaboration",
    focus: "AI copilots for community health",
    status: "Mentor-matched · Accessibility kits shipped",
  },
  {
    title: "Inclusion Audit Live",
    date: "Weekly · Stream",
    location: "Virtual",
    focus: "Peer code walk-throughs & allyship coaching",
    status: "Free drop-in · Captions + multilingual relay",
  },
];

const values = [
  {
    title: "Access-first spaces",
    description:
      "Captioning, sensory maps, childcare micro-grants, and quiet lounges come standard at every event.",
  },
  {
    title: "Co-creation over competition",
    description:
      "Small circles pair emerging technologists with experienced stewards focused on learning and care.",
  },
  {
    title: "Global-local bridge",
    description:
      "Pop-up studios link local organizers with 24/7 virtual rooms so no timezone is left out.",
  },
];

const resourceHighlights = [
  {
    title: "Mentor Circles",
    body: "Weekly coaching cohorts with wellness check-ins and community agreements everyone co-signs.",
    action: "Reserve a seat",
  },
  {
    title: "Build Commons",
    body: "Shared figma kits, inclusive prompt libraries, and hardware kits shipped on request.",
    action: "Explore kits",
  },
];

const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Values", href: "#values" },
  { label: "Resources", href: "#resources" },
  { label: "Join", href: "#join" },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-dvh overflow-hidden bg-background text-foreground">
      <div className="ambient-glow animate-float-slow" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-y-0 right-[-10%] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(41,171,226,0.35)_0%,_transparent_65%)] blur-3xl"
        aria-hidden="true"
      />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 sm:px-8 lg:gap-24 lg:py-16">
        <Header />

        <Hero />

        <section id="events" className="space-y-8 animate-fade-up animate-delay-200">
          <SectionHeading
            kicker="Upcoming energy"
            title="Hackathons and gatherings designed for every body"
            description="High-trust facilitation, flexible pacing, and remote kits ensure every contributor can arrive as they are."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.title} className="surface-glass h-full border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {event.date} · {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>{event.focus}</p>
                  <p className="text-primary">{event.status}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="values" className="space-y-8 animate-fade-up animate-delay-400">
          <SectionHeading
            kicker="Community agreements"
            title="Values written with the community, not for it"
            description="Our moderators, parents, night owls, and first-time coders co-create structures that center care."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-white/5 bg-black/30 p-1 shadow-[0_0_45px_rgba(56,189,248,0.15)]"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-white">{value.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="resources" className="space-y-8 animate-fade-up animate-delay-600">
          <SectionHeading
            kicker="Care resources"
            title="Built-in support so every contributor feels welcome"
            description="We cover basics like transit and meals, but we also budget time for rest, processing, and accountability."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {resourceHighlights.map((resource) => (
              <Card key={resource.title} className="surface-glass border-white/10">
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-3 text-sm uppercase tracking-[0.45em] text-primary">
                    <Sparkles className="size-4 text-secondary" />
                    Spotlight program
                  </div>
                  <CardTitle className="text-2xl text-white">{resource.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {resource.body}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-fit">
                    {resource.action}
                    <ArrowRight className="size-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="join"
          className="surface-glass relative overflow-hidden rounded-3xl border border-white/10 p-8 shadow-[0_0_80px_rgba(16,185,129,0.2)]"
        >
          <div
            className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle,_rgba(99,211,255,0.35)_0%,_transparent_70%)] md:block"
            aria-hidden="true"
          />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary">
                Focuzdrvn Circles
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Join a cohort, host a workshop, or simply listen in.
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Sign-ups stay open year-round with rolling onboarding, interpreter support, and mutual-aid stipends for
                caretakers. Pick a lane that fits your energy this season.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#events">
                    Claim a hack slot
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white">
                  <Link href="mailto:team@focuzdrvn.com">Partner with us</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {resourceHighlights.map((resource) => (
                <div
                  key={`${resource.title}-summary`}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-muted-foreground"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                    {resource.title}
                  </p>
                  <p className="text-base text-white">{resource.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="uppercase tracking-[0.35em]">Focuzdrvn</p>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Users className="size-4 text-primary" />
              Inclusive hackathons since 2017
            </span>
            <span>Scholarship fund powered by the community.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="surface-glass flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 px-6 py-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 text-lg font-black tracking-[0.3em]">
          FD
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-muted-foreground">community</p>
          <p className="text-lg font-semibold text-white">Focuzdrvn</p>
        </div>
      </div>

      <NavigationMenu viewport={false} className="hidden flex-1 justify-center md:flex">
        <NavigationMenuList className="gap-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.label}>
              <NavigationMenuLink
                href={link.href}
                className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button asChild size="lg" className="rounded-full">
        <Link href="#join">
          Join us
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-muted-foreground">
          Focused energy · Infinite welcome
        </p>
        <h1 className="text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
          Focuzdrvn is the home for hackers who lead with care, curiosity, and collective joy.
        </h1>
        <p className="text-lg text-muted-foreground">
          We craft dark, cinematic rooms where late-night builders, early parents, and curious first-timers share the
          same table. Pace yourself, breathe, and build something that lifts your block.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link href="#events">
              Upcoming hack nights
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white">
            <Link href="#values">See how we host</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">{stat.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <Card className="surface-glass border-white/10">
        <CardHeader className="space-y-4">
          <CardTitle className="text-2xl text-white">Next: Night Shift Hack 08</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            48 hours of hybrid hacking with tactile prototyping corners, virtual interpreters, and wellness hosts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-sm">
          <dl className="grid gap-4">
            <div>
              <dt className="text-muted-foreground">Schedule</dt>
              <dd className="text-white">Dec 06 · 7:00 PM EST kickoff</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Focus track</dt>
              <dd className="text-white">Community health + mutual aid tooling</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Accessibility</dt>
              <dd className="text-white">
                Mobility concierge, captioning, prayer + reflection rooms, and hardware lending lockers.
              </dd>
            </div>
          </dl>
          <Button size="lg" variant="secondary" className="w-full">
            Apply now
            <ArrowRight className="size-4" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.45em] text-secondary">{kicker}</p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="max-w-3xl text-base text-muted-foreground">{description}</p>
    </div>
  );
}
