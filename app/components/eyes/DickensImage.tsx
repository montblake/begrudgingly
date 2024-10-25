import React from "react";
import Image from "next/image";

interface DickensImageProps {
  dickensRef: React.RefObject<HTMLDivElement>;
  eyePosition: { x: number; y: number };
  isMobile: boolean;
}

const DickensImage: React.FC<DickensImageProps> = ({
  dickensRef,
  eyePosition,
  isMobile,
}) => (
  <div
    className="absolute -bottom-[10vh] left-[12.5vw] transform-none w-[375px] h-[525px] landscape:top-[20vh] landscape:left-[5vw] landscape:transform-none landscape:w-[500px] landscape:h-[700px]"
    ref={dickensRef}
  >
    <Image
      src="/eyes_layers/pieces_shadows.png"
      alt="Charles Dickens Background"
      layout="fill"
      objectFit="contain"
      className="mix-blend-multiply relative z-10"
    />
    <Image
      src="/eyes_layers/dickens_body.png"
      alt="Charles Dickens Body"
      layout="fill"
      objectFit="contain"
      className="relative z-20"
    />
    <DickensEye
      src="/eyes_layers/dickens_left_eye.png"
      alt="Charles Dickens Left Eye"
      top={isMobile ? "10.25%" : "9.875%"}
      left={isMobile ? "47.5%" : "47%"}
      eyePosition={eyePosition}
      isMobile={isMobile}
    />
    <DickensEye
      src="/eyes_layers/dickens_right_eye.png"
      alt="Charles Dickens Right Eye"
      top={isMobile ? "10.25%" : "9.875%"}
      left={isMobile ? "51.5%" : "51%"}
      eyePosition={eyePosition}
      isMobile={isMobile}
    />
    <Image
      src="/eyes_layers/pieces_desk.png"
      alt="Charles Dickens Desk"
      layout="fill"
      objectFit="contain"
      className="relative z-40"
    />
  </div>
);

interface DickensEyeProps {
  src: string;
  alt: string;
  top: string;
  left: string;
  eyePosition: { x: number; y: number };
  isMobile: boolean;
}

const DickensEye: React.FC<DickensEyeProps> = ({
  src,
  alt,
  top,
  left,
  eyePosition,
  isMobile,
}) => (
  <div
    className="absolute z-30"
    style={{
      top,
      left,
      transform: `translate(${eyePosition.x * (isMobile ? 0.5 : 0.7)}px, ${
        eyePosition.y * (isMobile ? 0.5 : 0.7)
      }px)`,
    }}
  >
    <Image
      src={src}
      alt={alt}
      width={5}
      height={10}
      className="landscape:w-[10px] landscape:h-[10px]"
    />
  </div>
);

export default DickensImage;
