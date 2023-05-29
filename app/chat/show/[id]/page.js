'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ChatList from './_list';

export default function ChatShow() {

  const params = useParams();
  const id = params.id;

  if(id) {
    return (
      <div>
        <ChatList id={id}/>
      </div>
    )
  }

  return (
    <div></div>
  )
}
