import CaseStudyDesktop from "@/imports/CaseStudyDesktop-1/index";
import MobileAlmaPage from "./MobileAlmaPage";
import { CaseStudy } from "./CaseStudyLayout";

export default function AlmaPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <CaseStudy
      onNavigate={onNavigate}
      desktop={{
        artboard: <CaseStudyDesktop />,
        reveal: { rootSelectors: ['[data-name="Main content"]'], skip: [0, 1, 2], offset: 40 },
      }}
      mobile={{ artboard: <MobileAlmaPage /> }}
    />
  );
}
