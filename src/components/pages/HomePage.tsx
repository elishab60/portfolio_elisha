import React from "react";
import { DATA } from "../../data/data";
import {Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import BlurFadeText from "../magicui/blur-fade-text";
import BlurFade from "../magicui/blur-fade";
import Markdown from "react-markdown";
import {ResumeCard} from "../resume-card";
import {DockDemo} from "../docknav";
import {Dam} from "lucide-react";
import {Badge} from "../ui/badge";
import { AnimatedSubscribeButtonDemo } from "../downloadbutton";
import Footer from "../ui/footer";


const HomePage: React.FC = () => {
    const BLUR_FADE_DELAY = 0.2;

    return (

        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <br/>
            <br/>
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="flex justify-between gap-2">
                        <div className="flex flex-1 flex-col space-y-1.5">

                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                                yOffset={8}
                                text={`Bonjour, je suis  ${DATA.name.split(" ")[0]} 👋`}
                            />
                            <br/>
                            <BlurFadeText
                                className="max-w-[600px] md:text-xl"
                                delay={BLUR_FADE_DELAY}
                                text={DATA.description}
                            />
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <Avatar className="size-28 border">
                                <AvatarImage alt={DATA.name} src={DATA.avatarUrl}/>
                                <AvatarFallback>{DATA.initials}</AvatarFallback>
                            </Avatar>
                        </BlurFade>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <h2 className="text-xl font-bold">À propos</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <Markdown
                            className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                            {DATA.summary}
                        </Markdown>
                    </BlurFade>
                </div>
            </section>
            <section id="Formation">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 5}>
                            <h2 className="text-xl font-bold">Formation</h2>
                            <br/>
                        </BlurFade>
                        {DATA.education.map((education, id) => (
                            <BlurFade
                                key={education.school}
                                delay={BLUR_FADE_DELAY * 5}
                            >
                                <ResumeCard
                                    key={education.school}
                                    href={education.href}
                                    logoUrl={education.logoUrl}
                                    altText={education.school}
                                    title={education.school}
                                    subtitle={education.degree}
                                    period={`${education.start} - ${education.end}`}
                                    description={education.description}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="work">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 6}>
                            <h2 className="text-xl font-bold">Expériences</h2>
                            <br/>
                        </BlurFade>

                        {DATA.work.map((work, id) => (
                            <BlurFade
                                key={work.company}
                                delay={BLUR_FADE_DELAY * 7}
                            >

                                <ResumeCard
                                    key={work.company}
                                    logoUrl={work.logoUrl}
                                    altText={work.company}
                                    title={work.company}
                                    subtitle={work.title}
                                    href={work.href}
                                    badges={work.badges}
                                    period={`${work.start} - ${work.end ?? "Present"}`}
                                    description={work.description}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
                <DockDemo/>
            </section>
            <section id="skills">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="flex min-h-0 flex-col gap-y-3">
                        <BlurFade delay={BLUR_FADE_DELAY * 8}>
                            <h2 className="text-xl font-bold">Compétences</h2>
                            <br/>
                        </BlurFade>
                        <div className="space-y-6">
                            {/* Hard Skills */}
                            <div>
                                <h3 className="text-lg font-semibold">Hard Skills</h3>
                                <br/>
                                <div className="flex flex-wrap gap-1">
                                    {DATA.skills.hardSkills.map((skill, id) => (
                                        <BlurFade key={skill} delay={BLUR_FADE_DELAY * 9}>
                                            <Badge key={skill}>{skill}</Badge>
                                        </BlurFade>
                                    ))}
                                </div>
                            </div>

                            {/* Soft Skills */}
                            <div>
                                <h3 className="text-lg font-semibold">Soft Skills et Langues</h3>
                                <br/>
                                <div className="flex flex-wrap gap-1">
                                    {DATA.skills.softSkills.map((skill, id) => (
                                        <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10}>
                                            <Badge key={skill}>{skill}</Badge>
                                        </BlurFade>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="download-cv">
                <div
                    className="flex flex-col justify-center items-center mx-auto w-full max-w-2xl space-y-6 text-center py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <h2 className="text-2xl font-bold">
                            Intéressé(e) par mon profil ?
                        </h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 12}>
                        <p className="text-xl text-muted-foreground">
                            Vous pouvez télécharger mon CV pour le retrouver plus tard.
                        </p>
                    </BlurFade>
                    <br/>
                    <BlurFade delay={BLUR_FADE_DELAY * 13}>
                        <AnimatedSubscribeButtonDemo/>
                    </BlurFade>

                </div>
            </section>
            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <div className="space-y-6">
                            {/* Titre "Contact" plus grand */}
                            <h2 className="inline-block rounded-lg bg-foreground text-background px-6 py-2 text-lg sm:text-2xl">
                                Contact
                            </h2>
                            {/* Phrase principale */}
                            <p className="text-4xl font-bold tracking-tighter sm:text-5xl">
                                Si vous êtes arrivé(e) jusqu'ici,
                            </p>
                            {/* Texte secondaire avec les informations de contact */}
                            <p className="mx-auto max-w-[600px] text-muted-foreground text-lg sm:text-xl lg:text-lg xl:text-xl">
                                N'hésitez pas à m'envoyer un mail à l'adresse suivante :{" "}
                                <a
                                    href="mailto:elishabajemon60@icloud.com"
                                    className="text-blue-500 hover:underline"
                                >
                                    elishabajemon60@icloud.com
                                </a>{" "}
                                ou m'appeler directement sur WhatsApp{" "}
                                <a
                                    href="https://wa.me/33769500066"
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    0769500066
                                </a>.
                                Je serais ravi de faire votre connaissance et de discuter de potentielles opportunités
                                professionnelles avec vous.
                                <br/>
                                <br/>
                                Cordialement, Elisha BAJEMON
                                <br/> <br/> <br/> <br/>
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>
            <Footer/>
        </main>
    );
};

export default HomePage;