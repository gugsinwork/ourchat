import React from "react";
import Image from "next/future/image";
import DefaultImage from "../public/images/default.png";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Link from "next/link";

const ChatCard = ({ chatData }) => {
  const [user, loading] = useAuthState(auth);
  const reciverEmail = chatData
    ?.data()
    ?.users?.filter((item) => item !== user?.email)?.[0];
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", reciverEmail));
  const [userSnapShot, loading2] = useCollection(q);
  const name = userSnapShot?.docs?.[0]?.data()?.name;
  const imageURL = userSnapShot?.docs?.[0]?.data()?.imageURL;
  const online = userSnapShot?.docs?.[0]?.data()?.online;

  return (
    <Link href={`/chats/${chatData?.id}`}>
    <div className="w-full mr-5 flex items-center py-3 px-5 bg-neutral-900  rounded-xl mt-4 space-x-2 cursor-pointer hover:scale-95 transition-all ease-in-out duration-200 hover:bg-neutral-900">
      <div className="rounded-full w-[55px] max-sm:w-[80px] max-sm:h-[60px] h-[55px] relative">
        <Image
          src={imageURL || DefaultImage}
          alt=""
          width={55}
          height={55}
          priority={true}
          quality={100}
          className="rounded-full max-sm:h-[40px] max-sm:w-[80px]"
        />
        {online ? <span className="w-3 h-3 bg-green-500 rounded-full absolute z-[999] bottom-0 max-sm:bottom-4 right-1"></span> : ""}
      </div>
      <div className="flex flex-col ">
        <span className="text-[14px] max-sm:text-[0px]">{name || "User"}</span>
      </div>
      
    </div>
    </Link>
  );
};

export default ChatCard;
