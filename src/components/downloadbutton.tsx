import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button";

export function AnimatedSubscribeButtonDemo() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/CV_ELISHA_BAJEMON_APPRENTI_INGÉNIEUR_DATA_IA.pdf";
        link.download = "CV_ELISHA_BAJEMON_APPRENTI_INGÉNIEUR_DATA_IA.pdf";
        link.click();
    };

    return (
        <AnimatedSubscribeButton
            buttonColor="#000000"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            onClick={handleDownload}  // Fournir la fonction handleDownload
            initialText={
                <span className="group inline-flex items-center">
                    Télécharger mon CV{" "}
                    <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            }
            changeText={
                <span className="group inline-flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4" />
                    CV téléchargé{" "}
                </span>
            }
        />
    );
}