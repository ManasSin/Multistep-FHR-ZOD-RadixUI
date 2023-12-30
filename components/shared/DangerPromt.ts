"use client";

import { FormEvent, useEffect } from "react";

type Props = {
  UnsavedChanges: boolean;
  event?: FormEvent;
};

export const DangerPromt = ({ UnsavedChanges, event }: Props) => {
  // show th error if the user is exiting the form without save !
  useEffect(() => {
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      if (UnsavedChanges) {
        event.preventDefault();
        event.returnValue = "";
      }

      window.addEventListener("beforeunload", onBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", onBeforeUnload);
      };
    };
  }, [UnsavedChanges]);

  return;
};
