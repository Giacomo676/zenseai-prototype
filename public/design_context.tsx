const assetPathPrefix = "./assets";
const imgZenseAiLogo = `${assetPathPrefix}/d6659.png`;
const imgBharathKumarNunfHyhXezsUnsplash1 = `${assetPathPrefix}/46267.png`;
const imgZensarLogo = `${assetPathPrefix}/11813.svg`;
const imgZenseAi = `${assetPathPrefix}/2d05a.svg`;

export default function LoginScreen() {
  return (
    <div className="bg-white content-stretch flex items-start justify-between relative size-full" data-node-id="1:17341" data-name="Login Screen">
      <div className="content-stretch flex flex-col h-full items-center justify-center px-[212px] relative shrink-0 w-[960px]" data-node-id="1:17342" data-name="Login">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:17343" data-name="Centre">
          <div className="bg-white content-stretch flex gap-[16px] h-[48px] items-center overflow-clip px-[24px] py-[16px] shrink-0 sticky top-0 w-[536px]" data-node-id="1:17344" data-name="Header">
            <div className="h-[16px] relative shrink-0 w-[96px]" data-node-id="1:17347" data-name="Zensar-Logo">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgZensarLogo} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] h-[1032px] items-center justify-center relative shrink-0" data-node-id="1:17354" data-name="Log in centre">
            <div className="bg-white content-stretch flex gap-[16px] h-[72px] items-center overflow-clip px-[72px] py-[16px] shrink-0 sticky top-0 w-[536px]" data-node-id="1:17355" data-name="Header">
              <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="1:17356" data-name="Logo">
                <div className="relative rounded-[19px] shrink-0 size-[40px]" data-node-id="1:17357" data-name="ZenseAI-Logo">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[19px]">
                    <img alt="" className="absolute h-[151.82%] left-[-20.18%] max-w-none top-[-24.63%] w-[140.35%]" src={imgZenseAiLogo} />
                  </div>
                </div>
              </div>
              <div className="h-[24px] relative shrink-0 w-[132.001px]" data-node-id="1:17358" data-name="ZenseAI">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgZenseAi} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-center px-[72px] relative shrink-0 w-[536px]" data-node-id="1:17367" data-name="Log in">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start justify-center not-italic relative shrink-0 w-full" data-node-id="1:17368" data-name="H1 and description">
                <p className="bg-clip-text font-['Inter:Regular'] font-normal leading-[normal] relative shrink-0 text-[24px] text-[transparent] text-center whitespace-nowrap" data-node-id="1:17369" style={{ backgroundImage: "linear-gradient(80.91384596861978deg, rgb(64, 144, 187) 0%, rgb(51, 82, 135) 99.675%)" }}>
                  Log in
                </p>
                <p className="font-['Helvetica_Neue:Light'] leading-[24px] min-w-full relative shrink-0 text-[16px] text-black w-[min-content]" data-node-id="1:17370">
                  Please enter your ZenseAI log in detail
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="1:17371" data-name="Form">
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[392px]" data-node-id="1:17372" data-name="Email">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#212121] text-[12px] text-center whitespace-nowrap" data-node-id="1:17373">
                    Email address or username
                  </p>
                  <div className="border border-[#9c9a9a] border-solid content-stretch flex items-center justify-center p-[12px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:17374" data-name="Text field">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[16px] min-w-px not-italic relative text-[#615e83] text-[12px]" data-node-id="1:17375">
                      Email, username
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[392px]" data-node-id="1:17376" data-name="password">
                  <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-center justify-between leading-[normal] not-italic relative shrink-0 text-[12px] text-center w-full whitespace-nowrap" data-node-id="1:17377">
                    <p className="relative shrink-0 text-[#212121]" data-node-id="1:17378">
                      Password
                    </p>
                    <p className="[text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 text-[#615e83] underline" data-node-id="1:17379">
                      Forgot password?
                    </p>
                  </div>
                  <div className="border border-[#9c9a9a] border-solid content-stretch flex items-center justify-center p-[12px] relative rounded-[4px] shrink-0 w-full" data-node-id="1:17380" data-name="Text field">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[16px] min-w-px not-italic relative text-[#615e83] text-[12px]" data-node-id="1:17381">
                      Password
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-b content-stretch flex flex-col from-[#3885e7] items-start overflow-clip relative rounded-[8px] shrink-0 to-[#3223bf] w-[104px]" data-node-id="1:17382" data-name="Button">
                  <div className="bg-[#290576] border border-[#290576] border-solid content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="I1:17382;40000474:6829" data-name="Button - L">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1:17382;40000474:6830" data-name="Inner container">
                      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.08px] whitespace-nowrap" data-node-id="I1:17382;40000474:6834">
                        <p className="leading-[20px]">Log in</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Helvetica_Neue:Light'] leading-[0] not-italic relative shrink-0 text-[#615e83] text-[12px] w-full" data-node-id="1:17383">
                <span className="leading-[normal] text-[#212121]">New to ZenseAI?</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">Join now</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[1080px] items-center justify-center overflow-x-clip overflow-y-auto relative shrink-0" data-node-id="1:17384" data-name="Background">
        <div className="h-[1200px] relative shrink-0 w-[960px]" data-node-id="1:17385" data-name="bharath-kumar-NUNFHyhXezs-unsplash 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBharathKumarNunfHyhXezsUnsplash1} />
        </div>
      </div>
    </div>
  );
}