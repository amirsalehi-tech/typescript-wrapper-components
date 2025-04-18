import {ComponentPropsWithoutRef, type ComponentPropsWithRef} from "react";

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithRef<"a">;

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

export default function Button(props: AnchorProps | ButtonProps) {
  if (props.el === "anchor") return <a {...props}></a>;
  return <button {...props}></button>;
}
