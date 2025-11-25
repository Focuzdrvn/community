import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const team = [
    {
        name: "Raaj Patkar",
        role: "ML and Distributed Systems",
        avatar: "/avatars/raaj.png",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        name: "Daivik Pawar",
        role: "Quant Finance",
        avatar: "/avatars/daivik.png",
        gradient: "from-emerald-500 to-green-500",
    },
    {
        name: "Saurav Bherea",
        role: "Video Editor",
        avatar: "/avatars/saurav.png",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        name: "Krishna Mundhara",
        role: "Stock Trader and Developer",
        avatar: "/avatars/krishna.png",
        gradient: "from-orange-500 to-red-500",
    },
];

export function TeamSection() {
    return (
        <section id="team" className="space-y-8 animate-fade-up animate-delay-600">
            <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.45em] text-secondary">The Crew</p>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">Meet the builders</h2>
                <p className="max-w-3xl text-base text-muted-foreground">
                    The minds behind the mission, driving innovation and community.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member) => (
                    <div key={member.name} className="group relative h-80 perspective-1000">
                        <div className="absolute inset-0 transition-all duration-500 preserve-3d group-hover:rotate-y-180">
                            {/* Front of Card */}
                            <Card className="absolute inset-0 flex flex-col items-center justify-center gap-4 border-white/10 bg-black/40 p-6 text-center shadow-lg backdrop-blur-sm backface-hidden">
                                <div className={`relative h-32 w-32 overflow-hidden rounded-full border-2 border-transparent bg-gradient-to-br ${member.gradient} p-1`}>
                                    <div className="h-full w-full overflow-hidden rounded-full bg-black">
                                        <Image
                                            src={member.avatar}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                                    <p className="text-sm text-muted-foreground">{member.role}</p>
                                </div>
                            </Card>

                            {/* Back of Card */}
                            <Card className={`absolute inset-0 flex flex-col items-center justify-center gap-4 border-white/10 bg-gradient-to-br ${member.gradient} p-6 text-center shadow-lg rotate-y-180 backface-hidden`}>
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-sm font-medium text-white/90">{member.role}</p>
                                <div className="mt-4 h-1 w-12 rounded-full bg-white/50" />
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
