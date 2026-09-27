import MainContent from "@/imports/MainContent/index";
import CurioDesign from "@/imports/CurioMobile/index";
import { CaseStudy } from "./CaseStudyLayout";

export default function CurioPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <CaseStudy
      onNavigate={onNavigate}
      desktop={{
        artboard: <MainContent />,
        reveal: { rootSelectors: ['[data-name="Main content"]'], skip: [0], offset: 40 },
      }}
      mobile={{ artboard: <CurioDesign /> }}
    />
  );
}
