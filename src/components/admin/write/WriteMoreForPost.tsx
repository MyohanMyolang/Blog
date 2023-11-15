"use client";

import React from "react";

type Props = {
  onReq: (moreData?: MoreInfoType) => Promise<null | undefined>;
  onCancle: () => void;
  intro?: string;
  imgSrc?: string;
};

export default function WriteMoreForPost({
  onCancle,
  onReq,
  intro,
  imgSrc,
}: Props) {
  return (
    <div className="fixed top-0 gap-4 bg-[#fffff0] dark:bg-slate-700 z-[100] flex flex-col items-center w-screen h-screen justify-center animate-[ZeroToFullSize_0.5s_ease-in]">
      <div className="grid grid-flow-col gap-8 gird-cols-2">
        <div>
          <div className="flex justify-center items-center md:h-[400px] md:w-[400px] bg-slate-500">
            이미지 업로드
            {/** Drag & Drop으로 Image Upload 기능 넣기 */}
          </div>
        </div>
        <textarea
          className="p-4 resize-none md:h-[400px] md:w-[400px]"
          placeholder="소개를 작성하여 주십시오."
        />
      </div>
      <div className="flex gap-3 [&>*]:cursor-pointer">
        <div onClick={onCancle}>취소</div>
        <div>작성</div>
      </div>
    </div>
  );
}
