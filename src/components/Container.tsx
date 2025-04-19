import {type ElementType} from "react";

type ContainerProps = {
  as: ElementType;
};
// polymorphic component
export default function Container({as}: ContainerProps) {
  const Component = as;
  return <Component />;
}
