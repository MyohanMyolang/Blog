import Image from "next/image";
import React from "react";

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="[&>div]:pb-4">
      <div id="Profile" className="flex justify-center ">
        <div id="ProfileImage" className="overflow-hidden rounded-full">
          <Image
            src="http://placehold.it/240x240/a9e2ff/2ea5e3&text=tmepImage"
            alt="Profile Image"
            height={240}
            width={240}
          />
        </div>
      </div>
      <div className="justify-center text-center dark:[&>*]:text-white">
        <h1 className="text-3xl font-bold ">Myolang</h1>
        <h4>temp Text</h4>
      </div>
    </div>
  );
}
