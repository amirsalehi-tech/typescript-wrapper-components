import {ComponentPropsWithoutRef, type ComponentPropsWithRef} from "react";

type AnchorProps = ComponentPropsWithRef<"a"> & {href?: string};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {href?: never};

function isAnchorProps(props: AnchorProps | ButtonProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: AnchorProps | ButtonProps) {
  if (isAnchorProps(props)) return <a {...props}></a>;
  return <button {...props}></button>;
}
