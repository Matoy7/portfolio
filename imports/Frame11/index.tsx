import svgPaths from "./svg-o0xaf2ie0h";
import imgImageWithFallback from "./376b4ff69c76e4c7548a2d9016b80b772b65dbee.png";
import imgContainer from "./0ff53a7574fe5ddd7893ea066c3a9fa41eb680ff.png";
import imgContainer1 from "./257c6ffc3188a1eaa8ed81ab7cbbf0f290627b4f.png";
import imgContainer2 from "./9dce77c3753db7b26f478f524ee1a15c07c28a59.png";

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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[20.274px] not-italic relative shrink-0 text-[#4793d6] text-[20.274px] tracking-[1.1263px] whitespace-nowrap">PRODUCT DESIGNER</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[551.908px]" data-name="Heading 1">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#0e1d2b] text-[54.064px] w-[530.508px]" dir="auto">
        <span className="leading-[normal]">{`Product `}</span>
        <span className="leading-[normal] text-[#4793d6]">Designer</span>
        <span className="leading-[normal]">{` with an engineering background`}</span>
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[540.644775390625px] relative shrink-0 w-[506.24px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal h-[75px] leading-[normal] not-italic relative shrink-0 text-[#0e1d2b] text-[20.274px] w-[506.854px]" dir="auto">
        Product Designer with 12 years of engineering experience, creating intuitive digital products through user centered design.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[18.021px] items-start relative shrink-0">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[27.032px] items-start relative shrink-0">
      <Container4 />
      <Frame />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0e1d2b] content-stretch flex h-[63.075px] items-center px-[36.043px] py-[18.021px] relative rounded-[16.895px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[27.032px] not-italic relative shrink-0 text-[18.021px] text-center text-white whitespace-nowrap" dir="auto">
        About me
      </p>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button:margin">
      <Button3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[36.043px] items-start relative size-full">
        <Frame1 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[508.634px] items-start justify-center relative shrink-0 w-[506.24px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[399.199px] relative rounded-[21.214px] shrink-0 w-[498.03px]" data-name="ImageWithFallback">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21.214px]">
        <img alt="" className="absolute h-full left-[16.49%] max-w-none top-0 w-[67.02%]" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container3 />
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[551.908px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[18.021px] px-[45.054px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-medium leading-[33.641px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">Selected Case Studies</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#d2684a] content-stretch flex items-center justify-center left-0 px-[8.41px] py-[2.803px] rounded-[5.607px] top-[1.27px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[11.564px] not-italic relative shrink-0 text-[9.812px] text-white tracking-[0.3504px] whitespace-nowrap">MOBILE APP</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[26.856px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[33.641px] not-italic relative shrink-0 text-[22.428px] text-white whitespace-nowrap">Alma – Pregnancy App</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col h-[33.641px] items-start pb-[11.214px] pt-[5.607px] relative shrink-0 w-[618.796px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[16.821px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">AI powered pregnancy food safety assistant.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container10 />
        <Frame3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame4 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[17103236px] self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.51px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[17103236px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11.724px] py-[4.715px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[12.615px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">AI</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[17103236px] self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.51px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[17103236px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11.724px] py-[4.715px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[12.615px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">HEALTH</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[17103236px] self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.51px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[17103236px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11.724px] py-[4.715px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[12.615px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">MOBILE</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[22.43px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Text />
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[28.034px] relative size-full">
        <Container9 />
        <Container12 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[200px] relative rounded-[16.821px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[16.821px]">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[16.821px] size-full" src={imgContainer} />
        <div className="absolute bg-clip-padding bg-gradient-to-r border-0 border-[transparent] border-solid from-[rgba(0,0,0,0.7)] inset-0 rounded-[16.821px] to-[rgba(102,102,102,0)]" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(88,86,214,0.9)] content-stretch flex items-center justify-center left-0 px-[8.41px] py-[2.803px] rounded-[5.607px] top-[1.27px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[11.564px] not-italic relative shrink-0 text-[9.812px] text-white tracking-[0.3504px] whitespace-nowrap">DASHBOARD</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[26.856px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[33.641px] not-italic relative shrink-0 text-[22.428px] text-white whitespace-nowrap">Pulse – Gaming Analytics</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[33.641px] relative shrink-0 w-[618.796px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[11.214px] pt-[5.607px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[16.821px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">A real time dashboard for game product managers.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[17103236px] self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.51px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[17103236px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11.724px] py-[4.715px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[12.615px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">DATA</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[17103236px] self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.51px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[17103236px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11.724px] py-[4.715px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[12.615px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">DASHBOARD</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[17103236px] self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.51px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[17103236px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11.724px] py-[4.715px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[12.615px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">SAAS</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[22.43px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Text3 />
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[28.034px] relative size-full">
        <Container15 />
        <Container18 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[200px] relative rounded-[16.821px] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[16.821px] size-full" src={imgContainer1} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#fec66e] content-stretch flex items-center justify-center left-0 px-[8.41px] py-[2.803px] rounded-[5.607px] top-[1.27px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[11.564px] not-italic relative shrink-0 text-[#1f2937] text-[9.812px] tracking-[0.3504px] whitespace-nowrap" dir="auto">
        E-COMMERCE
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[26.856px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-bold leading-[33.641px] not-italic relative shrink-0 text-[22.428px] text-white whitespace-nowrap">Curio – Online Toys Store</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col h-[33.641px] items-start pb-[11.214px] pt-[5.607px] relative shrink-0 w-[618.796px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[16.821px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">An online marketplace for educational toys for kids.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Heading4 />
      <Paragraph3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container22 />
        <Frame7 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[17103236px] self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.51px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[17103236px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11.724px] py-[4.715px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[12.615px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">AI</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[17103236px] self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.51px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[17103236px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11.724px] py-[4.715px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[12.615px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">HEALTH</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[17103236px] self-stretch shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.51px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[17103236px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[11.724px] py-[4.715px] relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-semibold leading-[12.615px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">MOBILE</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[22.43px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Text6 />
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[28.034px] relative size-full">
        <Container21 />
        <Container24 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[200px] relative rounded-[16.821px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[16.821px]">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[16.821px] size-full" src={imgContainer2} />
        <div className="absolute bg-clip-padding bg-gradient-to-r border-0 border-[transparent] border-solid from-[rgba(0,0,0,0.7)] inset-0 rounded-[16.821px] to-[rgba(102,102,102,0)]" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[703.377px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[29.868px] items-start py-[16.821px] relative size-full">
        <Container7 />
        <Container13 />
        <Container19 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-[1014px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[22.428px] pt-[5.607px] px-[28.034px] relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20.274px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2742 20.2742">
        <g id="Icon">
          <path d={svgPaths.p2be78800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[23.653px] not-italic relative shrink-0 text-[15.769px] text-black whitespace-nowrap">050-5795099</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.011px] items-center relative size-full">
        <Icon />
        <Text9 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20.274px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2742 20.2742">
        <g id="Icon">
          <path d={svgPaths.p3ec1fd00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[23.653px] not-italic relative shrink-0 text-[15.769px] text-black whitespace-nowrap">050-5795099</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.011px] items-center relative size-full">
        <Icon1 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20.274px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2742 20.2742">
        <g id="Icon">
          <path d={svgPaths.p2c708800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
          <path d={svgPaths.p4272980} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[23.653px] not-italic relative shrink-0 text-[15.769px] text-black whitespace-nowrap">yotam.eliraz@gmail.com</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.011px] items-center relative size-full">
        <Icon2 />
        <Text11 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20.274px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2742 20.2742">
        <g id="Icon">
          <path d={svgPaths.p31aa100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
          <path d={svgPaths.p271a7a80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
          <path d={svgPaths.p1833ee00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[23.653px] not-italic relative shrink-0 text-[15.769px] text-black whitespace-nowrap">linkedin.com/in/yotameliraz</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.011px] items-center relative size-full">
        <Icon3 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20.274px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2742 20.2742">
        <g clipPath="url(#clip0_1_365)" id="Icon">
          <path d={svgPaths.p12b43500} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_365">
            <rect fill="white" height="20.2742" width="20.2742" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter',sans-serif] font-normal leading-[23.653px] not-italic relative shrink-0 text-[15.769px] text-black whitespace-nowrap">behance</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.011px] items-center relative size-full">
        <Icon4 />
        <Text13 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36.043px] items-center justify-center relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[95.739px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[45.054px] py-[36.043px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f5f1ec] min-h-[657.784423828125px] relative shrink-0 w-[1145.25px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center min-h-[inherit] relative size-full">
        <Section />
        <Section1 />
        <Container25 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <App />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Main">
      <Body />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <Container />
      <Main />
    </div>
  );
}