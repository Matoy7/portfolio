import Desktop1 from "@/imports/Desktop-1/index";
import MobileComponent from "@/imports/Mobile/index";
import { CaseStudy } from "./CaseStudyLayout";

export default function PulsePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <CaseStudy
      onNavigate={onNavigate}
      desktop={{
        artboard: <Desktop1 />,
        reveal: {
          rootSelectors: ['[data-name="Main content"]', '[data-name="Desktop"] > div'],
          skip: [0],
          offset: 40,
        },
      }}
      mobile={{
        artboard: <MobileComponent />,
        reveal: { rootSelectors: ['[data-name="Mobile"]', ":scope > *"], skip: [0], offset: 32 },
      }}
    />
  );
}
