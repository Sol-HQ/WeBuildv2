import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-300 px-10 rounded-2xl py-5 dark:bg-trueGray-800">
            <p className="text-3xl leading-normal ">
              The Art's
              and 
              The Artist's
            </p>
            <Avatar
              image={userOneImg}
              name="Ein O. Fields"
              title="Bad A Billiards #135 The Tru"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-300 px-10 rounded-2xl py-5 dark:bg-trueGray-800">
            <p className="text-3xl leading-normal ">
              Str8 FIRE. 
            </p>
            <Avatar
              image={userTwoImg}
              name="Max Wallah"
              title="K.O."
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-10 rounded-2xl py-5 dark:bg-trueGray-800">
            <p className="text-3xl leading-normal ">
              This is the way...
            </p>
            <Avatar
              image={userThreeImg}
              name="The Wave it Sounds"
              title="Co-founder of this Wave"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-6 space-x-6">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-22 h-22">
        <Image
          src={props.image}
          width="100"
          height="80"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-700 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-900 bg-indigo-300 rounded-md ring-indigo-300 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-300">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
