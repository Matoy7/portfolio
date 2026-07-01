import svgPaths from "./svg-z1fzy8b8m6";
import imgImageWithFallback from "./dec8dd9c600d936d8dc18f074452f6e0171a0b9b.png";

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[40.548px] not-italic relative shrink-0 text-[27.032px] text-black text-center whitespace-nowrap">Yotam Eliraz</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[27.032px] not-italic relative shrink-0 text-[20.274px] text-black text-center whitespace-nowrap">Case Studies</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1a1a2e] relative rounded-[27486380px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[27.032px] py-[13.516px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[27.032px] not-italic relative shrink-0 text-[20.274px] text-center text-white whitespace-nowrap">{`Let's Talk`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[27.032px] items-center relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[108.129px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[45.054px] py-[27.032px] relative size-full">
          <Button />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute flex h-[382.528px] items-center justify-center left-0 top-[23.57px] w-[408.408px]">
      <div className="-rotate-2 flex-none">
        <div className="h-[368.941px] relative w-[395.773px]" data-name="ImageWithFallback">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallback} />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[316.38px] left-0 top-0 w-[372.212px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[22.333px] not-italic relative shrink-0 text-[19.851px] text-black tracking-[1.2407px] whitespace-nowrap">ABOUT ME</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[109.182px] relative shrink-0 w-[743.07px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[19.851px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[89.331px] not-italic relative shrink-0 text-[59.554px] text-black whitespace-nowrap">{`Hi, I'm Yotam`}</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-[727px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[29.777px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[33.747px] not-italic relative shrink-0 text-[19.851px] text-black w-[610px] whitespace-pre-wrap">
          I design digital experiences that are intuitive, meaningful, and user-centered. With a background in computer science and over a decade in software development, I bring a unique blend of technical understanding and creative thinking to every project.
          <br aria-hidden />
          <br aria-hidden />
          {`I care deeply about solving real problems and creating products that make people's lives easier and better.`}
          <br aria-hidden />
          <br aria-hidden />
          {`When I'm not designing, you'll find me traveling, exploring new places, and getting inspired by the world around me.`}
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-[-0.14px] content-stretch flex flex-col items-start left-[451.4px] top-[0.49px] w-[604px]" data-name="Container">
      <Container5 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[479.349px] relative shrink-0 w-[1146.799px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-[1687.3592529296875px] relative shrink-0" data-name="AboutPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[49.628px] py-[79.405px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[31.018px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0176 31.0176">
        <g id="Icon">
          <path d={svgPaths.p345eae00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06784" />
          <path d={svgPaths.p1ae36e00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06784" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f5f1ec] relative rounded-[12.407px] shrink-0 size-[49.628px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[33.499px] not-italic relative shrink-0 text-[24.814px] text-black whitespace-nowrap">Education</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[19.851px] items-center relative shrink-0 w-[1194.799px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[27.916px] not-italic relative shrink-0 text-[22.333px] text-black whitespace-nowrap">Professional Certificate, UI/UX Design</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[27.916px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">Graphitech College</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4.963px] items-start relative self-stretch shrink-0 w-[886.992px]">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[143.922px] items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f1ec] border-b-[0.902px] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[24.194px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">2025 - 2026</p>
      <Frame3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[27.916px] not-italic relative shrink-0 text-[22.333px] text-black whitespace-nowrap">B.Sc. in Computer Science</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[27.916px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">Tel Aviv University, Israel</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4.963px] items-start relative self-stretch shrink-0 w-[886.992px]">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[143.922px] items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f1ec] border-b-[0.902px] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[24.194px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">2021 – 2023</p>
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[29.777px] items-start justify-center px-[69.479px] relative shrink-0 w-[1287.872px]">
      <Container9 />
      <Container12 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24.814px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8141 24.8141">
        <g id="Icon">
          <path d={svgPaths.p2bde4380} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06784" />
          <path d={svgPaths.p1d032e00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06784" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f5f1ec] relative rounded-[12.407px] shrink-0 size-[49.628px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[33.499px] not-italic relative shrink-0 text-[24.814px] text-black whitespace-nowrap">Work Experience</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[19.851px] items-center relative shrink-0 w-[1194.799px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[27.916px] not-italic relative shrink-0 text-[22.333px] text-black whitespace-nowrap" dir="auto">
        Senior Software Developer
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[27.916px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">XM Cyber</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4.963px] items-start relative shrink-0 w-full">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[886.992px]" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f1ec] border-b-[0.902px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[143.922px] items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[24.194px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">2024 – 2025</p>
        <Container20 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[27.916px] not-italic relative shrink-0 text-[22.333px] text-black whitespace-nowrap">Senior Software Developer</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[27.916px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">Solitics</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4.963px] items-start relative shrink-0 w-full">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame8 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[886.992px]" data-name="Container">
      <Frame7 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f1ec] border-b-[0.902px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[143.922px] items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[24.194px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">2021 – 2024</p>
        <Container24 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[27.916px] not-italic relative shrink-0 text-[22.333px] text-black whitespace-nowrap">Software Developer</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[27.916px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">Varonis</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4.963px] items-start relative shrink-0 w-full">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame10 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[886.992px]" data-name="Container">
      <Frame9 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f1ec] border-b-[0.902px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[143.922px] items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[24.194px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">2019 – 2021</p>
        <Container28 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[27.916px] not-italic relative shrink-0 text-[22.333px] text-black whitespace-nowrap">Software Developer</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[27.916px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">Imperva</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4.963px] items-start relative shrink-0 w-full">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame12 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[886.992px]" data-name="Container">
      <Frame11 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f1ec] border-b-[0.902px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[143.922px] items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[24.194px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">2018 – 2019</p>
        <Container32 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[27.916px] not-italic relative shrink-0 text-[22.333px] text-black whitespace-nowrap">Software Developer</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[27.916px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">HP</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4.963px] items-start relative shrink-0 w-full">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame14 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[886.992px]" data-name="Container">
      <Frame13 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f1ec] border-b-[0.902px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[143.922px] items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[24.194px] not-italic relative shrink-0 text-[19.851px] text-black whitespace-nowrap">2016 – 2018</p>
        <Container36 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[29.777px] items-start pl-[69.479px] pt-[39.703px] relative shrink-0 w-[1194.799px]" data-name="Container">
      <Container19 />
      <Container23 />
      <Container27 />
      <Container31 />
      <Container35 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container15 />
      <Container18 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[29.777px] items-start relative size-full">
        <Container6 />
        <Frame2 />
        <Frame />
      </div>
    </div>
  );
}

function AboutPage1() {
  return (
    <div className="relative shrink-0 w-full" data-name="AboutPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[49.628px] px-[49.628px] relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f5f1ec] min-h-[724.5719604492188px] relative shrink-0 w-full" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <AboutPage />
        <AboutPage1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[22.333px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3327 22.3327">
        <g id="Icon">
          <path d={svgPaths.p3b5ee800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[26.055px] not-italic relative shrink-0 text-[17.37px] text-black whitespace-nowrap">050-5795099</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.926px] items-center relative size-full">
        <Icon2 />
        <Text />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[22.333px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3327 22.3327">
        <g id="Icon">
          <path d={svgPaths.p1f0cae00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[26.055px] not-italic relative shrink-0 text-[17.37px] text-black whitespace-nowrap">050-5795099</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.926px] items-center relative size-full">
        <Icon3 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[22.333px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3327 22.3327">
        <g id="Icon">
          <path d={svgPaths.p14e70180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
          <path d={svgPaths.p2854ba00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[26.055px] not-italic relative shrink-0 text-[17.37px] text-black whitespace-nowrap">yotam.eliraz@gmail.com</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.926px] items-center relative size-full">
        <Icon4 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[22.333px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3327 22.3327">
        <g id="Icon">
          <path d={svgPaths.p2d2cf100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
          <path d={svgPaths.p185ce00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
          <path d={svgPaths.p199cd3c0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[26.055px] not-italic relative shrink-0 text-[17.37px] text-black whitespace-nowrap">linkedin.com/in/yotameliraz</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.926px] items-center relative size-full">
        <Icon5 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[22.333px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3327 22.3327">
        <g clipPath="url(#clip0_3_654)" id="Icon">
          <path d={svgPaths.p12387680} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_654">
            <rect fill="white" height="22.3327" width="22.3327" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[26.055px] not-italic relative shrink-0 text-[17.37px] text-black whitespace-nowrap">behance</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.926px] items-center relative size-full">
        <Icon6 />
        <Text4 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[39.703px] items-center justify-center relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f5f1ec] h-[105.46px] max-w-[1687.3592529296875px] relative shrink-0 w-[1294.056px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[49.628px] py-[39.703px] relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-[1294.056px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[24px] relative size-full">
        <App />
        <Container39 />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-[#f5f1ec] content-stretch flex flex-col h-[1595px] items-center px-[24px] relative shrink-0 w-[1146px]" data-name="About">
      <Body />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#f5f1ec] content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <Container />
      <About />
    </div>
  );
}