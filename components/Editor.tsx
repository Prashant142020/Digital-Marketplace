'use client';

import { type Editor } from '@tiptap/react';
import { Button } from './ui/button';

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className=" flex flex-wrap gap-5 ">
      <Button type='button'>Hi</Button>
    </div>
  );
};
