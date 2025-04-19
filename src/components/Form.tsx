import {FormEvent, type ComponentPropsWithoutRef} from "react";

type FormProps = ComponentPropsWithoutRef<"form">;

export default function Form(props: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return <form onSubmit={handleSubmit}>{props.children}</form>;
}
