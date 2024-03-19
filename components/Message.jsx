import React from "react";

const Message = ({ msg }) => {
  const message = msg?.data()?.message;
  const createdAt = msg?.data()?.createdAt;
  const newDate = new Date(createdAt?.seconds * 1000);
  const time = newDate
    .toLocaleString("pt-BR", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .slice(0, 5);

  return (
    <div className="min-w-[100px] max-w-[400px] bg-blue-700 p-2 rounded-[20px] break-words">
      {message}
      <div className="w-full text-end max-w-[200px] text-[10px]">
        {time} {time >= 12 ? "PM" : "AM"}
      </div>
    </div>
  );
};

export default Message;

